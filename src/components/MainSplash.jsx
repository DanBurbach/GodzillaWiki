import React from 'react';
import Ticket from './Ticket';

var masterMainSplash = [

];

function MainSplash() {
  return (
    <div>
      <hr />
      {masterMainSplash.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default MainSplash;
