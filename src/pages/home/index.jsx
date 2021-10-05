import ArduinoWindow from "../../components/arduino_window"
import Hero from "../../components/hero"
import About from "../../components/about"
import Companies from "../../components/companies"
import Apply from "../../components/apply"
import Footer from "../../components/footer"
import {ReactComponent as HeroImg} from "../../media/images/Hero_img.svg"
import {ReactComponent as Btn} from '../../media/images/menu button white.svg';

function Btnclk (props) {
    console.log("1");
    window.open("https://forms.gle/TZ2cs6vnBgBXPJ297");
    return 1;
}

export default function Home(props){
    return (
        <>
            <Hero
            className="home"
            >
                <div className="text-button">
                    Showcase your projects. <br></br>
                    Join ECE Reverse Career fair!<br></br>
                    
                    <button className="button" onClick={Btnclk}><Btn className="hero-button"/>  </button>
                </div>
                <div className="hero-image">
                    <HeroImg/>
                </div>
            </Hero>
            <About id='about'/>
            <br></br>
            <ArduinoWindow id='faq'/>
            <Companies id='company'/>
            <Apply id='apply'/>
            <Footer id='footer'/>
        </>
    ) 
}