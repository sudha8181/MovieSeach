import React, { useContext } from 'react';
import { AppContext ,AppProvider} from '../Context';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'animate.css';


 const Movie = () => {
  const {isLoading,movie}=useContext(AppContext);
  console.log(isLoading);

 if(isLoading){
   return <div >
    <div className='loading'>Loading...</div>
     </div>
    }

 return (
<>
    {/* home page*/}
     <div className="highlights my-5 mx-5">
            <h2 className="text-dark"> Movies</h2>
      </div>   
      {/*movie layout*/}   
     <div className=" container-fluid d-flex justify-content-evenly flex-wrap mx-auto px-12" style={{padding:" 0rem 4rem 0rem 4rem"}}>  
        {
          movie.map((current,index)=>{
                const{imdbID,Title,Poster}=current;
                const moviename=Title.substring(0,15);
                return <NavLink to={`/movies/${imdbID}`}  >
                <div className="item my-3 py-3">
                    <div className='item-description d-flex flex-column align-items-center'>
                    <h5 className='text-center'>{moviename>=15 ?`${moviename}...`:`${moviename}`}</h5>
                    <img  src={Poster} alt="" />
                    </div>
                    </div>
                </NavLink>
           })}
     </div> 

        
</>);
}

export default Movie;
