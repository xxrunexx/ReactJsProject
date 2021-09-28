import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Views/Home';
import Login from './Views/Login';
import EventPage from './Views/EventPage';
import DetailEventPage from './Views/DetailEventPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/cari-event' component={EventPage}/>
          <Route exact path='/detail-event' component={DetailEventPage}/>
        </Switch>
      </Router>
    </>  
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
