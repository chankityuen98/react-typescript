// Basic Type: string, number, boolean
// Advanced Type: optional type, default value
type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

function Greet (props:GreetProps){
    const{messageCount = 0} = props
    return(
        <div className="">
            <h2>
                {
                  props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages` : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}

export default Greet;