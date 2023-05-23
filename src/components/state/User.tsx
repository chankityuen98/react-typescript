
import { useState } from "react";

interface AuthUser{
    name: string
    email: string
}

function User(){
const [user, setUser] = useState<AuthUser | null>(null)
const handleLogIn =()=>{
    setUser({
        name: 'venoth',
        email: "venom@gmail.com"
    })
}
const handleLogOut =()=>{setUser(null)}
    return(
        <>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div className="">User name is {user?.name}</div>
        <div className="">User email  is {user?.email}</div>
        
        </>
    )
}


export default User;