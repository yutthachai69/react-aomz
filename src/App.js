import logo from "./logo.svg";
import "./App.css";
import Buuton from "./Button";
import {useState} from 'react';

function App() {
  const name = "Yutthachai Khammeephak";

  const employees = [
    { name: "AAAA", email: "AAAA@gmail.com", age: 20 },
    { name: "BBBB", email: "BBBB@gmail.com", age: 21 },
    { name: "CCCC", email: "CCCC@gmail.com", age: 22 },
  ];
  console.log(employees);
  const[count,setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={()=> setCount(count +1)}>Count ++</button>
        <button onClick={()=> setCount(count -1)}>Count --</button>
        <h1>Hello {name}</h1>
        {employees.map((em, index) => (
          <li key={index}>
            ชื่อพนักงาน: {em.name} | อีเมลล์: {em.email} | อายุ: {em.age}
          </li>
        ))}
        <Buuton text="OK" />
        <Buuton text="cancel" />
        <Buuton text="calculas" />
      </div>
      <h1 className="text01">Test</h1>
    </>
  );
}

export default App;
