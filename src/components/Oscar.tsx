// Advanced Type: when children is a ReactNode / component / DOM
interface OscarProps{
    children: React.ReactNode
}


function Oscar (props:OscarProps){

    return(
        <>
        {props.children}
        </>
    )
}


export default Oscar; 