import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import react from 'react'
import './App.css';

// Scenes
import Header from './components/Header';
import MainPage from './components/SceneMain'
import SceneOne from './components/SceneOne'
import SceneTwo from './components/SceneTwo';
import SceneThree from './components/SceneThree';
import ErrorScene from './components/404'

class App extends react.Component {

  // To have a multi-paged app, you have to contain all the navigating & redirecting activity inside the router component
  // Set the Switch element as the parent so that when path changes, the route that is active switches
  render(){
    return (
      <div style={{display: "grid", placeItems: "center"}}>
        <Router>
          <div style={{margin: "15px"}}>
            <Header />
          </div>
          <div id="page-container">
            <Switch>
              <Route exact={true} path="/" component={MainPage} />
              <Route path="/first" component={SceneOne} />
              <Route path="/second" component={SceneTwo} />
              <Route path="/third" component={SceneThree} />
              <Route path="/404" component={ErrorScene} />
              <Redirect to="/404" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  // Declare Route element without the path attribute to handle the 'page path not found' error. ex: <Route component={ErrorScene} />
  // You can use <Redirect /> to redirect the page, make sure it is at last so that it only does redirect when all the other paths are not matched
}

export default App;
