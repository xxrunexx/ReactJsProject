import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Views/Home';
import Login from './Views/Login';
import EventPage from './Views/EventPage';
import DetailEventPage from './Views/DetailEventPage';
import RegisterEvent from './Views/RegisterEvent';
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom';

function App() {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={loginWithRedirect}/>
          <Route exact path='/cari-event'>
            {!isAuthenticated ? <Redirect to='/login' /> : <EventPage/>}
          {/* component={EventPage}/> */}
          </Route>
          <Route exact path='/register' component={RegisterEvent}/>
          <Route exact path='/detail-event/:id' component={DetailEventPage}/>
        </Switch>
      </Router>
    </>  
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
