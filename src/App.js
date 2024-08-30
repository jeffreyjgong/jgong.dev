import './App.css';
import React, { useEffect, useState } from 'react';
import { Strava } from 'strava';

function App() {
  // const strava = new Strava({
  //   client_id: process.env.REACT_APP_CLIENT_ID,
  //   client_secret: process.env.REACT_APP_CLIENT_SECRET,
  //   refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
  // });

  // const [ activities, setActivities ] = useState([]);

  // useEffect(() => {
  //   async function getActivities() {
  //     try {
  //       const ret_activities = await strava.activities.getLoggedInAthleteActivities({per_page: 200});
  //       console.log(ret_activities);
  //       setActivities(ret_activities);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getActivities();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>A work in progress ... for now, just a list of ideas I would like to see on a digital representation of myself.</p>
      </header>
      <dl>
        <dt>Fitness</dt>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213">strava</a></dd>
        <dd>- hook it up to the strava API, maybe on a cron job, and do cool things with that data</dd>
        <dd>- (using the strava api) here's how many activities i have: coming soon on prod{/*<span style={{color: "red"}}>{activities.length}</span>*/}</dd>
        <dd>- upcoming races / tris</dd>
          <ul>
            <li>Faxon Law New Haven Half Marathon - September 2, 2024</li>
            <li>Toughman Northeast Collegiate Triathlon (Olympic Distance) - September 14, 2024</li>
            <li>Treasure Island Triathlon (Sprint) - September 29, 2024</li>
            <li>Philadelphia Marathon - November 24, 2024</li>
            <li>(TBD) Ironman 140.6 - 2025</li>
          </ul>
        <dd>- finished races / tris</dd>
          <ul>
            <li>Philly Love Run (half marathon) - 3/24/24: finished in 2:04:28</li>
            <li>Ironman 70.3 Ohio - 7/21/24: finished in 6:16:09</li>
          </ul>
        <dd>- trying to get better at </dd>
          <ul>
            <li>Surfing (pipeline, shipstern bluff, and jeffreys bay here i come)</li>
            <li>Snowboarding</li>
            <li>skateboarding/longboarding, want to do one josh neumann-esque bomb on the longboard in my life</li>
          </ul>
        <dd>- <a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213/posts/31110279">IM Ohio 70.3 Race Report</a></dd>
        <dd>- current pbs</dd>
        <dt>Travel</dt>
        <dd>- hikes + national parks</dd>
        <dd>- countries + adventures</dd>
        <dt>Research</dt>
        <dd>- to add some permanence to the ideas bouncing around in my head</dd>
        <dd>- things i would like to explore, see open problems in computational topology</dd>
        <dd>- arxiv api maybe</dd>
        <dt>professional</dt>
        <dd>- if youre looking at this you might as well give me a job so here's my <a rel="noreferrer" target="_blank" href="https://github.com/jeffreyjgong/jeffreyjgong/blob/main/Resume_%20Jeffrey_Gong_Senior.pdf">resume</a></dd>
        <dd>- and my <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jeffrey-gong7/">linkedin</a></dd>
        <dd>- schooling and other shenanigans</dd>
        <dt>Personal passion projects</dt>
        <dd>- tunneling model</dd>
        <dd>- splash esque</dd>
        <dt>Film</dt>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://letterboxd.com/auteurphile/">letterboxd</a></dd>
        <dt>Books</dt>
        <dd>- a virtual library of words that meant something to me. eventually should reflect my future physical library</dd>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://www.goodreads.com/user/show/181244410-jeffrey-gong">goodreads</a></dd>
        <dt>Music</dt>
        <dd>- working on some electric guitar solos</dd>
        <dt>Essays</dt>
        <dd>- because my thoughts are the most interesting thing ever and the world absolutely needs to know</dd>
        <dt>Typing</dt>
        <dd>- monkeytype <a rel="noreferrer" target="_blank" href="https://monkeytype.com/profile/greatkingjeff">profile</a> - wpm pr: 175</dd>
        <dt>Chess</dt>
        <dd>- chess.com <a rel="noreferrer" target="_blank" href="https://www.chess.com/member/greatkingjeff">profile</a></dd>
      </dl>
      <div>my eternal <a rel="noreferrer" target="_blank" href="https://www.poetryfoundation.org/poems/44892/eloisa-to-abelard">love letter</a> to the internet. so if you made it here - &lt;3!</div>
    </div>
  );
}

export default App;
