import { useState } from "react";



function Edu() {
	
	const [edu, setEdu] = useState([]);

	const listEdu = edu.map(item =>
		<li key = {item.id}>
		<form className = "edu-form">
			<label>
        	University:
            <input 
            type="text" name="uni"
        		onChange={(e) => handleOnChange(e, item.id)}
				
            />
      </label>
			<label>
        	Course:
            <input 
            type="text" name="course"
        		onChange={(e) => handleOnChange(e, item.id)}
				
            />
      </label>
		</form>
		</li>

	)

	function handleOnChange(e, itemId) {
		
		const newEdu = [...edu];
		const index = newEdu.findIndex(item=>item.id === itemId);
		newEdu[index] = {...newEdu[index], [e.target.name]: e.target.value};
		setEdu(newEdu);
	}
	
	

	function addNewField() {
		setEdu([
				...edu,
				{id: crypto.randomUUID()}
		]);
	}

	console.log(edu)

	return (
		<>
				<ul>
						{listEdu}
				</ul>
				<button onClick={addNewField} className="add-button">Add</button>  
		</>                                                      
	);

}

export {Edu};




