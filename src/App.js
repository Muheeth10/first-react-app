import logo from './logo.svg';
import './App.css';

var blogArr= [{
  blogHeading:"Heading 1",
  para:'loro dolar espum loro dolar espum loro dolar espum loro dolar espum '
},
{
  blogHeading:"Heading 2",
  para:'body of the second card'
},
{
  blogHeading:"Heading 3",
  para:'body of the third card'
}
]

const blogCard = blogArr.map((item, pos) => {
  console.log(item)
// using the pos for id is the bad practice use the objects or function for the id
  return(
    
     <div className="BlogCard" key={pos}>
       <h3>{item.blogHeading}</h3>
       <p>{item.para}</p>
     </div>

  );
})

// style are two types inline and external. In inline objects are passed unlike the strings in the in javascript.
// since style is an object it can be stored in the variable



function App() {
 return(
   <div className="App">
      {blogCard}
   </div>
 );
}

export default App;
