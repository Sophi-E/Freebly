import React, { useState, useEffect } from 'react';

// import axios from 'axios';
import * as DataSource from '../../services/firestore';
//import * as DataSource from '../../services/freebli';

import Spinner from '../../components/Spinner/Spinner';

import styles from './PostDetail.module.css';

import Layout from '../../components/layout';
import Dialog from '../../components/Dialog';

//@ts-ignore
const PostDetail = ({ match }) => {
  const [post, setPost] = useState<any>({});
  
  let postId = match.params.id;

  useEffect(() => {
    // Because useEffect doesn't accept asynchronous functions, we have
    //  to define our async function in here, and then call it.
    const findPostById = async (id: string) => {
      const thePost = await DataSource.findPostById(id);
      setPost(thePost);
    };

    findPostById(postId);
  }, [postId]);

  return (
    <Layout>
      {console.log(post) === null || !post.hasOwnProperty('id') ? (
        <Spinner />
      ) : (
        <div className={styles.postDetail} id={post.id}>
          <h2>{post.data.title}</h2>
          { post.data.images 
            ? <div className={styles.thumbnail}>
                {post.data.images.map((image:any, index:number) =>
                  <img key={image.id} src={image.url} className={styles.primaryImg} alt='post-pic' />
                )}

              </div>
            : post.data.imageUrl 
              ? <img src={post.data.imageUrl} alt='post-pic' />
              : null

          }

          <p>Location: {post.data.location}</p>
          <p>Free shipping: {post.data.shipping}</p>
          <p>Posted on: {new Date(post.data.postDate).toLocaleDateString()}</p>
          <p>Comment: {post.data.comment}</p>
          
          <Dialog trigger={<button className={styles.reqBtn}>Request Item</button>} title='Send Request Message'> 
            <form>
              <label htmlFor='message'>Message</label>
              <textarea id="message" rows={3} cols={40}></textarea>
              <button>Cancel</button><button>Send</button>
            </form>
          </Dialog>
        </div>
      )}
    </Layout>
  );
};

export default PostDetail;
