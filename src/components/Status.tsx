// Advanced Type: fix variable

interface StatusProps{
    status: 'loading' | 'success' | 'error'
}


function Status(props:StatusProps){
    let msg

    if (props.status === "loading") {
        msg = "Loading..."
    }else if (props.status === 'success') {
        msg = 'Data Fetched Successfully !' 
    }else if (props.status === 'error') {
        msg = 'Error Fetching Data !'
    }

    return(
        <>
        <h2>{msg}</h2>
        </>
    )
}

export default Status;