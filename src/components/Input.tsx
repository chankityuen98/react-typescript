// Event Type: Input type onChange event

interface InputProps {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input (props: InputProps){

    return(
        <>
        <input type="text" name="" id="" value={props.value} onChange={props.handleChange}/>
        </>
    )
}


export default Input;