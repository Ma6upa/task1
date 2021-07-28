import './scss/index.scss'
import Main from './js/pages/main'
import SliderWithStore from './js/redux/index.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/slider">
          <SliderWithStore />
        </Route>
        <Redirect to="/main"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
