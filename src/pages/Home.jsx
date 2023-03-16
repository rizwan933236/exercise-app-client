import React from 'react'
import bgimage from '../pictures/homePage.jpeg'
var sectionStyle = {
  width: "100%",
  height: '750px'
};
export default function Home() {
  return (
    <div>
      <img src={bgimage} alt="Here is " style={sectionStyle} />
    </div>
  )
}
