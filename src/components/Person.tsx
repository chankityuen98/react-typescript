// Basic Type: Object, Import type / interface
import { PersonProps } from "./Person.Types";


function Person(props:PersonProps){

    return(
        <div className=""> {props.name.first} {props.name.last}</div>
    )
}

export default Person;