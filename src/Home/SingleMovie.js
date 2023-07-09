import React,{useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { url,AppContext,AppProvider } from '../Context';
import './Home.css';


 const SingleMovie = () => {
    const {id}=useParams();
    const[isLoading,setIsLoading]=useState(true);
    const[movie,setMovie]=useState("");

    const getApi=async(url)=>{
      setIsLoading(true);
      try {
        const res=await fetch(url);
        const data= await res.json();
         
        if(data.Response==="True")
          { setIsLoading(false);
            setMovie(data);
            console.log(data);
              
          }
       } catch (error) {
        console.log(error);
         }
    }

    useEffect(()=>{
        const timeout=setTimeout(() => {
          getApi(`${url}&i=${id}`);   
        }, 800);
        return ()=>clearTimeout(timeout);
      },[id]);


    if(isLoading){
      return <div className='loading'>
        <p>Loading ...</p>
      </div>
    }
    

    return (
      <>
      <div className='movie-section'>
        <div className='movie-card'>
          <img src={movie.Poster} alt="" />
          <div className='card-content'>
          <p className='title' style={{fontFamily:"fantasy"}}>Title:{movie.Title}</p> 
          <p className='realesed' style={{fontFamily:"fantasy"}}>Released:{movie.Released}</p>
          <p className='actors' style={{fontFamily:"fantasy"}}>Actors:{movie.Actors}</p>
          <p className='title' style={{fontFamily:"fantasy"}}>Country:{movie.Country}</p>
          <p className='title' style={{fontFamily:"fantasy"}}>Director:{movie.Director}</p>
          <NavLink to="/home">Go Back</NavLink>
          </div>
        </div>
      </div>
      </>
    )
}

export default SingleMovie;
