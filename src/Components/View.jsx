import React from 'react'
import './View.css'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
import Swap from './Swap'

const View = () => {
  
    const navigate= useNavigate();
    const back=()=>{
        navigate('/dashome')
    }
   
    
    const swap =()=>{
        let up_scroll =document.getElementById('up_scroll');
        console.log('swap btn');
        if(up_scroll.style.height==="60px"){
           up_scroll.style.height="700px" 
        }else{
             up_scroll.style.height='60px'
        }
    }   


  


  return (
    <div className='view-section'  > 

        <div className="container d-flex justify-content-center">
            <div className="backbtn" onClick={back} >o</div>
            <div className="row ">
                <div className="col-12  mt-5 d-flex justify-content-center ani" >
                    <img src={viteLogo} alt="" width={200} />
                </div>
                <div className="col-12 mt-5 ani ">
                    <h3>Sleevers variable garden tools</h3>
                    <p className='mt-2 text-black' >planasts make your lige with minimal and happy love
                        plants more and ejour life
                    </p>
                </div>
            </div>
        </div>

        <div className="container up-scroll" id='up_scroll'     >
            <div className="row">
                <div className="col-12 d-flex justify-content-center "  >
                    <span className='text-center text-white fs-1' onClick={swap}   >______________</span>
                </div>
                <div className="container m-5">
                    <div className="row mt-5">
                        <div className="col-3">
                            <h6>Height</h6>
                            <p>30cm-40cm</p>
                        </div>
                        <div className="col-3">
                            <h6>Temparature</h6>
                            <p>20°C to 25°C</p>
                        </div>
                        <div className="col-3 ms-1">
                            <h6>Humadity</h6>
                            <p>4.2%</p>
                        </div>
                        <div className="col-5 mt-5">
                            <h6>TotaL Price</h6>
                            <p>$20.0</p>
                        </div>
                        <div className="col-6 mt-5 ">
                              <button type='button' className='btn btn-success'  > Add to Card  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default View