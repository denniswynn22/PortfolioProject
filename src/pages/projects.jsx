import './Projects.css';
export default function Projects() {
    return (
        <div>
            <div className="MyProjects">
                <div className="CalculatorProject redressed-regular"> 
                <p>Calculator Project</p>
                <img src="./CalcImg.png" />
                </div>


                <div className="SnakeProject redressed-regular"> 
                <p>Snake Game Project</p> 
                <img src="./SnakeImg.png" />
                </div>
            </div>
        </div>
    )
}