import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

  const { id } = useParams();
  const { isPending, error, data:blog } = useFetch('/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {

    fetch('/blogs/' + blog.id, {

    method:"DELETE",
    })
    .then(() => {

      history.push('/');
    })
  }

  return(

    <div className="blog-details">

      {error && <div>{ error }</div>}

      {isPending && <div>Loading...</div>}

      {blog &&
      <article>
        <h2>{blog.title}</h2>
        <div>{blog.body}</div>
        <p>Written by {blog.author}</p>
        <button onClick={ handleDelete }>Delete</button>
      </article>}
      
    </div>
  );
}

export default BlogDetails;