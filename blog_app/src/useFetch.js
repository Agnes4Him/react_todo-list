import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      
      fetch(url)
  
    .then((res) => {
  
      if(!res.ok) {
  
        throw Error('Unable to fetch data');
  
      }
     
      return res.json();
  
      })
  
      .then((data) => {
  
        setIsPending(false);
        setData(data);
        setError(null);
      })
  
      .catch((err) => {

        if(err.name === 'AbortError') {

          console.log("Fetch aborted");
          
        }else{
  
        setIsPending(false);
        setError(err.message);

        }
      })
      }, 1000);
  
  }, [url]);

  return { data, isPending, error };

}

export default useFetch;