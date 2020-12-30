import logo from './logo.svg';
import './App.css';

import Blogitem from './BlogCard'; //functional component
import { isArrayEmpty } from './Utils'; // Here we have to use the same exact name or alternate is 

// import {isArrayEmpty as isEmpty} from './Utils';

var blogArr= [
  {
    blogHeading:"Heading 1",
    id:1,
    para:'loro dolar espum loro dolar espum loro dolar espum loro dolar espum '
  },
  {
    id:2,
    blogHeading:"Heading 2",
    para:'body of the second card'
  },
  {
    id:3,
    blogHeading:"Heading 3",
    para:'body of the third card'
  }
]

const blogCard = isArrayEmpty(blogArr)?blogArr.map((item, pos) => {

  return(

    <Blogitem key={pos} text={item.blogHeading} description={item.para} id={item.id}/>


  );
}): console.log('Array is empty')




function App() {
 return(
   <div className="App">
      {blogCard}
   </div>
 );
}

export default App;
