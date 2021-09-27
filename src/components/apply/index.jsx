import '../../css/apply.css'
import React from 'react';

import {ReactComponent as Btn} from '../../media/images/menu button.svg';

function btnclk (props) {
    console.log("1");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return 1;
}

export default function Apply(props){
    return (
        <div className="apply">
            <div className="tab"></div>
            <div className="text">
                Got a project you want to show off?
            </div>
            <button className="button" >
                <Btn/>
            </button>
        </div>
    ) 
}