import headshot from "./Profile.jpeg"
import "./MainContent.css"

function MainContent() {
  console.log(headshot);
  return (
    <div className="MainContent">
      <div className="Hello"> Hi I am Dennis Wynn </div> 
      <img className="Headshot" src={headshot} alt="Dennis Wynn Headshot"/>
      <div className ="Student"> Student at Nebula Academy</div>
    </div>
  );
}

export default MainContent;
