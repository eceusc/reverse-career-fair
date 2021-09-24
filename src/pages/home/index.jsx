import ArduinoWindow from "../../components/arduino_window"
import Hero from "../../components/hero"
import About from "../about"

export default function Home(props){
    return (
        <>
            <Hero
            className="home"
            >
                <p>greetings </p>
            </Hero>
            <About id='about'/>
            <br></br>
            <ArduinoWindow id='faq'/>
        </>
    ) 
}