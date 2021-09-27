import ArduinoWindow from "../../components/arduino_window"
import Hero from "../../components/hero"
import About from "../../components/about"
import Companies from "../../components/companies"
import Apply from "../../components/apply"

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
            <Companies id='company'/>
            <Apply id='apply'/>
        </>
    ) 
}