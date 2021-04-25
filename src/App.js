import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './Component/Form/Form';
import SignUp1 from "./Component/login/SignUp/SignUp1";
import Login1 from "./Component/login/SignUp/Login1";
import Landing from "./Component/Landing/Landing";
function App() {
  return (
    <>
    
    <Router>

      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login1 />
          </Route>
          <Route exact path="/signup">
            <SignUp1 />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;
