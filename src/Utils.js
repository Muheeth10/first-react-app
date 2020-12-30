const isArrayEmpty = (arr) =>{
    if( arr !== undefined && arr!=null && arr.length>0){
        return true;
    }

    return false;
}

export const dumpLags = (message) => { // this syntax is used only for the multiple (i.e, named) export
    console.log(message);

    //sends tools for the tracking
}

export { isArrayEmpty}
//export can also be declared at the definition of the functions or variables or objects