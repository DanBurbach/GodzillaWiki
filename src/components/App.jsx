import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MainSplash from './MainSplash';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Godzilla from './CenterPage/Godzilla/Godzilla.jsx';
import Mothra from './CenterPage/Mothra/Mothra.jsx';
import Rodan from './CenterPage/Rodan/Rodan.jsx';
import KingG from './CenterPage/KingG/KingG.jsx';
import Mechagodzilla from './CenterPage/Mechagodzilla/Mechagodzilla.jsx';
import Gigan from './CenterPage/Gigan/Gigan.jsx';
import KingKong from './CenterPage/KingKong/KingKong.jsx';
import Hedorah from './CenterPage/Hedorah/Hedorah.jsx';
import Main from './Main';
import Footer from './Footer';


function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainSplash} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
        <Route path='/godzilla'component={Godzilla} />
        <Route path='/mothra'component={Mothra} />
        <Route path='/rodan'component={Rodan} />
        <Route path='/kingg'component={KingG} />
        <Route path='/mechagodzilla'component={Mechagodzilla} />
        <Route path='/gigan'component={Gigan} />
        <Route path='/kingkong'component={KingKong} />
        <Route path='/hedorah'component={Hedorah} />
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
