export default function Hero(props){
    return <div className={(props.className!==undefined)?`hero ${props.className}`:"hero"}>
        <div className="background">
            {props.background}
        </div>
        <div className="foreground">
                {props.children}
        </div>
    </div>
}