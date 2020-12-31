import React,{Component} from 'react';
import { dumpLags } from './Utils';

import classes from './BlogCard.module.css'; 

// css module
/*
    *)css modules are helpful for making Components are modular and independent because global modules are dependecy btwn different components
    here css modules are helpful for local style to the components
    advantages of the classes is that unique css class is created for every class it is mentioned.

*/


/*
exports are of two types 
1)default Export - is used when want to export only one module from a file

2)Named Export - is used when we want to export multiple modules from the same file

*/

/* this properties mentioned below are called props
    props get the data from the parameter passed in the App.js
*/

class BlogCard extends Component {
    state = {
        likeCount:0
    }
    onLikeBtnClick = () =>{
        this.setState((prevState,prevProp)=>{
            return {likeCount : prevState.likeCount +1};
        })
    }
    render(){
        dumpLags(this.props);

        return(
            <div className={classes.BlogCard}>
                <h3>{this.props.text}</h3>
                <p>{this.props.description}</p>

                <p>Like Count: {this.state.likeCount}</p>
                <button onClick={this.onLikeBtnClick}>Like</button>
            </div>
        )
    }
}

export default BlogCard;