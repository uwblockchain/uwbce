import React from 'react';
import speakerImg from '../../img/mark_cooley.jpg';
import Speaker from './Speaker';

const head =
  <p>
    Blockchain Strategist
    <br />
    <b>Mark Cooley</b>
  </p>;

const body =
  <p>
    Mark is a seasoned executive, consultant and educator having held various executive
    leadership positions in technology over the last 18 years. He specializes in business
    strategy and the application of blockchain technologies. He is on the founding team
    of numerous blockchain companies including lifeID, Govurn and 4Block Solutions.
    The latter of which is supporting blockchain innovation with projects across the
    community.  Mark is a speaker,  professor and advisor, supporting institutions such
    as Seattle University, University of Washington, and General Assembly. 
  </p>;

const Speaker2 = () => (
  <Speaker img={speakerImg} head={head} body={body} /> 
);

export default Speaker2;