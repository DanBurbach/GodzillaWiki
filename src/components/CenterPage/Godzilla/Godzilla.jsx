import React from 'react';

var masterGodzilla = [
  {
    name: 'Godzilla',

    height: '164ft - 389ft(recent) tall',

    history1: 'Within the context of the Japanese films, Godzillas exact origins vary, but it is generally depicted as an enormous, violent, prehistoric sea monster awakened and empowered by nuclear radiation.  To emphasise the monsters relationship with the atomic bomb, its skin texture was inspired by the keloid scars seen on survivors in Hiroshima. The basic design has a reptilian visage, a robust build, an upright posture, a long tail and three rows of serrated fins along the back. In the original film, the fins were added for purely aesthetic purposes, in order to further differentiate Godzilla from any other living or extinct creature. Godzilla is sometimes depicted as green in comics, cartoons and movie posters, but the costumes used in the movies were usually painted charcoal grey with bone-white dorsal fins up until the film Godzilla 2000.',

    history2: 'His signature weapon is its atomic heat beam, nuclear energy that it generates inside of its body and unleashes from its jaws in the form of a blue or red radioactive beam. Tohos special effects department has used various techniques to render the beam, from physical gas powered flames to hand drawn or computer generated fire. Godzilla is shown to possess immense physical strength and muscularity. Haruo Nakajima, the actor who played Godzilla in the original films, was a black belt in judo and used his expertise to choreograph the battle sequences. Godzilla can breathe underwater and is described in the original film by the character Dr. Yamane as a transitional form between a marine and a terrestrial reptile. Godzilla is shown to have great vitality it is immune to conventional weaponry thanks to its rugged hide and ability to regenerate and as a result of surviving a nuclear explosion, it cannot be destroyed by anything less powerful.',

    history3: 'Godzillas allegiance and motivations have changed from film to film to suit the needs of the story. Although Godzilla does not like humans, it will fight alongside humanity against common threats. However, it makes no special effort to protect human life or property and will turn against its human allies on a whim. It is not motivated to attack by predatory instinct: it does not eat people and instead sustains itself on nuclear radiation and an omnivorous diet. When inquired if Godzilla was good or bad, producer Shogo Tomiyama likened it to a Shinto - God of Destruction - which lacks moral agency and cannot be held to human standards of good and evil. He totally destroys everything and then there is a rebirth. Something new and fresh can begin.',

    img: './assets/images/GodzillaSplash.jpg',

    further:'https://en.wikipedia.org/wiki/Godzilla'
  }
];

function Godzilla() {
  return (
    <div>
      {masterGodzilla.map((ticket, index) =>
        <Footer name={ticket.name}
          height={ticket.height}
          img={ticket.img}
          history1={ticket.history1}
          history2={ticket.history2}
          history3={ticket.history3}
          further={ticket.further}
          key={index} />
      )}
    </div>
  );
}

export default Godzilla;
