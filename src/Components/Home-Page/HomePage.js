import React, { useState } from 'react';
import fakeData from '../../Fake-data/genius.json'
import GeniusesShow from './../Geniuses-List/GeniusesShow';
import SelectedGeniuses from './../Selected-Geniuses/SelectedGeniuses';
import Header from './../Header/Header';

const HomePage = () => {
    const[geniuses,setGeniuses]=useState(fakeData);
    const [selectedGenius,setSelectedGenius]=useState([])
    const handleSelectedGenius=(id)=>{
        const singleGenius=geniuses.find(genius=>genius.id==id)
        setSelectedGenius([...selectedGenius,singleGenius])
        }
    return (
        <section className="">
        <Header/>
            <section className="main row mt-5">
        <div className="players-list col-lg-8">
        <div className='row g-4'>
        {geniuses.map((genius,index)=>
          <GeniusesShow key={index} genius={genius} handleSelectedGenius={handleSelectedGenius} />
           
            )}
    </div>
        </div>
        <div className="selected-players col-lg-4">
            <SelectedGeniuses selectedGenius={selectedGenius}/>
        </div>
    </section>
        </section>
    );
};

export default HomePage;