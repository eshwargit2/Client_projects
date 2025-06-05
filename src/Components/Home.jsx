import React, { useState } from 'react'
import './Home.css'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'


const Home = () => {

const navigate = useNavigate();
    
const [loading , setloading]=useState(false );
const sample =()=>{
        setloading(true);
        setTimeout(() => {
             navigate('/register')
        }, 3000);
    } 
   
  return (
    <div className='home-section'>
        <div className="container ">
             <p className='skip text-black' >skip</p>
            <div className="row  d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center ">    
                    <img src={viteLogo} alt="   " />
                </div>
                <div className="col-12 text-center ani " >
                    <h2  >Enjor your <br />lige with <span className='text-success' >Plants</span> </h2>
                </div>
                <div className="col-12 justify-content-center" style={{display:'flex'}}  >

               {!loading?(
                     <button id='btn'   onClick={sample} type='button'  className='btn mt-4 justify-content-center  ' ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z"/></svg></button>
               ):(<div class="spinner-border text-success"   id='spiner' role="status">
                 <span class="sr-only">Loading...</span>
                  </div>)

               }
                
                
             </div>    
            </div>
        </div>  
       
    </div>
  )
}

export default Home