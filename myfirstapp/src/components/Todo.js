import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState} from 'react';

function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {

    setModalIsOpen(true);

  }

  function closeDeleteHandler() {

    setModalIsOpen(false);
  }

  return (

    <div>

      <div className='card'>

        <h3>{props.text}</h3>

        <div className='action'>

          <button className='btn' onClick={deleteHandler}>Delete</button>

        </div>

      </div>

      {modalIsOpen && <Modal onCancel={closeDeleteHandler} onConfirm={closeDeleteHandler} />}

      {modalIsOpen && <Backdrop onCancel={closeDeleteHandler} />}

    </div>

  );
}

export default Todo;