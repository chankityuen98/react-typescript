// Basic Type: Array of object
// Import Props from other file
import { Name } from "./Person.Types"
interface PersonListProps {
    names:Name[]
}

function PersonList(props:PersonListProps){


    return(
        <div className="">
            {props.names.map((name)=>{
                return(
                    <>
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                    </>
                )
            })}
        </div>
    )
}

export default PersonList;