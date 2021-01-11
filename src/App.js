import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WholePage from './components/wholePageComponent/wholePage';
import Home from './components/homeComponent/home';
import About from './components/aboutComponent/about';
import {Link} from 'react-scroll';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path = '/' exact component = {WholePage} />
      <Route path = '/home' exact component = {Home} />
      <Route path = '/about' component = {About}/>
    </div>
    </Router>
  )
}

export default App;
