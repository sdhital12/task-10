import './App.css';

import  { useEffect, useState } from "react";

const Profile = () => {


const [state, setState] = useState({});
 
  useEffect(() => {
  const getGithubInfo = async () => {
    try{
      const jsonObject = await fetch('https://api.github.com/users/sdhital12');
      const jsObject = await jsonObject.json();
    setState(jsObject);
    }
    catch(error){
     console.log('error fetching data')
    }
  }
    getGithubInfo();
    
  }, [])

 
  return (
    <>
    
    <div className='container'>
      <div className='row '>
        <h3 className='text-center mb-4'>My Github Profile info</h3>
        
<div className='col-lg-3  col-md-4 me-4'>
  <img width='300px' src='https://www.shutterstock.com/shutterstock/photos/1935757348/display_1500/stock-photo--d-illustration-of-standing-beautiful-blonde-woman-pointing-hand-at-direction-portrait-of-cartoon-1935757348.jpg'alt='/'/>
  
</div>
<div className='col-lg-7 col-md-6'>
  <h4>Hi there, I am Sita</h4>
  <hr/>
  <h6>About Me:</h6>
  <p>
    Just a few days ago GitHub very quietly released a cool new feature : Profile README. This new feature allows users to create a 
    profile-level README file which gets displayed on their GitHub profile prominently. Through this article I will walk you through 
    this new feature and help you access it.


  </p>
  
  
  
  <div className="card mt-4 text-center col-md-12">
        <div className="infoCard">
            <img width='100px' className="pic rounded-circle" src = {state.avatar_url} />
            <h5 className="name">Name: "{state.name}"</h5>
          
            <h5 className="name">ID: "{state.id}"</h5>
            <h5 className="name">Login ID: "{state.login}"</h5>
            <h5 className="name">Created: "{state.created_at}"</h5>
            <h5 className="name">Last Active: "{state.updated_at}"</h5>
            <a href = 'https://api.github.com/users/sdhital12'> Goto api.git </a>
        </div>
        </div> 
</div>
        
      </div>
    </div>
    
      
      
    </>
  )
}

export default Profile;