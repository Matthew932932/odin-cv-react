function Edu({edu,setEdu}) {
	
	const listEdu = edu.map(item =>
		<li key = {item.id}>
		<form className = "edu-form">
			<label>
        	Organization Name:
            <input 
            type="text" name="name"
        		onChange={(e) => handleOnChange(e, item.id)}
				
            />
      </label>
		</form>
		</li>

	)

	function handleOnChange(e, itemId) {
		//e.preventDefault();      ???????needed
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




