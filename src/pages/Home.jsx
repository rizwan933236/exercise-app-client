import React, { useState } from 'react'
import bgimage from '../pictures/homePage.jpeg'
import PieRechartComponent from './Chart'

var sectionStyle = {
  width: "100%",
  height: '750px'
};

export default function Home() {
  // const [login, setLogin] = useState(false);
  const isLoggedIn = () => {
    const token = localStorage.getItem('Token');
    return !!token;
  };

  return (
<>

     {isLoggedIn() ? (
      
        <PieRechartComponent />
      ) : (
        <img src={bgimage} alt="Here is " style={sectionStyle} />
      )}
    </>
  );
}
