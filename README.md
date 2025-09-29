# F1 Simulator v0.3.0 (by KatQwer)
This is a web-based F1 simulator made to have fun. In this project I will be seeing how far I can take my knowledge of JavaScript and utilising it in making a great personal project. While there are still a lot of things to work, in its current form you can already simulate races, watch team rivalry and see some basic logs of pole position and the race winner. Down below you will see all features that will be added in the future. Updates might be slow at times as I'm trying to balance this project with school and work. Any advice would be greatly appreciated, you can find out how to contact me on my main GitHub page.
## Future major changes
Once I have finished all the current features I'm planning to implement (seen down below), I will try to modify this project into a React + TypeScript project for ease of use. I will also look into updating the race engine, I'm currently using an engine made by me myself based off of a Python exercise by [Olof Paulson](https://scrimba.com/u0102m0). But in the future I will be looking into programming my own engine with better accuracy, randomness and race development.
## Languages and libraries used
- HTML
- CSS
- JavaScript
## Version history
**v0.0.1**. An F1 racing simulator logging race and championship data to the console. <br>
**v0.0.5**. Added a base website with only a button to simulate races and a table to show driver championship data. <br>
**v0.1.0**. Added a better layout, proper driver's leaderboard with racer, team, points and amount of wins and podiums. <br>
**v0.1.5**. Added qualifying, where a certain amount of time gets added to your total race time depending on where you qualify. <br>
**v0.2.0**. Added a 'Rivalries' tab where you can see a head to head for each team with qualifying, race result and total points. <br>
**v0.3.0**. Added a partial 'Logs' tab where you can see each race's winner and pole-sitter.
## Currently working on
I am currently working on adding in the latest qualifying results to the bottom of the 'Standings' tab. Here you can who went out in Q1 and Q2 and everyone's qualifying time.
## Current planned features
**Championship Battle**: The championship battle will be seen above the tabs, not mattering in what tab you are. The championship battle will show you the driver's and constructor's leader, their points, how many points are between them and the next highest and how many points are still available in the season for both championships. <br><br>
**Standings**: The 'Standings' tab will show you the leaderboards for both the driver's and the constructor's championship. For the drivers, you while see their position, points, team, amount of wins and podiums and their recent form. Underneath these leaderboards, after a race, you will see that race's qualifying results divided by where they went out. <br><br>
**Analytics:** In the 'Analytics' tab, you will see 5 different cards; a championship predictor predicted by an AI model, the points progression of the top 5 in the last 3 races, an analysis on what strategies get used and which are the most effective/ineffective, an analysis on team orders and whether or not they're being followed or their points impact and a weather impact analysis which will show how many races for each weather type, that weather type's winner's average grid position and how many upset wins have come from that weather type. <br><br>
**Development:** In the 'Development' tab you'll be able to see a leaderboard of how well the car of each constructor is performing. You'll also see recent developments and whether or not they succeeded. <br><br>
**Contracts:** The 'Contracts' tab will every driver's current contract including; base salary, performance bonuses and years left on their contracts. Whenever a driver's contract runs out, they'll be forced to negotiate with their team (or another team) and will have to sign at the end of a season. If a driver and team do not agree on contract terms, this driver will enter the 'Free Agents' list, where teams in need of drivers will be able to sign them for much less than they were earning before. <br><br>
**Logs:** In 'Logs', you'll be able to see important news that has happened during the season. This includes whoever won a race or sits on pole, any developments to a team's car, any team orders and whether or not they've been followed, the winner of either championship whenever they win it, any driver swaps during the season and any driver changing at the end of the season. <br><br>
**Seasons:** The 'Seasons' tab, you will see the data from the seasons that you have already simulated. This will include the driver's and constructor's champion, the champion's amount of wins and podiums, the top 5 in the driver's standings and season statistics (total amount of races, amount of races in different weather conditions, amount of upsets, amount of team orders, numbers of total upgrades by every team and numbers of DNF's throughout the season). <br><br>
**Settings:** When clicking on the settings button, you can change various elements. On top will be the simulation settings, where you can toggle auto-simulate, turn on/off team orders, automate contract negotiations, turn on/off championship celebrations and automate strategy calls. Following that will be a toggle for the logs where you can choose for all logs, only important ones or only critical ones. Below that will be buttons to start a new season, export your season data and import season data. <br><br>
**Footer:** The footer contains my GitHub, social media and a legal disclaimer. But serves no further purpose towards the simulator. <br><br>
**Calendar:** In the calendar, you will be able to simulate day-by-day, seeing your future upgrades, future races and upcoming deadlines throughout the season!
## How the engine currently works and future changes
### Qualifying
Qualifying currently works by simulating a single lap in Q1, Q2 and Q3 and throwing out the worst drivers in each qualifying level.
### The race
The engine currently works by calling on a couple variables. It uses a time range for tracks by checking its average lap time compared to its fastest ever lap time, a driver adjust which is a driver's skill (out of 30) and a car's performance (out of 20) and dividing it by 100 and a random number to simulate a lap. Every driver then gets every lap simulated, before comparing these race times to every other driver to get the result of the race.
### DNFs
DNFs get calculated before a driver actual gets their race time. A random number gets called between 0 and 1. If this number is smaller than a driver's DNF%, the driver will DNF the race.
### Future changes
When I eventually makes my own engine, the drivers will all be driving at the same time, weather events will be based on a chance of rain which can increase or decrease during the rain. Qualifying will also matter more because a driver will actually have to overtake whoever is ahead of them. This will also make DNF more skill based instead of being entirely based on RNG. I will also try to implement a watch-along of the race, where you can actually see dots moving across the track. However, I still need to research the legality of this.
## Added features
**HTML Structure:** The base structure of the website includes the name at the top, buttons (simulating a race and going to settings), tabs (for navigating to area) and a container for each tab. <br><br>
**Rivalries:** In 'Rivalries', you can see teammates head to head record from the race, qualifying and their points. This will show you who the number 1 driver is and who has to step up their game a little more.
## Changed during the season
Every now and then, after a race or a few races, the drivers' ratings will be downgraded or upgraded depending on their performance.
### Most recent rating changes:
(The plusses and minuses are for driver ratings, not positions)
1. Oscar Piastri | 30 (-)
2. Max Verstappen | 30 (-)
3. Lando Norris | 29 (-)
4. George Russell | 29 (-)
5. Alexander Albon | 27 (+)
6. Lewis Hamilton | 27 (-)
7. Charles Leclerc | 27 (-)
8. Andrea Kimi Antonelli | 26 (-)
9. Isack Hadjar | 26 (+2)
10. Esteban Ocon | 26 (-)
11. Carlos Sainz Jr. | 25 (-)
12. Nico Hulkenberg | 24 (-)
13. Oliver Bearman | 23 (-)
14. Pierre Gasly | 23 (-)
15. Liam Lawson | 23 (-)
16. Lance Stroll | 23 (-)
17. Fernando Alonso | 22 (-)
18. Gabriel Bortoleto | 22 (-)
19. Yuki Tsunoda | 21 (-)
20. Franco Colapinto | 20 (-1)
## Legal disclaimer
I am in no way affiliated with &copy;Formula 1, &copy;FIA, &copy;FOM or any teams or drivers appearing in this simulator. All trademarks and names belong to their respective owners, and in no way am I pretending to be affiliated with them. This project is fan-made, for entertainment purposes only and **not** for profit.