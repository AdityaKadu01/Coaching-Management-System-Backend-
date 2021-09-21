
import './App.css';
import FooterComponent from './components/FooterComponent';
import HearderComponent from './components/HearderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <HearderComponent />
        <div className="container">
          <Switch>
             <Route path = "/" exact component={ListStudentComponent}></Route>
            <Route path = "/allstudents" component={ListStudentComponent}></Route> {/*router response for all student data*/}
            <Route path = "/add-student/:id" component={CreateStudentComponent}></Route> {/*router will send request with post method include student data */}
            {/* <Route path = "/update-student/:id" component={UpdateStudentComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
