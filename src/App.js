
import './App.css';
import FooterComponent from './components/FooterComponent';
import HearderComponent from './components/HearderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import Home from "./components/Home";
import Aboutus from './components/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <HearderComponent/>
        <div className="container">
          <Switch>
             <Route path = "/www.cms.com/" exact component={Home}></Route>
             <Route path = "/www.cms.com/aboutus" component={Aboutus}></Route>
            <Route path = "/allstudents" component={ListStudentComponent}></Route> {/*router response for all student data*/}
            <Route path = "/add-student/:id" component={CreateStudentComponent}></Route> {/*router will send request with post method include student data */}
            <Route path = "/view-student/:id" component={ViewStudentComponent}></Route>
            {/* <Route path = "/update-student/:id" component={UpdateStudentComponent}></Route> */}
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
