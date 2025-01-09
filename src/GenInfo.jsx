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

  const handleName = (e) => {
    genInfo.name = e.target.value;
    const newGetInfo = {...genInfo}
    setGenInfo(newGetInfo);
  };
  
  return (
	<div className="genInfo">
		<label>
        Full name:{' '}
        <input
          value={genInfo.name}
          onChange={handleName}
        />
    </label>
	</div>
	);
}

export {GenInfo2};
//export {GenInfo,GenInfo2};
