import headshot from "./Profile.jpeg"
import "./MainContent.css"

function MainContent() {
  console.log(headshot);
  return (
    <div className="MainContent">
      <div className="Hello"> Hi I am Dennis Wynn </div> 
      <img className="headshot" src={headshot} alt="Dennis Wynn Headshot"/>
      <div>Student at Nebula Academy</div>
    </div>
  );
}

export default MainContent;
