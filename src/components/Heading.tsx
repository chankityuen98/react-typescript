// Advanced Type: children - {only when children is string}

interface HeadingProps {
    children: string
}

function Heading (props:HeadingProps){


    return(
        <>
        <h1>{props.children}</h1>
        </>
    )
}


export default Heading;