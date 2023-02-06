import React, {useState} from "react";
import "../../styles/index.css"

//create your first component
const Home = () => { 
	const [item, setItem]=useState("")
	const [toDoList, setToDoList]=useState([])
	console.log(item)
	console.log(toDoList)
 function myFunction(index) {
	let toDo = toDoList.filter((words, i)=>index!=i)
	setToDoList(toDo)
 }
	return (
	<><div>
			<input type="text" onChange={(e) => setItem(e.target.value)} value={item} className="input" placeholder="Add a task"></input>
			<button onClick={() => {
				if(item===""){
					return alert("You need to add task!")
				} else {
				setToDoList([...toDoList, item]);
				setItem("");
} 				
			} }>Add a Task</button>




		</div><div>
			{
				toDoList.map((words, index)=>{
					return(
						<><div key={index}>
							{words}
						</div><div>
						<button onClick={()=>{
								myFunction(index)
							}}>X</button>
							</div></>
					)
				})
			}
			</div></>
	);
};

export default Home;
