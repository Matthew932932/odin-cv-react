import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import { GenInfo, GenInfo2 } from './GenInfo'
import { GenInfo2 } from './GenInfo'
import {Edu} from './Edu.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const [genInfo, setGenInfo] = useState({
  //   name: "",
  //   address: "Address",
  //   email: "email",
  //   phone: "phone number",
  // });

  const [edu, setEdu] = useState([]);
  

  // const handleName = (e) => {
  //   genInfo.name = e.target.value;
  //   setGenInfo(genInfo.name);
  // };

  //function handleFirstNameChange(e) {
    // const newPerson = { ...person, firstName: person.firstName = person.fisrtName + e.target.value};
    //person.firstName = e.target.value;
    //const newPerson = { firstName: person.firstName, ...person}     //works but why when not above, maybe because of the internal assignment must be after a spread???????  
    //const newPerson = { ...person, firstName: person.firstName }   //works
    //const newPerson = Object.assign({}, person);      //works
    //const newPerson = {...person};
    //setPerson(newPerson);
  //}

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <h2>Gen Info 1</h2> */}
      {/* <GenInfo 
        onNameChange={handleName}
        nameVar={genInfo.name} /> */}
      <h2>Gen Info 2</h2>
      <GenInfo2 />  
      <h2>Edu</h2>
      <Edu
        edu={edu}
        setEdu={setEdu}
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
