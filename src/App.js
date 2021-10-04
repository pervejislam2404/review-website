import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './pages/Details/Details';
import Course from './pages/Course/Course';

function App() {
  return (
    <div className="App overflow-hidden">
     <Router>
    <Header/>
       <Switch>
       <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/services">
          <Services></Services>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="/details">
           <Details></Details>
         </Route>
         <Route exact path="course/:title">
          <Course></Course>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
