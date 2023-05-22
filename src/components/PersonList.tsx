// Basic Type: Array of object

interface PersonListProps {
    names:{
        first: string,
        last: string
    }[]
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