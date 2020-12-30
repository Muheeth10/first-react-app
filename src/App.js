import logo from './logo.svg';
import './App.css';

var mObj={
  blogHeading:"Heading",
  para:'loro dolar espum loro dolar espum loro dolar espum loro dolar espum '
}

// style are two types inline and external. In inline objects are passed unlike the strings in the in javascript.
// since style is an object it can be stored in the variable

const boxstyle = {
  maxWidth:'30%',
  display:'inline-block',
  margin:'16px',
  padding:'16px',
  backgroundColor:'lightblue',
  borderRadius: '5px',
  boxShadow:'0 2px 5px #ccc'
}

function App() {
 return(
   <div className="App">
     <div style={boxstyle}>
       <h3>{mObj.blogHeading}</h3>
       <p>{mObj.para}</p>
     </div>
    
     <div className="blogCard">
       <h3>{mObj.blogHeading}</h3>
       <p>{mObj.para}</p>
     </div>
    
     <div className="blogCard">
       <h3>{mObj.blogHeading}</h3>
       <p>{mObj.para}</p>
     </div>

   </div>
 );
}

export default App;
