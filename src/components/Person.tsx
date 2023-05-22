// Basic Type: Object

interface PersonProps{
    name:{
        first: string,
        last: string
    }
}


function Person(props:PersonProps){

    return(
        <div className=""> {props.name.first} {props.name.last}</div>
    )
}

export default Person;