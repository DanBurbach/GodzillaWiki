import React from 'react';
import MainSplash from './MainSplash';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainSplash} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
