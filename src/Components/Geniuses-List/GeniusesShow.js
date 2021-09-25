import React from 'react';

const GeniusesShow = ({genius,handleSelectedGenius}) => {
    const{id,name,expertise,age,salary,img}=genius;
    return (
        <section className='col-lg-3'>
        <div class="card">
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <h5 class="card-title">{expertise}</h5>
      <h5 class="card-title">Age :{age}</h5>
      <p class="card-text">{salary}</p>
      <a href="#" className="btn btn-primary" onClick={()=>handleSelectedGenius(id)}>Add Genius</a>
    </div>
  </div>
    </section>
    );
};

export default GeniusesShow;