import {lazy, Suspense } from "react";
import {BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// css imports
import "./css/bootstrap.css";
import "./css/app.css"
// component imports
import Nav from "./components/nav";
import Hero from './components/hero'
// import {DevComponent} from "./utils"
import Error from "./pages/error"
import Loading from "./components/loading";
// lazy page importing
const Home = lazy(_=> import("./pages/home"))
const Projects = lazy(_=> import("./pages/projects"))

function App() {
  if (false)
  return <>
    <Hero
      className="home"
      >
          <p>greetings </p>
    </Hero>
  </>
  return ( 
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
          <Route path="/projects" exact component={Error}/>
          <Route component={Error}/>
        </Switch>
      </Suspense>
    </Router>
  );
} 

export default App;
