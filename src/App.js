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
      <img src="https://hitwebcounter.com/counter/counter.php?page=17631048&style=0007&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" />
      <dl>
        <dt>Fitness</dt>
        <iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/96339213/activity-summary/28ee508e20e35a9c5b42554ca9824c327a8e4850'></iframe>
        <dd>- hook it up to the strava API, maybe on a cron job</dd>
        <dd>- (using the strava api) here's how many activities ive done: coming soon on prod{/*<span style={{color: "red"}}>{activities.length}</span>*/}</dd>
        <dd>- upcoming races / tris</dd>
          <ul>
            <li>in stealth</li>
          </ul>
        <dd>- finished races / tris</dd>
          <ul>
            <li>Year 1 (goal: go far)</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/11028515730/overview">Philly Love Run</a> (half marathon) - 3/24/24: finished in 2:04:28, goal: finish</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213/posts/31110279">Ironman 70.3 Ohio</a> - 7/21/24: finished in 6:16:09, goal: finish</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12307138698/overview">Faxon Law New Haven Road Race</a> (half marathon) - 9/2/24: finished in 1:46:35, goal: &lt;1:50</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213/posts/32293625">Toughman Northeast Collegiate Triathlon</a> (Olympic Distance) - 9/14/24: finished in 3:10:56, goal: &lt;3:00</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12532346885/overview">Treasure Island Triathlon / Duathlon</a> (Sprint) - 9/29/24: finished in 1:02:23, goal: none specific, qualified for USA Triathlon Sprint/Olympic Nationals</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12975849026/overview">Philadelphia Marathon</a> - 11/24/24: finished in 4:11:03, goal: &lt;3:50</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.athlinks.com/event/21233/results/Event/1103199/Course/2567906/Bib/1675">IRIS 5k</a> - 2/9/25: finished in 22:18, goal: &lt;22:00</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/14021028774/overview">USA Triathlon Collegiate Club National Championships</a> (Olympic Distance) - 3/29/25: finished in 2:51:55, goal: &lt;3:00</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/14223494771/overview">Newport Half Marathon</a> - 4/19/25: finished in 1:41:06, goal: &lt;1:40 (disclaimer: sick)</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/14306896889/overview">Jack Bristol Lake Waramaug Ultramarathon (50 mi)</a> - 4/27/25: finished in 10:45:06, goal: finish</li>
            <li>Ironman 140.6 Lake Placid - 7/20/25: finished in 14:12:49, goal: finish, optimistic goal: &lt;13:00</li>
            <li>Year 2 (goal: go ?)</li>
          </ul>
        <dd>- races/routes on the bucket list</dd>
          <ul>
            <li>Pittsburgh dirty dozen (cycling)</li>
            <li>crit / cat (cycling)</li>
            <li>velodrome track (cycling)</li>
            <li>swim across america (OWS)</li>
            <li>Escape from alcatraz (triathlon)</li>
            <li>biathlon</li>
          </ul>
        <dd>- trying to get better at </dd>
          <ul>
            <li>Surfing (pipeline, shipstern bluff, jeffreys bay, mavericks)</li>
            <li>Snowboarding and skiing</li>
            <li>skateboarding/longboarding, e.g. a josh neumann-esque bomb on the longboard</li>
            <li>outdoor climbing</li>
          </ul>
        <dt>Travel</dt>
        <dd>- hikes + national parks ranking (not set in stone, will adapt as I revisit places)</dd>
          <ol>
            <li>Olympic (Washington)</li>
            <li>Yosemite (California)</li>
            <li>Grand Canyon (Arizona)</li>
            <li>Crater Lake (Oregon)</li>
            <li>Lassen Volcanic (California)</li>
            <li>Volcano National Park (Hawaii)</li>
            <li>Indiana Dunes (Indiana)</li>
            <li>Shenandoah (Virginia)</li>
            <li>New River Gorge (West Virginia)</li>
            <li>Cuyahoga Valley (Ohio)</li>
          </ol>
        {/* <dd>- countries (15)</dd>
          <ul>
            <li>[x] USA</li>
            <li>[x] Canada</li>
            <li>[x] Mexico</li>
            <li>[x] Dominican Republic</li>
            <li>[x] Ireland</li>
            <li>[x] China</li>
            <li>[x] Iceland</li>
            <li>[x] Germany</li>
            <li>[x] Czech Republic</li>
            <li>[x] France</li>
            <li>[x] Italy</li>
            <li>[x] Netherlands</li>
            <li>[x] Spain</li>
            <li>[x] Vatican City</li>
            <li>[x] Taiwan</li>
            <li>[x] Switzerland</li>
          </ul> */}
        <dt>Research + Pedagogy</dt>
        <dd>- to add some permanence to my ideas</dd>
        <dd>- things i would like to explore, see open problems in computational topology</dd>
        <dd>- arxiv api maybe</dd>
        <dd>- also taught for <a rel="noreferrer" target="_blank" href="https://yale.learningu.org/teach/teachers/jeffreyjgong/bio.html">Splash</a> on: New/Gonzo Journalism, Heat Equation, and General Relativity</dd>
        <dt>professional</dt>
        <dd>- i'm not actively looking for a job at the moment, but always available to hear about interesting projects (<a href="mailto:jeffrey.gong7@gmail.com">email me</a>)</dd>
        <dd>- <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jeffrey-gong7/">linkedin</a></dd>
        <dd>- schooling + other</dd>
        <dt>Film</dt>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://letterboxd.com/auteurphile/">letterboxd</a></dd>
        <dt>Books</dt>
        <dd>- a virtual library of words that meant something to me</dd>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://www.goodreads.com/user/show/181244410-jeffrey-gong">goodreads</a></dd>
        <dt>Typing</dt>
        <dd>- monkeytype <a rel="noreferrer" target="_blank" href="https://monkeytype.com/profile/jeffreyjgong">profile</a> - wpm pr: 181</dd>
        <dt>Chess</dt>
        <dd>- chess.com <a rel="noreferrer" target="_blank" href="https://www.chess.com/member/greatkingjeff">profile</a></dd>
      </dl>
    </div>
  );
}

export default App;
