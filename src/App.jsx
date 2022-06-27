import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';

function App(){
  let currDate = new Date();
  let currHour = currDate.getHours();
  let greeting = "";
  const cssStyle = {};
  if(currHour >=0 && currHour <= 9){
    greeting = "Good Morning";
    cssStyle.color = "green";
  }
  else if(currHour >=10 && currHour <= 18){
    greeting = "Good Evening";
    cssStyle.color = "orange";
  }
  else if(currHour >=19 && currHour <= 24){
    greeting = "Good Night";
    cssStyle.color = "Orange";
  }
  return (
  <>
  <div>
    <h1>
      Hello, <span style={cssStyle}>{greeting}</span>
    </h1>
  </div>
  </>
  );
  
}

export default App;