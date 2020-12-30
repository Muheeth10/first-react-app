import React from 'react';
import { dumpLags } from './Utils';

/*
exports are of two types 
1)default Export - is used when want to export only one module from a file

2)Named Export - is used when we want to export multiple modules from the same file

*/

/* this properties mentioned below are called props
    props get the data from the parameter passed in the App.js
*/

const BlogCard = (props) => {
    
    dumpLags(props);

    return(
    <div className="BlogCard">
        <h3>{props.text}</h3>
        <p>{props.description}</p>
    </div>
    )
}

export default BlogCard;