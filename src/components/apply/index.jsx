import '../../css/apply.css'
import React from 'react';

import {ReactComponent as Btn} from '../../media/images/menu button.svg';

function Btnclk (props) {
    console.log("1");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return 1;
}

export default function Apply(props){
    return (
        <div className="apply">
            <button className="button" onClick={Btnclk}><Btn />  </button>
            <div className="tab"></div>
            <div className="text">
                Got a project you want to show off?
            </div>
        </div>
    ) 
}