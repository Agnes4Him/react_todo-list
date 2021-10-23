import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Henry');

  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    const blog = {title, body, author}

  fetch('/blogs', {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify(blog)
  })
  .then(() => {

    history.push('/');
  })
  }

  return (

    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="moji">moji</option>
          <option value="shade">shade</option>
          <option value="henry">henry</option>
          <option value="destiny">destiny</option>
          <option value="melody">melody</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create;