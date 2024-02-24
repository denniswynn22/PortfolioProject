export default function Projects() {
    return (
        <div>
            <div className="MyProjects redressed-regular">
                <div className="CalculatorProject redressed-regular">  Hi I am Dennis Wynn</div>
                <div className= "SnakeProject redressed-regular"></div>
            </div>
        </div>
    )
}


// export default function Projects() {
//     return (
//         <div className='projects'>
//             <div className='projectsLeftSide'>
//                 <h1>Hello From Projects</h1>

//                 {/* Add 3 buttons for different projects*/}
//                 <Link to={`/projects/1`} > {/* Absolute Path*/}
//                     <button>Project 1</button>
//                 </Link>
//                 <Link to={`2`} > {/* Relative Path*/}
//                     <button>Project 2</button>
//                 </Link>
//                 <Link to={`3`} > {/* Relative Path*/}
//                     <button>Project 3</button>
//                 </Link>
//             </div>
//             <div
//                 className='projectsRightSide'>
//                 <Outlet />
//             </div>
//         </div>
//     )
// }
// export function Project() {

//     let { id } = useParams()

//     id = id - 1

//     const projects = [
//         {
//             name: 'Project 1',
//             technologies: 'React, JavaScript, HTML, CSS',
//             description: 'This is a project that I made'
//         },
//         {
//             name: 'Project 2',
//             technologies: 'React, JavaScript, HTML, CSS',
//             description: 'This is a project that I made'
//         },
//         {
//             name: 'Project 3',
//             technologies: 'React, JavaScript, HTML, CSS',
//             description: 'This is a project that I made'
//         }
//     ]

//     return (
//         <div>
//             <h2>Project Name: {projects[id].name}</h2>
//             <p>Technologies Used: {projects[id].technologies}</p>
//             <p>Project Description: {projects[id].description}</p>
//         </div>
//     )
// }