import { useState,useEffect } from "react";
const useFetch= (url)=>{
    
        const [data,setData]=useState(null);
        const [isPending, setIsPending] = useState(null);
        const [error,setError]=useState(null);

        useEffect(()=>{
        
            fetch(url)
            .then(response=>{
                if(!response.ok){
                    throw Error('Could not fetch data');
                }
                return response.json();
            }).then(data=>{
                    setIsPending(false);
                    setData(data);
                    setError(null);
                    console.log(data);
                }).catch(err=>{
                    setIsPending(false);
                    setError(err.meessage);
                })
            },[url]);
            
    return{data,isPending,error};
}

export default useFetch;