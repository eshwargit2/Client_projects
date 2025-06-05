import React from 'react'

import './Carditem.css';
import { useNavigate } from 'react-router-dom';


const Carditem = ({details}) => {
 
    const rediract = useNavigate();

   const view=()=>{
       rediract('/view')
   }

  return (
    <div className='card-tool'  >
        <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-5 card d-flex justify-content-center ">
              <div className="card-img d-flex justify-content-center">
                <img src={details.img} alt="" width={100} />
              </div>
              <h2 className='mt-1' >{details.name}</h2>
              <p className='text-success' >{details.price}</p>
              <button className='' onClick={view} > Add to Card </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carditem