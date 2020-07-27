import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top:          "50%",
    right:        "50%",
    bottom:       "auto",
    left:         "auto",
    marginRight:  "-50%",
    transform:    "translate(-50%, -50%)"
  }
};



Modal.setAppElement("#root");

 const Dialog = ({children}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const afterOpenModal = () => subtitle.style.color = "#f00";

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen}
             onAfterOpen={afterOpenModal}
             onRequestClose={closeModal}
             style={customStyles}
             contentLabel="Example Modal"
             >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>Close modal</button>
        { children }     
      </Modal>
    </div>
  );
}

export default Dialog;