import React, { useState } from 'react';
import firebase from 'firebase';
import shortid from 'shortid';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';


import { storage } from '../../services/firestore';  

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const storageRef = storage.ref();

const ImageUploader = ({
  onRequestSave,
  onRequestClear,
  defaultFiles = []
}) => {
  const [files, setFiles ] = useState(defaultFiles);
  const server = {
    // this uploads the image using Firebase
    process: (fieldName, file, metadata, load, error, progress, abort) => {
      const id = shortid.generate();
        
      const task = storageRef.child(`images/${id}`).put(file, {
        contentType: 'image/jpeg',
      })

      task.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snap => {
          // Progress updates!
          progress(true, snap.bytesTransferred, snap.totalBytes);
        },
        err => {
          // error handling
          error(err.message);
        },
        () => {
          // Finished uploading!
          load(id);
          /****
           * Let's change this a little: I want to save the image
           *   as an object in the state.
           */
          const imageUrl = storageRef.child(`images/${id}`).getDownloadURL()
               .then((url) => {
                  onRequestSave({
                    id,
                    url
                  });
               })
        }
      )
    },

    // this loads an already-uploaded image to firebase
    load: (source, load, error, progress, abort) => {
      // reset the progress...
      progress(true, 0, 1024);

      // source is now an array - we need to forEach that.

      source.forEach(image => {

              // fetch teh download url from firebase
      storageRef
      .child(`images/${image}`)
      .getDownloadUrl()
      .then(url => {
        // Fetch the actual image using the dl url
        // and provide that to FilePond using the load cb
        const xhr = new XMLHttpRequest();
        xhr.responseType='blob';
        xhr.onload = function(event){
          const blob = xhr.response;
          load(blob);
        }
        xhr.open('GET', url);
        xhr.send()
      })
      .catch(err =>{
        error(err.message);
        abort();
      })


      }) 

    },
  };


  return (
    <FilePond files={files}
              allowMultiple={true}
              maxFiles={5}
              onupdatefiles={fileItems=>{
                if(fileItems.length === 0){
                  onRequestClear()
                }
                setFiles(fileItems.map(fileItem => fileItem.file) )
              }}
              server={server}
            />
  )
}

export default ImageUploader;