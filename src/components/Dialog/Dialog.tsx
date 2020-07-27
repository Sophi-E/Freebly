import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styles from "./Dialog.module.css";


const customStyles = {
  overlay: {
    backgroundColor: "#ccc",
  },
  content: {
    top:             "50%",
    right:           "50%",
    bottom:          "auto",
    left:            "auto",
    marginRight:     "-50%",
    transform:       "translate(-50%, -50%)"
  }
};

type DialogProps = {
  title: string,
  trigger: any,
}


Modal.setAppElement("#root");

 const Dialog: FunctionComponent<DialogProps> = ({title, trigger, children}) => {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const afterOpenModal = () => subtitle.style.color = "#f00";

  return (
    <div>
      <span onClick={openModal}>{trigger}</span>
      <Modal isOpen={modalIsOpen}
             onAfterOpen={afterOpenModal}
             onRequestClose={closeModal}
             style={customStyles}
             contentLabel="Example Modal"
             >
          <div className={styles.dialog} >
            <header>
              <h2 ref={_subtitle => (subtitle = _subtitle)}>{title}</h2>
              <span onClick={closeModal} className={styles.closeBtn}>x</span>
            </header>
            <div className={styles.dialogContent}>
             { children }     
            </div>
            </div>
      </Modal>
    </div>
  );
}

export default Dialog;
