import {ReactComponent as Hosts} from '../../media/images/Logos.svg'
import {ReactComponent as Mail} from '../../media/images/email.svg'
import '../../css/footer.css'

export default function Footer(props){
    return (
        <div className="footer">
            <div className="logos">
                <Hosts />
            </div>
            <div className="location">
                November 16,  2:00-5:00pm <br></br>
                Qualcomm Conference Room, <br></br>
                Jacobs Hall 1st Floor
            </div>
            <div className="contact">
            <a href="mailto:eng-rcf@eng.ucsd.edu">
                <Mail className="mail"/> eng-rcf@eng.ucsd.edu
            </a>
            </div>
        </div>
    ) 
}