// import {ReactComponent as ArduinoButtons} from '../../media/images/arduino interface buttons.svg'
import { useState,useEffect,useRef } from 'react'
import {ReactComponent as Search} from '../../media/images/arduino-interface/Search.svg'
import {ReactComponent as Check} from '../../media/images/arduino-interface/check.svg'
import {ReactComponent as File} from '../../media/images/arduino-interface/file.svg'
import {ReactComponent as Run} from '../../media/images/arduino-interface/run.svg'
import {ReactComponent as Upload} from '../../media/images/arduino-interface/upload.svg'
import {ReactComponent as Download} from '../../media/images/arduino-interface/download.svg'
import '../../css/arduinowindow.css'
import Collapse from 'react-bootstrap/Collapse'
import { useLocation } from 'react-router'
export default function ArduinoWindow(props){
    const location = useLocation()
    const ref = useRef()
    useEffect(() => {
        if(location.pathname==='/' && location.hash.slice(1)===props.id){
            ref.current.scrollIntoView({behavior:'smooth'})
        }
    }, [location])
    const commentContent=[{
        header:"How will the event be conducted?",
        body:"ECE Reverse Career Fair will be hosted in person this year until further notice.",
    },
    {
        header:"How will the event be conducted?",
        body:"ECE Reverse Career Fair will be hosted in person this year until further notice.",
    },
    ]
    const [isDisplayed,setIsDisplayed]=useState(commentContent.map(_=>false))
    function toggleCollapse(i){
        let temp=[...isDisplayed]
        console.log('gange',i)
        temp[i]=!temp[i]
        setIsDisplayed(temp)
    }
    return <>
        <div ref={ref} className='arduino-window' id={props?.id}>
            <div className='header'>
                <div className='button-background'>
                    <div className='left-buttons'>
                        <Check/>
                        <Run/>
                        <File/>
                        <Upload/>
                        <Download/>
                    </div>    
                    <div className='right-buttons'>
                        <Search/>
                    </div>    
                </div>
                <div className='title'>faq</div>
            </div>
            <div className='terminal'>
                <div className='window-title'>faq.cpp</div>
                <div className='window'>
                    {
                        commentContent.map((obj,i)=>
                            <div className={'comment'+((isDisplayed[i])?'':' collapsed')}>
                                <button onClick={_=>toggleCollapse(i)}>
                                    <span className='chevron'>{'>'}</span>
                                    <span className='title'>{obj.header}</span>
                                </button>
                                <Collapse in={isDisplayed[i]}>
                                    <div className='body'>{obj.body}</div>
                                </Collapse>
                            </div>    
                        )
                    }
                </div>
            </div>
        </div>
    </>
}