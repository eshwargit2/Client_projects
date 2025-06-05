import React from 'react'
import './DashHome.css'
import Navbar from './Navbar'
import Carditem from './Carditem'
import viteLogo from '/vite.svg'

const Dashboard = () => {
  
  
//card details in props 
  const carddetalis = {
        img:viteLogo,
        name:"Fresh Green",
        price:"$20.0"
  }


    

  return (
    <div className='dash-page' >

       <div className="container">
        <div className="row">
            <div className="col-12 mt-4 ">
                <h2>Fiund 10 Results</h2>
            </div>
            <div className="col-10  ">
              <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" className='input' placeholder="  Plants" />
            </div>
            <div className="col-2 mt-4 ">
                <button className='filter-btn' >
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></button>   
            </div>
        </div>
       </div>

       <div className="container mt-3 ">
        <div className="row">
             <div className="col-12 nav-item ">
              <p >Add</p>
              <p>Indoor</p>
              <p>Outdoor</p>
              <p>Flows</p>
             </div>
        </div>
       </div>

    
      <div className="container mt-5">
        <div className="row  ">
          <div className="col-12 card-container  ">
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} /> 
          </div>
          <div className="col-12 card-container mt-4  ">
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} /> 
          </div>
          <div className="col-12 card-container mt-4  ">
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} />
             <Carditem details={carddetalis} /> 
          </div>
        </div>
      </div>
       



       <div className="col-12 "  >
        <Navbar/>
       </div>
    </div>
  )
}

export default Dashboard