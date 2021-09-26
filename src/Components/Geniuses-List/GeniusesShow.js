import React from 'react';
import './GeniusShow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const GeniusesShow = ({genius,handleSelectedGenius}) => {
    const{id,name,expertise,age,salary,img,designation}=genius;
    return (
       <section className='col-lg-4 text-center'>
        <div className="card p-3 my-card rounded">
   <div>
   <img src={img} className="card-img-top w-50 my-image" alt="..."/>
   </div>
    <div className="card-body mt-2">
      
      <h4 className="card-title">{name}</h4>
      <h6 className="card-title text-primary">{designation}</h6>
      <h5 className="card-title">Expertise: {expertise}</h5>
      <h5 className="card-title">Age : {age}</h5>
      <h5 className="card-text">Salary : ${salary}</h5>
      
      </div>
      
      <button className="btn btn-primary" onClick={()=>handleSelectedGenius(id)}> <span className="text-light mx-2"><FontAwesomeIcon icon={faUserPlus} /></span> hire</button>

      <div className="d-flex justify-content-around mt-3">
      <span className="text-light fs-2 "><FontAwesomeIcon icon={faFacebook} /></span>
      <span className="text-light fs-2"><FontAwesomeIcon icon={faGithub} /></span>
      <span className="text-light fs-2"><FontAwesomeIcon icon={faLinkedin} /></span>
      </div>
      
    </div>
  
    </section>
    );
};

export default GeniusesShow;