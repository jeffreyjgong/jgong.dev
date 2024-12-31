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
        <dd>- hook it up to the strava API, maybe on a cron job, and do cool things with that data</dd>
        <dd>- (using the strava api) here's how many activities i have: coming soon on prod{/*<span style={{color: "red"}}>{activities.length}</span>*/}</dd>
        <dd>- upcoming races / tris</dd>
          <ul>
            <li>IRIS 5k - February 19, 2025</li>
            <li>2025 USA Triathlon Collegiate Club National Championships (Miami) - March 29, 2025</li>
            <li>Newport Half Marathon - April 19, 2025</li>
            <li>Jack Bristol Lake Waramaug Ultra Race 50mi - April 27, 2025 (officially registered!)</li>
            <li>Ironman 140.6 - July 20, 2025: Ironman Lake Placid (officially registered woohoo!)</li>
          </ul>
        <dd>- finished races / tris</dd>
          <ul>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/11028515730/overview">Philly Love Run</a> (half marathon) - 3/24/24: finished in 2:04:28, goal: finish</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213/posts/31110279">Ironman 70.3 Ohio</a> - 7/21/24: finished in 6:16:09, goal: finish</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12307138698/overview">Faxon Law New Haven Road Race</a> (half marathon) - 9/2/24: finished in 1:46:35, goal: &lt;1:50</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/athletes/96339213/posts/32293625">Toughman Northeast Collegiate Triathlon</a> (Olympic Distance) - 9/14/24: finished in 3:10:56, goal: &lt;3:00</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12532346885/overview">Treasure Island Triathlon / Duathlon</a> (Sprint) - 9/29/24: finished in 1:02:23, goal: none specific, qualified for USA Triathlon Sprint/Olympic Nationals</li>
            <li><a rel="noreferrer" target="_blank" href="https://www.strava.com/activities/12975849026/overview">Philadelphia Marathon</a> - 11/24/24: finished in 4:11:03, goal: &lt;3:50</li>
          </ul>
        <dd>- races/routes i want to do</dd>
          <ul>
            <li>Pittsburgh dirty dozen (cycling)</li>
            <li>new haven gp crit (cycling)</li>
            <li>swim across america (OWS)</li>
            <li>great american rail trail (cycling)</li>
            <li>Escape from alcatraz (triathlon)</li>
          </ul>
        <dd>- trying to get better at </dd>
          <ul>
            <li>Surfing (pipeline, shipstern bluff, and jeffreys bay here i come)</li>
            <li>Snowboarding</li>
            <li>skateboarding/longboarding, want to do one josh neumann-esque bomb on the longboard in my life</li>
          </ul>
        <dd>- </dd>
        <dd>- current pbs</dd>
        <dt>Travel</dt>
        <dd>- hikes + national parks</dd>
          <ul>
            <li>[x] Crater Lake (Oregon)</li>
            <li>[x] Grand Canyon (Arizona)</li>
            <li>[x] Lassen Volcanic (California)</li>
            <li>[x] New River Gorge (West Virginia)</li>
            <li>[x] Olympic (Washington)</li>
            <li>[x] Shenandoah (Virginia)</li>
          </ul>
        <dd>- countries (14)</dd>
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
          </ul>
        <dt>Research + Pedagogy</dt>
        <dd>- to add some permanence to the ideas bouncing around in my head</dd>
        <dd>- things i would like to explore, see open problems in computational topology</dd>
        <dd>- arxiv api maybe</dd>
        <dd>- currently thinking about: category theory</dd>
        <dd>- also currently: teaching for <a rel="noreferrer" target="_blank" href="https://yale.learningu.org/teach/teachers/jeffreyjgong/bio.html">Splash</a> and trying to decide on next semester's course</dd>
        <dt>professional</dt>
        <dd>- i'm not actively looking for a job at the moment, but always available to hear about interesting projects (<a href="mailto:jeffrey.gong7@gmail.com">email me</a>)</dd>
        <dd>- <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jeffrey-gong7/">linkedin</a></dd>
        <dd>- schooling and other shenanigans</dd>
        <dt>Personal passion projects</dt>
        <dd>- tunneling model</dd>
        <dd>- splash esque</dd>
        <dt>Film</dt>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://letterboxd.com/auteurphile/">letterboxd</a></dd>
        <dt>Books</dt>
        <dd>- a virtual library of words that meant something to me. eventually should reflect my future physical library</dd>
        <dd>- my <a rel="noreferrer" target="_blank" href="https://www.goodreads.com/user/show/181244410-jeffrey-gong">goodreads</a></dd>
        <dt>Sports</dt>
        <dd>- MLB: Philadelphia Phillies</dd>
        <dd>- MiLB Triple-A: Lehigh Valley Iron-Pigs</dd>
        <dd>- MiLB Double-A: Richmond Flying Squirrels</dd>
        <dd>- NBA: Philadelphia 76ers</dd>
        <dd>- NFL: Philadelphia Eagles</dd>
        <dd>- NHL: Philadelphia Flyers / Seattle Kraken (undecided)</dd>
        <dd>- MLS: Philadelphia Union / Seattle Sounders (undecided)</dd>
        <dd>- Premier League: Crystal Palace</dd>
        <dd>- Championship League: Leeds United</dd>
        <dd>- Bundesliga: Eintracht Frankfurt</dd>
        <dd>- LaLiga: Sevilla</dd>
        <dd>- Ligue 1: Toulouse</dd>
        <dd>- Serie A: Torino</dd>
        <dt>Music</dt>
        <dd>- working on some electric guitar solos</dd>
        <dt>Typing</dt>
        <dd>- monkeytype <a rel="noreferrer" target="_blank" href="https://monkeytype.com/profile/jeffreyjgong">profile</a> - wpm pr: 181</dd>
        <dt>Chess</dt>
        <dd>- chess.com <a rel="noreferrer" target="_blank" href="https://www.chess.com/member/greatkingjeff">profile</a></dd>
      </dl>
      <div>my eternal <a rel="noreferrer" target="_blank" href="https://www.poetryfoundation.org/poems/44892/eloisa-to-abelard">love letter</a> to the internet. so if you made it here - &lt;3!</div>
    </div>
  );
}

export default App;
