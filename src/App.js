import './App.css';
import Grid from './comp/Grid';
import Navbar from './comp/Navbar';
import Slider from './comp/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Login from './comp/Login';


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/home" exact>
             <Navbar />
            <Slider />
            
            <Grid />
            
            </Route>
          <Route path="" exact>
            <Login/>
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
