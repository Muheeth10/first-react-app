import logo from './logo.svg';
import './App.css';

function App() {
  var fname="jhon"
  let lname ="wick"
  let age = 28
  let job = "anynomous"

  const getFullName = (fname,lname) =>` ${fname} ${lname}`
  
  const pholder = 'enter your name'
  const inputBox = <input placeholder={pholder} />

  const arr = [1,2,3,4,5]
  const ageObj={
    age1:18,
    age2:20,
    age3:25
  }
  return (
    <div className="App">
      <h3>Full Name: { getFullName(fname,lname)}</h3>
      <p>Age:{ageObj.age1}</p>
      <p>Job : {job}</p>
      {arr[0]}
      {inputBox}
    </div>

  );
}

export default App;
