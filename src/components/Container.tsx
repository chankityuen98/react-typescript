// Style Types: Style, destructuring props

interface ContainerProps{
    styles: React.CSSProperties
}

function Container({styles}: ContainerProps){


    return(
        <>
        <div className="" style={styles}>
            Text Content
        </div>
        </>
    )
}

export default Container;