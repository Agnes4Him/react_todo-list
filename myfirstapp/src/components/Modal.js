function Modal(props) {

  return (

    <div>

      <div className='modal-card'>

        <p>Are you sure?</p>

        <button className='modal-btn' onClick={props.onCancel}>Cancel</button>

        <button className='modal-btn' onClick={props.onConfirm}>Confirm</button>

      </div>

    </div>
  );
}

export default Modal;