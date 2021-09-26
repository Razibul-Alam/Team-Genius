import React from 'react';
import './GeniusShow.css'
const GeniusesShow = ({genius,handleSelectedGenius}) => {
    const{id,name,expertise,age,salary,img,designation}=genius;
    return (
       <section className='col-lg-4 text-center'>
        <div className="card my-3 shadow">
   <div>
   <img src={img} className="card-img-top w-50 my-image" alt="..."/>
   </div>
    <div className="card-body">
      
      <h5 className="card-title">{name}</h5>
      <h6 className="card-title">{designation}</h6>
      <p className="card-title">Expertise: {expertise}</p>
      <p className="card-title">Age :{age}</p>
      <p className="card-text">Salary :- {salary}</p>
      <button className="btn btn-primary" onClick={()=>handleSelectedGenius(id)}>Add Genius</button>
      </div>
    </div>
  
    </section>
    );
};

export default GeniusesShow;