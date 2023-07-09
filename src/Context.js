import React, { createContext,useContext, useEffect, useState } from 'react';
import Movie from './Home/Movie';

export const url=`https://omdbapi.com/?apikey=9f698cae`;
const AppContext=React.createContext();

const AppProvider=({children})=>{

    const[isLoading,setIsLoading]=useState(true);
    const[movie,setMovie]=useState([]);
    const[isError,setIsError]=useState({show:"false",msg:""});
    const[search,setSearch]=useState("titanic")

   

    const getApi=async(url)=>{
        setIsLoading(true);
     try {
       const res=await fetch(url);
       const data= await res.json();
       if(data.Response==="True")
         {
            setIsLoading(false);
            setIsError({
                show:false,
                msg:""
            })
            setMovie(data.Search);
            
         }else{
            setIsError({
                show:true,
                msg:data.Error}
                );
         }
       
   
     } catch (error) {
        console.log(error);
     }
    }

    useEffect(()=>{

       const timeout=setTimeout(() => {
            getApi(`${url}&s=${search}`);   
        }, 800);

        return ()=>clearTimeout(timeout);
        
    },[search]);
    
   return (<AppContext.Provider value={{isLoading,isError,movie,search,setSearch,isError}}>
     {children}
   </AppContext.Provider>
   );  
       
}

    //GLOBAL context hook

    const useGlobalContext=()=>{
        return useContext(AppContext);
    }


export {AppProvider,AppContext};