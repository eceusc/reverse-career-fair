import {ReactComponent as Carousel} from '../../media/images/screen-interface/screen.svg'
import {ReactComponent as Right} from '../../media/images/screen-interface/right-arrow.svg'
import {ReactComponent as Left} from '../../media/images/screen-interface/left-arrow.svg'
import {ReactComponent as Dim} from '../../media/images/screen-interface/dim-light.svg'
import {ReactComponent as Lit} from '../../media/images/screen-interface/light.svg'
import '../../css/about.css'
import { useState } from 'react'

function RenderScreen(props) {
    console.log(props.index);
    switch (props.index) {
        case 1:
            return <svg width="500" height="500" viewBox="0 0 286 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M274 49H12V188H274V49Z" fill="#FFFFFF"/>
            </svg>;
        default:
            return <svg width="500" height="500" viewBox="0 0 286 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M274 49H12V188H274V49Z" fill="#C4C4C4"/>
            </svg>;
    }
}

function Render1(props) { 
    if (props.index === 0) {return <Lit/>;} else {return <Dim/>;}
}
function Render2(props) {
    if (props.index === 1) {return <Lit/>;} else {return <Dim/>;}
}
function Render3(props) {
    if (props.index === 2) {return <Lit/>;} else {return <Dim/>;}
}
function Render4(props) {
    if (props.index === 3) {return <Lit/>;} else {return <Dim/>;}
}
function Render5(props) {
    if (props.index === 4) {return <Lit/>;} else {return <Dim/>;}
}

export default function About(props){
    const [index, setState] = useState(0);
    return (
        <div className='about-page'>
            <div className='text'>
                <div className='title'><b>What is a reverse career fair?</b></div>
                <div className='body'>
                    The Reverse Career Fair is our initiative to help students find career opportunities by spotlighting hands-on project building experience.
                    <br></br><br></br>
                    At the Reverse Career Fair, students have the opportunity to present their projects and research to company representatives, 
                    where they can first handedly display their achievements and talents to prospective employers 
                    rather than showing just a few lines of text on their resume or a short introduction.
                </div>
            </div>
            <div className='monitor-carousel'>
                <div className='monitor'>
                    <div className='board'>
                       <Carousel/>
                    </div>
                    <div className='screen'>
                        <RenderScreen index={index}/>
                    </div>
                    <div className='left'>
                        <button className='l-but' onClick={() => setState(index => ((index - 1) % 5) < 0 ? 4 : (index - 1) % 5)}>
                            <Left/>
                        </button>
                    </div>
                    <div className='light-1'>
                        <Render1 index={index} />
                    </div>
                    <div className='light-2'>
                        <Render2 index={index} />
                    </div>
                    <div className='light-3'>
                        <Render3 index={index} />
                    </div>
                    <div className='light-4'>
                        <Render4 index={index} />
                    </div>
                    <div className='light-5'>
                        <Render5 index={index} />
                    </div>
                    <div className='right'>
                        <button className='r-but' onClick={() => setState(index => (index + 1) % 5)}>
                            <Right/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}