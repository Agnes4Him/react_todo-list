function Backdrop(props) {

  return (
  
  <div>

    <div className='backdrop' onClick={props.onCancel}></div>

  </div>

  );
}

export default Backdrop;