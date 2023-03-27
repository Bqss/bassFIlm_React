import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (initialData = [], queryFn) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  useEffect(() => {
    async function qfn(){
        try{
            setIsLoading(true);
            const result = await queryFn();
            setData(result);
        }catch(err){
            setIsErr(true);
        }finally{
            setIsLoading(false);
        }
    }
    qfn();
  },[])
  return {data, isLoading, isErr}
}

export default useFetch