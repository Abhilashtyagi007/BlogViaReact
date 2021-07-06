import { useState,useEffect } from "react";
const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState();

    useEffect(()=> {
        const abortcont = new AbortController();

        setTimeout(()=>{
            fetch(url , {signal : abortcont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Data could not be fetched');
                    
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) =>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1000)

        return () => abortcont.abort();
    },[url])

    return {data,isPending,error};
}
 
export default useFetch;