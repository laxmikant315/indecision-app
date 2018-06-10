import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

const OptionModal =(props)=>(
 <Modal 
 isOpen={!!props.selectedOption} 
 contentLabel="Selected Otion" 
 onRequestClose={props.handleClearSelectedOption}
  closeTimeoutMS={200}
  className="modal"
  >
    <h1 className="modal__title">Selected Option</h1>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}

    <button className="button"  onClick={props.handleClearSelectedOption}>Okay</button>
 </Modal>   
);
export default OptionModal