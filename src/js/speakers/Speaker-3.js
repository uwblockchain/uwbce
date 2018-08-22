import React from 'react';
import speakerImg from '../../img/joshua_shane.jpg';
import Speaker from './Speaker';

const head =
  <p>
    Chief Marketing Officer, lifeID
    <br />
    <b>Joshua Shane</b>
  </p>;

const body =
  <p>
    Over the past 25 years, Joshua has built and run marketing organizations for Silicon
    Valley startups and global Seattle tech giants. His passion is bringing technology into
    service for local, regional and global communities. Prior to being CMO at lifeID,
    Joshua was Managing Director and VP of Strategy for Viewstream, a marketing
    agency focused on “deep technology,” where he started and ran the agency’s
    Blockchain marketing practice. 
  </p>;

const Speaker3 = () => (
  <Speaker img={speakerImg} head={head} body={body} /> 
);

export default Speaker3;