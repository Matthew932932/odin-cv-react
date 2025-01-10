import { useState } from 'react'

// function GenInfo({ 
// 	onNameChange, 
// 	nameVar 
// }) {
//   return (
// 	<div className="genInfo">
// 		<label>
//         Full name:{' '}
//         <input
//           value={nameVar}
//           onChange={onNameChange}
//         />
//       </label>
// 	</div>
// 	);
// }

function GenInfo2() {
  
const [genInfo, setGenInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  // const handleName = (e) => {
  //   genInfo.name = e.target.value;
  //   const newGetInfo = {...genInfo}
  //   setGenInfo(newGetInfo);
  // };
  
  function handleOnChange(e) {
		
		//const newGenInfo = [...genInfo];
		//const index = newGenInfo.findIndex(item=>item.id === itemId);
		const newGenInfo = {...genInfo, [e.target.name]: e.target.value};
		setGenInfo(newGenInfo);
	}
  
  return (
	<div className="genInfo">
		<label>
        	Full name 2: {' '}
            <input 
            type="text" name="name"
        		onChange={(e) => handleOnChange(e)}
				
            />
    </label>
    <label>
        	Address: {' '}
            <input 
            type="text" name="adress"
        		onChange={(e) => handleOnChange(e)}
				
            />
    </label>
    
    
	</div>
	);
}

export {GenInfo2};
//export {GenInfo,GenInfo2};
