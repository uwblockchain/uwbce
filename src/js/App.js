import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets';
import SpeakerPreviews from './speakers/SpeakerPreviews';
import Video from './video/Video';
import Workshops from './workshops/Workshops';
import Sponsors from './sponsors/Sponsors';
import Contact from './contact/Contact';


const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Video />
    <BuyTickets/>
    <SpeakerPreviews/>
    <Workshops/>
    <Sponsors/>
    <Contact/>
    <div id="content" />
  </div>
);

export default App;
