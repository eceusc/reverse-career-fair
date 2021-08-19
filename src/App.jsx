import {lazy, Suspense} from "react";
import {BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// css imports
// import "./css/bootstrap.css";
import "./css/app.css"
// component imports
import Nav from "./components/nav";
// lazy page importing
const Home = lazy(_=> import("./pages/home"))
const About = lazy(_=> import("./pages/about"))
const Faq = lazy(_=> import("./pages/faq"))
const Companies = lazy(_=> import("./pages/companies"))
const Projects = lazy(_=> import("./pages/projects"))
// old imports
// import './App.css';
// import logo from './logo.svg';
function App() {
  return (
    <Router>
      <Nav
        menu_bar={{
          "/":"Home",
          "/about":"About",
          "/faq":"FAQ",
          "/companies":"Companies",
          "/projects":"Projects"
      }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/faq" exact component={Faq}/>
          <Route path="/companies" exact component={Companies}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
      </Suspense>
    </Router>
  );
} 

export default App;
