import {ReactComponent as Carousel} from '../../media/images/screen-interface/screen.svg'
import {ReactComponent as Right} from '../../media/images/screen-interface/right-arrow.svg'
import {ReactComponent as Left} from '../../media/images/screen-interface/left-arrow.svg'
import {ReactComponent as Dim} from '../../media/images/screen-interface/dim-light.svg'
import {ReactComponent as Lit} from '../../media/images/screen-interface/light.svg'
import '../../css/about.css'
export default function About(props){
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
                    {/* <div className='screen'>
                        <Carousel/>
                    </div> */}
                    <div className='left'>
                        <Left/>
                    </div>
                    <div className='light-1'>
                        <Lit/>
                    </div>
                    <div className='light-2'>
                        <Dim/>
                    </div>
                    <div className='light-3'>
                        <Dim/>
                    </div>
                    <div className='light-4'>
                        <Dim/>
                    </div>
                    <div className='light-5'>
                        <Dim/>
                    </div>
                    <div className='right'>
                        <Right/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}