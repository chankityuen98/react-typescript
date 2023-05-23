import { useState } from "react";


function LoggedIn(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    function handleLogIn(){
        setIsLoggedIn(true)
    }
    function handleLogOut(){
        setIsLoggedIn(false)
    }
    
    return(
        <>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div className="">User is {isLoggedIn ? 'Logged In': 'Logged out'}</div>
        </>
    )
}

export default LoggedIn;