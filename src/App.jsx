import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { GenInfo } from './GenInfo';

function App() {
  const [count, setCount] = useState(0)
  const [genInfo, setGenInfo] = useState({
    name: "",
    address: "Address",
    email: "email",
    phone: "phone number",
  });

  const haandleName = (e) => {
    genInfo.name = e.target.value;
    setGenInfo(genInfo.name);
  };

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
      <GenInfo 
        onNameChange={haandleName}
        nameVar={genInfo.name} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
