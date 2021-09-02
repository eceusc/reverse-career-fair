import {lazy, Suspense, } from "react";
import {useState, useRef, useEffect,useLocation} from "react";
import {BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// css imports
import "./css/bootstrap.css";
import "./css/app.css"
// component imports
import Nav from "./components/nav";
// import {DevComponent} from "./utils"
import Error from "./pages/error"
import Loading from "./components/loading";
// lazy page importing
const Home = lazy(_=> import("./pages/home"))
const Projects = lazy(_=> import("./pages/projects"))
// old imports
// import './App.css';
// import logo from './logo.svg';

// function P(props){
//   const [index,setIndex]=useState(1)
//   const [content, setContent] = useState(props.text?.split(' ').splice(0,1).join(' '))
//   const [nextContent, setNextContent] = useState("")
//   // console.log(ref.current?.clientWidth)
//   const ref= useRef()
//   useEffect(() => {
//     setIndex(1)
//     setContent(props.text?.split(' ').splice(0,1).join(' '))
//     setNextContent("")
//   }, [props])
//   useEffect(_=>{
//     if (ref.current!==null && ref.current!==undefined){
//       console.log('client width:',ref.current.offsetWidth)
//       console.log('total length:',props.text.split(' ').length)
//       console.log('index:',index)
//       console.log('key:',props.value)
//       if (ref.current.offsetWidth < props['break-after'] && nextContent==='' && index < props.text.split(' ').length){
//         setIndex(index+1)
//         setContent(props.text?.split(' ').splice(0,index+1).join(' '))
//       } else if(ref.current.offsetWidth > props['break-after'] && nextContent===''){
//         console.log('next:',props.text?.split(' ').splice(index-1).join(' '))
//         setIndex(index-1)
//         setContent(props.text?.split(' ').splice(0,index-1).join(' '))
//         setNextContent(props.text?.split(' ').splice(index-1).join(' '))
//       }
//     }
//   },[content]) 
//   if (content === undefined || content === null || content === "") return <></>
//   return <>
//     <span ref={ref}>{content}</span>
//     <br/>
//     <P {...props} text={nextContent}/>
//   </>
// }

function App() {
  return ( 
    // <div>
    //   <div>hi</div>
    //   <P text='hello world hello world' break-after={100}/>
    // </div>
    <Router>
      <Nav
        menu_bar={{
          "/#":"Home", 
          "/#about":"About",
          "/#faq":"FAQ",
          "/#companies":"Companies",
          "/projects":"Projects"
      }}
      />
      <Suspense fallback={<Loading></Loading>}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route component={Error}/>
        </Switch>
      </Suspense>
    </Router>
  );
} 

export default App;
