class Driver {
    constructor(name, short_name, skill, dnf, race_time, quali_lap, fastest_lap, points, wins, podiums, team, pos_history) {
        this.name = name;
        this.short_name = short_name;
        this.skill = skill;
        this.dnf = dnf;
        this.race_time = race_time;
        this.quali_lap = quali_lap;
        this.fastest_lap = fastest_lap;
        this.points = points;
        this.wins = wins;
        this.podiums = podiums;
        this.team = team;
        this.pos_history = [];
    }
}

// Alpine Drivers
let pierre_gasly = new Driver('Pierre Gasly', 'GAS', 24, 12, 100000, 100000, 1000, 0, 0, 0);
let franco_colapinto = new Driver('Franco Colapinto', 'COL', 22, 13, 100000, 100000, 1000, 0, 0, 0);
let jack_doohan = new Driver('Jack Doohan', 'DOO', 21, 14, 100000, 100000, 1000, 0, 0, 0);
// Aston Martin Drivers
let fernando_alonso = new Driver('Fernando Alonso', 'ALO', 21, 12, 100000, 100000, 1000, 0, 0, 0);
let lance_stroll = new Driver('Lance Stroll', 'STR', 22, 16, 100000, 100000, 1000, 0, 0, 0);
let felipe_drugovich = new Driver('Felipe Drugovich', 'DRU', 18, 16, 100000, 100000, 1000, 0, 0, 0);
// Ferrari Drivers
let charles_leclerc = new Driver('Charles Leclerc', 'LEC', 28, 13, 100000, 100000, 1000, 0, 0, 0);
let lewis_hamilton = new Driver('Lewis Hamilton', 'HAM', 27, 7, 100000, 100000, 1000, 0, 0, 0);
let antonio_giovinazzi = new Driver('Antonio Giovinazzi', 'GIO', 19, 15, 100000, 100000, 1000, 0, 0, 0);
// Haas Drivers
let esteban_ocon = new Driver('Esteban Ocon', 'OCO', 26, 13, 100000, 100000, 1000, 0, 0, 0);
let oliver_bearman = new Driver('Oliver Bearman', 'BEA', 22, 12, 100000, 100000, 1000, 0, 0, 0);
let pietro_fittipaldi = new Driver('Pietro Fittipaldi', 'FIT', 18, 14, 100000, 100000, 1000, 0, 0, 0);
// McLaren Drivers
let lando_norris = new Driver('Lando Norris', 'NOR', 29, 9, 100000, 100000, 1000, 0, 0, 0);
let oscar_piastri = new Driver('Oscar Piastri', 'PIA', 30, 9, 100000, 100000, 1000, 0, 0, 0);
let pato_oward = new Driver("Pato O'Ward", 'OWA', 20, 14, 100000, 100000, 1000, 0, 0, 0);
// Mercedes Drivers
let george_russell = new Driver('George Russell', 'RUS', 29, 14, 100000, 100000, 1000, 0, 0, 0);
let kimi_antonelli = new Driver('Andrea Kimi Antonelli', 'ANT', 26, 16, 100000, 100000, 1000, 0, 0, 0);
let vallteri_bottas = new Driver('Vallteri Bottas', 'BOT', 21, 14, 100000, 100000, 1000, 0, 0, 0);
// Red Bull Drivers
let max_verstappen = new Driver('Max Verstappen', 'VER', 30, 14, 100000, 100000, 1000, 0, 0, 0);
let yuki_tsunoda = new Driver('Yuki Tsunoda', 'TSU', 21, 14, 100000, 100000, 1000, 0, 0, 0);
let pepe_marti = new Driver('Pepe Marti', 'MAR', 18, 16, 100000, 100000, 1000, 0, 0, 0);
// Kick Sauber Drivers
let nico_hulkenberg = new Driver('Nico Hulkenberg', 'HUL', 24, 10, 100000, 100000, 1000, 0, 0, 0);
let gabriel_bortoleto = new Driver('Gabriel Bortoleto', 'BOR', 21, 16, 100000, 100000, 1000, 0, 0, 0);
let theo_pourchaire = new Driver('Theo Pourchaire', 'POU', 20, 15, 100000, 100000, 1000, 0, 0, 0);
// Racing Bulls Drivers
let liam_lawson = new Driver('Liam Lawson', 'LAW', 22, 13, 100000, 100000, 1000, 0, 0, 0);
let isack_hadjar = new Driver('Isack Hadjar', 'HAD', 24, 16, 100000, 100000, 1000, 0, 0, 0);
let ayumu_iwasa = new Driver('Ayumu Iwasa', 'IWA', 18, 15, 100000, 100000, 1000, 0, 0, 0);
// Williams Drivers
let alex_albon = new Driver('Alexander Albon', 'ALB', 26, 15, 100000, 100000, 1000, 0, 0, 0);
let carlos_sainz = new Driver('Carlos Sainz Jr', 'SAI', 25, 12, 100000, 100000, 1000, 0, 0, 0);
let mick_schumacher = new Driver('Mick Schumacher', 'SCH', 21, 13, 100000, 100000, 1000, 0, 0, 0);

const driver_standings = [alex_albon, kimi_antonelli, carlos_sainz, charles_leclerc, esteban_ocon, fernando_alonso, franco_colapinto, gabriel_bortoleto, george_russell, isack_hadjar, lance_stroll, lando_norris, lewis_hamilton, liam_lawson, max_verstappen, nico_hulkenberg, oliver_bearman, oscar_piastri, pierre_gasly, yuki_tsunoda]; 

class Car {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

let alpine_car = new Car('A524', 15.6);
let aston_martin_car = new Car('AMR24', 13.7);
let ferrari_car = new Car('SF-24', 17.5);
let haas_car = new Car('VF-24', 14.4);
let mclaren_car = new Car('MCL38', 18.6);
let mercedes_car = new Car('F1 W15', 17.9);
let rb_car = new Car('VCARB 01', 14.9);
let red_bull_car = new Car('RB20', 16.9);
let sauber_car = new Car('C44', 14.4);
let williams_car = new Car('FW46', 15.8);

class Team {
    constructor(short_name, full_name, driver1, driver2, reserve_driver, car, points, colour) {
        this.short_name = short_name;
        this.full_name = full_name;
        this.driver1 = driver1;
        this.driver2 = driver2;
        this.reserve_driver = reserve_driver;
        this.car = car;
        this.points = points;
        this.colour = colour;
    }
}

let alpine = new Team('Alpine', 'BWT Alpine F1 Team', pierre_gasly, franco_colapinto, jack_doohan, alpine_car, 0, 'alpine');
let aston_martin = new Team('Aston Martin', 'Aston Martin ARAMCO F1 Team', fernando_alonso, lance_stroll, felipe_drugovich, aston_martin_car, 0, 'aston-martin');
let ferrari = new Team('Ferrari', 'Scuderia Ferrari F1 Team', charles_leclerc, lewis_hamilton, antonio_giovinazzi, ferrari_car, 0, 'ferrari');
let haas = new Team('Haas', 'MoneyGram Haas F1 Team', esteban_ocon, oliver_bearman, pietro_fittipaldi, haas_car, 0, 'haas');
let mclaren = new Team('McLaren', 'McLaren Racing F1 Team', lando_norris, oscar_piastri, pato_oward, mclaren_car, 0, 'mclaren');
let mercedes = new Team('Mercedes', 'Mercedes-AMG Petronas F1 Team', george_russell, kimi_antonelli, vallteri_bottas, mercedes_car, 0, 'mercedes');
let rb = new Team('Racing Bulls', 'Racing Bulls F1 Team', liam_lawson, isack_hadjar, ayumu_iwasa, rb_car, 0, 'rb');
let red_bull = new Team('Red Bull', 'Oracle Red Bull Racing F1 Team', max_verstappen, yuki_tsunoda, pepe_marti, red_bull_car, 0, 'red-bull');
let sauber = new Team('Kick Sauber', 'Stake F1 Team Kick Sauber', nico_hulkenberg, gabriel_bortoleto, theo_pourchaire, sauber_car, 0, 'sauber');
let williams = new Team('Williams', 'Atlassian Williams Racing F1 Team', alex_albon, carlos_sainz, mick_schumacher, williams_car, 0, 'williams');

const teams = [alpine, aston_martin, ferrari, haas, mclaren, mercedes, rb, red_bull, sauber, williams];

teams.forEach(team => {
    team.driver1.team = team;
    team.driver2.team = team;
    team.reserve_driver.team = team;
});

class HeadtoHead {
    constructor(team, d1_wins, d1_quali, d2_wins, d2_quali, check) {
        this.team = team;
        this.d1_wins = d1_wins;
        this.d1_quali = d1_quali;
        this.d2_wins = d2_wins;
        this.d2_quali = d2_quali;
        this.check = false;
    }
}

let alpine_h2h = new HeadtoHead(alpine, 0, 0, 0, 0);
let aston_martin_h2h = new HeadtoHead(aston_martin, 0, 0, 0, 0);
let ferrari_h2h = new HeadtoHead(ferrari, 0, 0, 0, 0);
let haas_h2h = new HeadtoHead(haas, 0, 0, 0, 0);
let mclaren_h2h = new HeadtoHead(mclaren, 0, 0, 0, 0);
let mercedes_h2h = new HeadtoHead(mercedes, 0, 0, 0, 0);
let rb_h2h = new HeadtoHead(rb, 0, 0, 0, 0);
let red_bull_h2h = new HeadtoHead(red_bull, 0, 0, 0, 0);
let sauber_h2h = new HeadtoHead(sauber, 0, 0, 0, 0);
let williams_h2h = new HeadtoHead(williams, 0, 0, 0, 0);

const head2heads = [alpine_h2h, aston_martin_h2h, ferrari_h2h, haas_h2h, mclaren_h2h, mercedes_h2h, rb_h2h, red_bull_h2h, sauber_h2h, williams_h2h];

class Track {
    constructor(short_name, circuit_name, avg_lap, fastest_lap, laps) {
        this.short_name = short_name;
        this.circuit_name = circuit_name;
        this.avg_lap = avg_lap;
        this.fastest_lap = fastest_lap;
        this.laps = laps;
    }
}

let bahrain_gp = new Track('Bahrain GP', 'Bahrain International Circuit', 94.573, 90.252, 57);
let jeddah_gp = new Track('Jeddah GP', 'Jeddah Corniche Circuit', 91.670, 90.734, 50);
let australia_gp = new Track('Australian GP', 'Albert Park Circuit', 83.014, 79.813, 58);
let japan_gp = new Track('Japanese GP', 'Suzuka International Racing Course', 94.406, 90.983, 53);
let china_gp = new Track('Chinese GP', 'Shanghai International Circuit', 97.452, 92.238, 56);
let miami_gp = new Track('Miami GP', 'Miami International Autodrome', 94.105, 89.708, 57);
let imola_gp = new Track('Imola GP', 'Autodromo Internazionale Enzo e Dino Ferrari', 78.723, 75.484, 63);
let monaco_gp = new Track('Monaco GP', 'Circuit de Monaco', 75.081, 72.909, 78);
let canada_gp = new Track('Canadian GP', 'Circuit Gilles-Villeneuve', 74.179, 70.243, 70);
let spain_gp = new Track('Spanish GP', 'Circuit de Barcelona-Catalunya', 79.218, 75.641, 66);
let austria_gp = new Track('Austrian GP', 'Red Bull Ring', 68.512, 66.200, 71);
let british_gp = new Track('British GP', 'Silverstone Circuit', 90.007, 87.097, 52);
let hungary_gp = new Track('Hungarian GP', 'Hungaroring', 79.314, 76.207, 70);
let belgian_gp = new Track('Belgian GP', 'Circuit de Spa-Francorchamps', 110.763,  104.701, 44);
let dutch_gp = new Track('Dutch GP', 'Circuit Zandvoort', 73.884, 71.097, 72);
let italy_gp = new Track('Italian GP', 'Autodromo Nazionale di Monza', 84.392, 81.046, 53);
let azerbaijan_gp = new Track('Azerbaijan GP', 'Baku City Street Circuit', 106.102, 103.009, 51);
let singapore_gp = new Track('Singapore GP', 'Marina Bay Street Circuit', 104.514, 94.486, 61);
let us_gp = new Track('US GP', 'Circuit of the Americas', 99.371, 96.169, 56);
let mexico_gp = new Track('Mexican GP', 'Autodromo Hermanos Rodriguez', 81.018, 76.788, 71);
let brazil_gp = new Track('Brazilian GP', 'Autodromo Jose Carlos Pace', 74.123, 70.540, 71);
let vegas_gp = new Track('Las Vegas GP', 'Las Vegas Strip Circuit', 98.210, 95.490, 50);
let qatar_gp = new Track('Qatar GP', 'Lusail International Circuit', 86.539, 83.196, 57);
let dubai_gp = new Track('Abu Dhabi GP', 'Yas Marina Circuit', 88.294, 86.103, 55);

const tracks = [australia_gp, china_gp, japan_gp, bahrain_gp, jeddah_gp, miami_gp, imola_gp, monaco_gp, spain_gp, canada_gp, austria_gp, british_gp, belgian_gp, hungary_gp, dutch_gp, italy_gp, azerbaijan_gp, singapore_gp, us_gp, mexico_gp, brazil_gp, vegas_gp, qatar_gp, dubai_gp];

class Log {
    constructor(type, message, driver, team, second_driver, race, race_number) {
        this.type = type;
        this.message = message;
        this.driver = driver; // Name, not class
        this.team = team; // Name, not class
        this.second_driver = second_driver; // Name, not class
        this.race = race;
        this.race_number = race_number;
    }
}

// Log types:
// - Races (critical) driver
// - Qualifying (important) driver
// - Development (important) team
// - Team orders (all) team, possibly driver
// - Championship (critical) driver

const logs = [];

const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const quali_pen = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60];

// HTML variables
let season_number = document.getElementById('season_number');
let race_number = document.getElementById('race_number');
let next_race = document.getElementById('next_race');
let information = document.getElementById('information');
let logs_html = document.getElementById('logs');

// Functions
// Sorting by race time -> driver_standings.sort(function (a, b) { return a.race_time - b.race_time});
// Sorting by points -> driver_standings.sort(function (a, b) { return b.points - a.points; });

let time_count = 0;
let race_count = 0;
let current_tab = "standings";

// Buttons
function race() {
    if (race_count == 24) {
        alert('Season is finished');
    } else {
        weekend(tracks[race_count]);
        if (race_count == 22) {
            race_count++;
            race_number.innerHTML = `Race ${race_count + 1} of 24`;
            next_race.innerHTML = `Next: none`;
        } else if (race_count == 23) {
            race_count++;
            race_number.innerHTML = `All races done`;
            next_race.innerHTML = `Season completed!`;
        } else {
            race_count++;
            race_number.innerHTML = `Race ${race_count + 1} of 24`;
            next_race.innerHTML = `Next: ${tracks[race_count + 1].short_name}`;
        }
    }
    switch (current_tab) {
        case "standings":
            Standings();
            break;
        case "standings_more":
            Standings();
            Standings_SeeMore();
            break;
        case "analytics":
            Analytics();
            break;
        case "development":
            Development();
            break;
        case "contracts":
            Contracts();
            break;
        case "rivalries":
            Rivalries();
            break;
        case "results":
            Results();
            break;
        case "logs":
            Logs();
            break;
        case "seasons":
            Seasons();
            break;
    }
}

function settings() {
    // Implement later
    alert('Under development');
}

// Tabs
function Standings() {
    current_tab = "standings";
    driver_standings.sort(function (a, b) { return b.points - a.points; });
    teams.sort(function (a, b) { return b.points - a.points; });
    information.innerHTML = `
    <div class="leaderboards">
        <div class="leaderboard" id="driver_leaderboard">
            <h2 class="tab-title">Driver's Championship</h2>
            <div class="entry">
                <span class="position gold">1</span>
                <span class="team-color ${driver_standings[0].team.colour}"></span>
                <span class="name">${driver_standings[0].name} <small>${driver_standings[0].team.short_name}</small></span>
                <span class="points">${driver_standings[0].points} <small>${driver_standings[0].wins}W ${driver_standings[0].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position silver">2</span>
                <span class="team-color ${driver_standings[1].team.colour}"></span>
                <span class="name">${driver_standings[1].name} <small>${driver_standings[1].team.short_name}</small></span>
                <span class="points">${driver_standings[1].points} <small>${driver_standings[1].wins}W ${driver_standings[1].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position bronze">3</span>
                <span class="team-color ${driver_standings[2].team.colour}"></span>
                <span class="name">${driver_standings[2].name} <small>${driver_standings[2].team.short_name}</small></span>
                <span class="points">${driver_standings[2].points} <small>${driver_standings[2].wins}W ${driver_standings[2].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">4</span>
                <span class="team-color ${driver_standings[3].team.colour}"></span>
                <span class="name">${driver_standings[3].name} <small>${driver_standings[3].team.short_name}</small></span>
                <span class="points">${driver_standings[3].points} <small>${driver_standings[3].wins}W ${driver_standings[3].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">5</span>
                <span class="team-color ${driver_standings[4].team.colour}"></span>
                <span class="name">${driver_standings[4].name} <small>${driver_standings[4].team.short_name}</small></span>
                <span class="points">${driver_standings[4].points} <small>${driver_standings[4].wins}W ${driver_standings[4].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">6</span>
                <span class="team-color ${driver_standings[5].team.colour}"></span>
                <span class="name">${driver_standings[5].name} <small>${driver_standings[5].team.short_name}</small></span>
                <span class="points">${driver_standings[5].points} <small>${driver_standings[5].wins}W ${driver_standings[5].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">7</span>
                <span class="team-color ${driver_standings[6].team.colour}"></span>
                <span class="name">${driver_standings[6].name} <small>${driver_standings[6].team.short_name}</small></span>
                <span class="points">${driver_standings[6].points} <small>${driver_standings[6].wins}W ${driver_standings[6].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">8</span>
                <span class="team-color ${driver_standings[7].team.colour}"></span>
                <span class="name">${driver_standings[7].name} <small>${driver_standings[7].team.short_name}</small></span>
                <span class="points">${driver_standings[7].points} <small>${driver_standings[7].wins}W ${driver_standings[7].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">9</span>
                <span class="team-color ${driver_standings[8].team.colour}"></span>
                <span class="name">${driver_standings[8].name} <small>${driver_standings[8].team.short_name}</small></span>
                <span class="points">${driver_standings[8].points} <small>${driver_standings[8].wins}W ${driver_standings[8].podiums}P</small></span>
            </div>
            <div class="entry">
                <span class="position">10</span>
                <span class="team-color ${driver_standings[9].team.colour}"></span>
                <span class="name">${driver_standings[9].name} <small>${driver_standings[9].team.short_name}</small></span>
                <span class="points">${driver_standings[9].points} <small>${driver_standings[9].wins}W ${driver_standings[9].podiums}P</small></span>
            </div>
            <div class="see-more-button">
                <button onclick="Standings_SeeMore();"><i class="fa-solid fa-down-long"></i> See More...</button>
            </div>
        </div>
        <div class="leaderboard">
            <h2 class="tab-title">Constructor's Championship</h2>
            <div class="entry">
                <span class="position gold">1</span>
                <span class="team-color ${teams[0].colour}"></span>
                <span class="name">${teams[0].full_name} <small>Perf: ${teams[0].car.level}</small></span>
                <span class="points">${teams[0].points}</span>
            </div>
            <div class="entry">
                <span class="position silver">2</span>
                <span class="team-color ${teams[1].colour}"></span>
                <span class="name">${teams[1].full_name} <small>Perf: ${teams[1].car.level}</small></span>
                <span class="points">${teams[1].points}</span>
            </div>
            <div class="entry">
                <span class="position bronze">3</span>
                <span class="team-color ${teams[2].colour}"></span>
                <span class="name">${teams[2].full_name} <small>Perf: ${teams[2].car.level}</small></span>
                <span class="points">${teams[2].points}</span>
            </div>
            <div class="entry">
                <span class="position">4</span>
                <span class="team-color ${teams[3].colour}"></span>
                <span class="name">${teams[3].full_name} <small>Perf: ${teams[3].car.level}</small></span>
                <span class="points">${teams[3].points}</span>
            </div>
            <div class="entry">
                <span class="position">5</span>
                <span class="team-color ${teams[4].colour}"></span>
                <span class="name">${teams[4].full_name} <small>Perf: ${teams[4].car.level}</small></span>
                <span class="points">${teams[4].points}</span>
            </div>
            <div class="entry">
                <span class="position">6</span>
                <span class="team-color ${teams[5].colour}"></span>
                <span class="name">${teams[5].full_name} <small>Perf: ${teams[5].car.level}</small></span>
                <span class="points">${teams[5].points}</span>
            </div>
            <div class="entry">
                <span class="position">7</span>
                <span class="team-color ${teams[6].colour}"></span>
                <span class="name">${teams[6].full_name} <small>Perf: ${teams[6].car.level}</small></span>
                <span class="points">${teams[6].points}</span>
            </div>
            <div class="entry">
                <span class="position">8</span>
                <span class="team-color ${teams[7].colour}"></span>
                <span class="name">${teams[7].full_name} <small>Perf: ${teams[7].car.level}</small></span>
                <span class="points">${teams[7].points}</span>
            </div>
            <div class="entry">
                <span class="position">9</span>
                <span class="team-color ${teams[8].colour}"></span>
                <span class="name">${teams[8].full_name} <small>Perf: ${teams[8].car.level}</small></span>
                <span class="points">${teams[8].points}</span>
            </div>
            <div class="entry">
                <span class="position">10</span>
                <span class="team-color ${teams[9].colour}"></span>
                <span class="name">${teams[9].full_name} <small>Perf: ${teams[9].car.level}</small></span>
                <span class="points">${teams[9].points}</span>
            </div>
        </div>
    </div>
    `;
}

function Standings_SeeMore() {
    current_tab = "standings_more";
    driver_standings.sort(function (a, b) { return b.points - a.points; });
    document.getElementById('driver_leaderboard').innerHTML = `
    <h2 class="tab-title">Driver's Championship</h2>
    <div class="entry">
        <span class="position gold">1</span>
        <span class="team-color ${driver_standings[0].team.colour}"></span>
        <span class="name">${driver_standings[0].name} <small>${driver_standings[0].team.short_name}</small></span>
        <span class="points">${driver_standings[0].points} <small>${driver_standings[0].wins}W ${driver_standings[0].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position silver">2</span>
        <span class="team-color ${driver_standings[1].team.colour}"></span>
        <span class="name">${driver_standings[1].name} <small>${driver_standings[1].team.short_name}</small></span>
        <span class="points">${driver_standings[1].points} <small>${driver_standings[1].wins}W ${driver_standings[1].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position bronze">3</span>
        <span class="team-color ${driver_standings[2].team.colour}"></span>
        <span class="name">${driver_standings[2].name} <small>${driver_standings[2].team.short_name}</small></span>
        <span class="points">${driver_standings[2].points} <small>${driver_standings[2].wins}W ${driver_standings[2].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">4</span>
        <span class="team-color ${driver_standings[3].team.colour}"></span>
        <span class="name">${driver_standings[3].name} <small>${driver_standings[3].team.short_name}</small></span>
        <span class="points">${driver_standings[3].points} <small>${driver_standings[3].wins}W ${driver_standings[3].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">5</span>
        <span class="team-color ${driver_standings[4].team.colour}"></span>
        <span class="name">${driver_standings[4].name} <small>${driver_standings[4].team.short_name}</small></span>
        <span class="points">${driver_standings[4].points} <small>${driver_standings[4].wins}W ${driver_standings[4].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">6</span>
        <span class="team-color ${driver_standings[5].team.colour}"></span>
        <span class="name">${driver_standings[5].name} <small>${driver_standings[5].team.short_name}</small></span>
        <span class="points">${driver_standings[5].points} <small>${driver_standings[5].wins}W ${driver_standings[5].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">7</span>
        <span class="team-color ${driver_standings[6].team.colour}"></span>
        <span class="name">${driver_standings[6].name} <small>${driver_standings[6].team.short_name}</small></span>
        <span class="points">${driver_standings[6].points} <small>${driver_standings[6].wins}W ${driver_standings[6].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">8</span>
        <span class="team-color ${driver_standings[7].team.colour}"></span>
        <span class="name">${driver_standings[7].name} <small>${driver_standings[7].team.short_name}</small></span>
        <span class="points">${driver_standings[7].points} <small>${driver_standings[7].wins}W ${driver_standings[7].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">9</span>
        <span class="team-color ${driver_standings[8].team.colour}"></span>
        <span class="name">${driver_standings[8].name} <small>${driver_standings[8].team.short_name}</small></span>
        <span class="points">${driver_standings[8].points} <small>${driver_standings[8].wins}W ${driver_standings[8].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">10</span>
        <span class="team-color ${driver_standings[9].team.colour}"></span>
        <span class="name">${driver_standings[9].name} <small>${driver_standings[9].team.short_name}</small></span>
        <span class="points">${driver_standings[9].points} <small>${driver_standings[9].wins}W ${driver_standings[9].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">11</span>
        <span class="team-color ${driver_standings[10].team.colour}"></span>
        <span class="name">${driver_standings[10].name} <small>${driver_standings[10].team.short_name}</small></span>
        <span class="points">${driver_standings[10].points} <small>${driver_standings[10].wins}W ${driver_standings[10].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">12</span>
        <span class="team-color ${driver_standings[11].team.colour}"></span>
        <span class="name">${driver_standings[11].name} <small>${driver_standings[11].team.short_name}</small></span>
        <span class="points">${driver_standings[11].points} <small>${driver_standings[11].wins}W ${driver_standings[11].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">13</span>
        <span class="team-color ${driver_standings[12].team.colour}"></span>
        <span class="name">${driver_standings[12].name} <small>${driver_standings[12].team.short_name}</small></span>
        <span class="points">${driver_standings[12].points} <small>${driver_standings[12].wins}W ${driver_standings[12].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">14</span>
        <span class="team-color ${driver_standings[13].team.colour}"></span>
        <span class="name">${driver_standings[13].name} <small>${driver_standings[13].team.short_name}</small></span>
        <span class="points">${driver_standings[13].points} <small>${driver_standings[13].wins}W ${driver_standings[13].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">15</span>
        <span class="team-color ${driver_standings[14].team.colour}"></span>
        <span class="name">${driver_standings[14].name} <small>${driver_standings[14].team.short_name}</small></span>
        <span class="points">${driver_standings[14].points} <small>${driver_standings[14].wins}W ${driver_standings[14].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">16</span>
        <span class="team-color ${driver_standings[15].team.colour}"></span>
        <span class="name">${driver_standings[15].name} <small>${driver_standings[15].team.short_name}</small></span>
        <span class="points">${driver_standings[15].points} <small>${driver_standings[15].wins}W ${driver_standings[15].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">17</span>
        <span class="team-color ${driver_standings[16].team.colour}"></span>
        <span class="name">${driver_standings[16].name} <small>${driver_standings[16].team.short_name}</small></span>
        <span class="points">${driver_standings[16].points} <small>${driver_standings[16].wins}W ${driver_standings[16].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">18</span>
        <span class="team-color ${driver_standings[17].team.colour}"></span>
        <span class="name">${driver_standings[17].name} <small>${driver_standings[17].team.short_name}</small></span>
        <span class="points">${driver_standings[17].points} <small>${driver_standings[17].wins}W ${driver_standings[17].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">19</span>
        <span class="team-color ${driver_standings[18].team.colour}"></span>
        <span class="name">${driver_standings[18].name} <small>${driver_standings[18].team.short_name}</small></span>
        <span class="points">${driver_standings[18].points} <small>${driver_standings[18].wins}W ${driver_standings[18].podiums}P</small></span>
    </div>
    <div class="entry">
        <span class="position">20</span>
        <span class="team-color ${driver_standings[19].team.colour}"></span>
        <span class="name">${driver_standings[19].name} <small>${driver_standings[19].team.short_name}</small></span>
        <span class="points">${driver_standings[19].points} <small>${driver_standings[19].wins}W ${driver_standings[19].podiums}P</small></span>
    </div>
    <div class="see-more-button">
        <button onclick="Standings();"><i class="fa-solid fa-up-long"></i> See Less...</button>
    </div>
    `
}

function Analytics() {
    current_tab = "analytics";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Analytics</h2>
        <p>Under development</p>
    </div>
    `;
}

function Development() {
    current_tab = "development";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Development</h2>
        <p>Under development</p>
    </div>
    `;
}

function Contracts() {
    current_tab = "contracts";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Contracts</h2>
        <p>Under development</p>
    </div>
    `;
}

function Rivalries() {
    current_tab = "rivalries";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Driver Rivalries</h2>
        <div class="rivalries-grid">
            <div class="card">
            <h3>Alpine Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot alpine"></span> ${alpine_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${alpine_h2h.team.driver2.name} <span class="color-dot alpine"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${alpine_h2h.d1_quali} - ${alpine_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${alpine_h2h.d1_wins} - ${alpine_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${alpine_h2h.team.driver1.points} - ${alpine_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Aston Martin Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot aston-martin"></span> ${aston_martin_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${aston_martin_h2h.team.driver2.name} <span class="color-dot aston-martin"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${aston_martin_h2h.d1_quali} - ${aston_martin_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${aston_martin_h2h.d1_wins} - ${aston_martin_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${aston_martin_h2h.team.driver1.points} - ${aston_martin_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Ferrari Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot ferrari"></span> ${ferrari_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${ferrari_h2h.team.driver2.name} <span class="color-dot ferrari"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${ferrari_h2h.d1_quali} - ${ferrari_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${ferrari_h2h.d1_wins} - ${ferrari_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${ferrari_h2h.team.driver1.points} - ${ferrari_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Haas Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot haas"></span> ${haas_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${haas_h2h.team.driver2.name} <span class="color-dot haas"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${haas_h2h.d1_quali} - ${haas_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${haas_h2h.d1_wins} - ${haas_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${haas_h2h.team.driver1.points} - ${haas_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>McLaren Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot mclaren"></span> ${mclaren_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${mclaren_h2h.team.driver2.name} <span class="color-dot mclaren"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${mclaren_h2h.d1_quali} - ${mclaren_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${mclaren_h2h.d1_wins} - ${mclaren_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${mclaren_h2h.team.driver1.points} - ${mclaren_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Mercedes Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot mercedes"></span> ${mercedes_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${mercedes_h2h.team.driver2.name} <span class="color-dot mercedes"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${mercedes_h2h.d1_quali} - ${mercedes_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${mercedes_h2h.d1_wins} - ${mercedes_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${mercedes_h2h.team.driver1.points} - ${mercedes_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Racing Bulls Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot rb"></span> ${rb_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${rb_h2h.team.driver2.name} <span class="color-dot rb"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${rb_h2h.d1_quali} - ${rb_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${rb_h2h.d1_wins} - ${rb_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${rb_h2h.team.driver1.points} - ${rb_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Red Bull Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot red-bull"></span> ${red_bull_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${red_bull_h2h.team.driver2.name} <span class="color-dot red-bull"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${red_bull_h2h.d1_quali} - ${red_bull_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${red_bull_h2h.d1_wins} - ${red_bull_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${red_bull_h2h.team.driver1.points} - ${red_bull_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Kick Sauber Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot sauber"></span> ${sauber_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${sauber_h2h.team.driver2.name} <span class="color-dot sauber"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${sauber_h2h.d1_quali} - ${sauber_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${sauber_h2h.d1_wins} - ${sauber_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${sauber_h2h.team.driver1.points} - ${sauber_h2h.team.driver2.points}</span></div>
                </div>
            </div>
            <div class="card">
            <h3>Williams Teammates</h3>
                <div class="rivalry">
                    <div class="rival left"><span class="color-dot williams"></span> ${williams_h2h.team.driver1.name}</div>
                    <div class="vs-box">vs</div>
                    <div class="rival right">${williams_h2h.team.driver2.name} <span class="color-dot williams"></span></div>
                </div>
                <div class="stats">
                    <div class="stat-line"><span>Qualifying:</span><span>${williams_h2h.d1_quali} - ${williams_h2h.d2_quali}</span></div>
                    <div class="stat-line"><span>Race:</span><span>${williams_h2h.d1_wins} - ${williams_h2h.d2_wins}</span></div>
                    <div class="stat-line"><span>Points:</span><span>${williams_h2h.team.driver1.points} - ${williams_h2h.team.driver2.points}</span></div>
                </div>
            </div>
        </div>
    </div>
    `;
}

function Results() {
    current_tab = "results";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Results</h2>
        <p>Under development</p>
    </div>
    `;
}

function Logs() {
    current_tab = "logs";
    let log_text = '';
    logs.slice().reverse().forEach(log => {
        switch (log.type) {
            case 'race-win':
                log_text += `
                <div class="log ${log.type}">
                    <span><i style="color: red;" class="fa-solid fa-flag"></i> ${log.driver} ${log.message} ${log.race}!</span>
                    <span class="log-race-number">Race ${log.race_number}</span>
                </div>
                `;
                break;
            case 'qualifying-pole':
                log_text += `
                <div class="log ${log.type}">
                    <span><i style="color: dodgerblue;" class="fa-solid fa-stopwatch"></i> ${log.message} ${log.race}. Pole: ${log.driver}</span>
                    <span class="log-race-number">Race ${log.race_number}</span>
                </div>
                `;
                break;
        }
    });
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Logs</h2>
        <div>
            <button class="log-button">All</button>
            <button class="log-button"><i class="fa-solid fa-flag"></i> Races</button>
            <button class="log-button"><i class="fa-solid fa-stopwatch"></i> Qualifying</button>
            <button class="log-button"><i class="fa-solid fa-wrench"></i> Development</button>
            <button class="log-button"><i class="fa-solid fa-bullhorn"></i> Team Orders</button>
            <button class="log-button"><i class="fa-solid fa-trophy"></i> Championship</button>
        </div>
        <div id="logs" class="logs">
            ${log_text}
        </div>
    </div>
    `;
}

function Seasons() {
    current_tab = "seasons";
    information.innerHTML = `
    <div class="container">
        <h2 class="tab-title">Seasons</h2>
        <p>Under development</p>
    </div>
    `;
}

// Weekend functions
function weekend(track) {
    qualifying(track);
    teams.forEach(team => {
        team.driver1.race_time = 0;
        sim_race(track, team.driver1);
        team.driver2.race_time = 0;
        sim_race(track, team.driver2);
    });

    driver_standings.sort(function (a, b) { return a.race_time - b.race_time});
    update_h2h();
    give_points();
    driver_standings.forEach(driver => {
        teams.forEach(team => {
            if (driver == team.reserve_driver) {
                driver.race_time = 100000;
                driver.fastest_lap = 1000;
            }
        });
    });
}

function update_h2h() {
    head2heads.forEach(head2head => {
        driver_standings.forEach(driver => {
            if (driver.team == head2head.team) {
                if (!head2head.check) {
                    if (driver == driver.team.driver1) {
                        head2head.d1_wins++;
                        head2head.check = true;
                    } else if (driver == driver.team.driver2) {
                        head2head.d2_wins++;
                        head2head.check = true;
                    }
                }
            }
        });
    });
    head2heads.forEach(head2head => {
        head2head.check = false;
    });
}

function update_h2h_quali(quali_result) {
    head2heads.forEach(head2head => {
        quali_result.forEach(driver => {
            if (driver.team == head2head.team) {
                if (!head2head.check) {
                    if (driver == driver.team.driver1) {
                        head2head.d1_quali++;
                        head2head.check = true;
                    } else if (driver == driver.team.driver2) {
                        head2head.d2_quali++;
                        head2head.check = true;
                    }
                }
            }
        });
    });
    head2heads.forEach(head2head => {
        head2head.check = false;
    });
}

function give_points() {
    // Sort by race time
    driver_standings.sort(function (a, b) { return a.race_time - b.race_time; });
    // Add to position history
    let position = 1;
    driver_standings.forEach(driver => {
        if (driver.race_time == 99999) {
            driver.pos_history.push('DNF');
            position++;
        } else {
            if (position == 1) {
                driver.wins++;
                driver.podiums++;
                let win_log = new Log('race-win', 'wins the', driver.name, '', '', tracks[race_count].short_name, race_count + 1);
                logs.push(win_log);
            } else if (position == 2 || position == 3) {
                driver.podiums++;
            }
            driver.pos_history.push(position);
            position++;
        }
    });
    // Give points
    for (let i = 0; i < points.length; i++) {
        driver_standings[i].points += points[i];
        driver_standings[i].team.points += points[i];
    }
}

function qualifying(track) {
    let quali_pos = 1;
    const quali_result = [];
    // Q1
    const q1 = driver_standings;
    q1.forEach(driver => {
        let driver_adjust = (driver.skill + driver.team.car.level) / 100;
        let time_range = track.avg_lap - track.fastest_lap;
        let lap_time = (track.fastest_lap + time_range / 1.5) + (Math.random() - driver_adjust);
        driver.quali_lap = lap_time;
    });
    q1.sort(function (a, b) { return a.quali_lap - b.quali_lap});
    const q2 = q1.slice(0, -5);
    q1.splice(0, q1.length - 5);
    // Q2
    q2.forEach(driver => {
        let driver_adjust = (driver.skill + driver.team.car.level) / 100;
        let time_range = track.avg_lap - track.fastest_lap;
        let lap_time = (track.fastest_lap + time_range / 1.5) + (Math.random() - driver_adjust);
        driver.quali_lap = lap_time;
    });
    q2.sort(function (a, b) { return a.quali_lap - b.quali_lap});
    const q3 = q2.slice(0, -5);
    q2.splice(0, q2.length - 5);
    // Q3
    q3.forEach(driver => {
        let driver_adjust = (driver.skill + driver.team.car.level) / 100;
        let time_range = track.avg_lap - track.fastest_lap;
        let lap_time = (track.fastest_lap + time_range / 1.5) + (Math.random() - driver_adjust);
        driver.quali_lap = lap_time;
    });
    q3.sort(function (a, b) { return a.quali_lap - b.quali_lap});
    // Logging qualifying
    q3.forEach(driver => {
        quali_result.push(driver);
        driver.race_time += quali_pen[quali_pos - 1];
        quali_pos++;
    });
    q2.forEach(driver => {
        quali_result.push(driver);
        driver.race_time += quali_pen[quali_pos - 1];
        quali_pos++;
    });
    q1.forEach(driver => {
        quali_result.push(driver);
        driver.race_time += quali_pen[quali_pos - 1];
        quali_pos++;
    });
    update_h2h_quali(quali_result);
    let quali_log = new Log('qualifying-pole', 'Qualifying completed for', q3[0].name, '', '', tracks[race_count].short_name, race_count + 1);
    logs.push(quali_log);
}

// Other functions
function sim_race(track, driver) {
    // Declare variables
    let driver_adjust = (driver.skill + driver.team.car.level) / 100;
    let time_range = track.avg_lap - track.fastest_lap;
    let race_time = 0;

    // Check for driver swap
    if (Math.random() > 0.99995) {
        // Do driver swap
        sim_race(track, driver.team.reserve_driver);
        return;
    }

    // Check if in driver standings
    let check_driver = false;
    driver_standings.forEach(driver_in => {
        if (driver == driver_in) {
            check_driver = true;
        }
    });
    if (!check_driver) {
        driver_standings.push(driver);
    }

    // Check for DNF
    let random = Math.random();
    if (random < (driver.dnf / 100)) {
        driver.race_time = 99999;
        driver.fastest_lap = 9999;
        return;
    }

    // Calculate race time
    for (let i = 0; i < track.laps; i++) {
        // Calculate race time
        let lap_time = (track.fastest_lap + time_range / 1.5) + (Math.random() - driver_adjust);
        if (lap_time < driver.fastest_lap) {
            driver.fastest_lap = lap_time;
        }
        race_time += lap_time;
    }
    driver.race_time += race_time;
}

function timing_race(race_time) {
    let full_time = '';
    if (time_count == 0) {
        let hours = Math.floor(race_time / 3600);
        let minutes = Math.floor((race_time % 3600) / 60);
        let seconds = Math.floor(race_time % 60);
        let milliseconds = Math.floor((race_time - Math.floor(race_time)) * 1000);
        full_time += hours + ':' + (minutes < 10 ? '0' : '') + minutes;
        full_time += ':' + (seconds < 10 ? '0' : '') + seconds;
        full_time += '.' + (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds;
        return full_time;
    } else {
        if (race_time == 99999) return 'DNF';
        let gap = race_time - driver_standings[0].race_time;
        let seconds = Math.floor(gap);
        let milliseconds = Math.floor((gap - seconds) * 1000);
        full_time += seconds + '.' + (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds + ' sec';
        return full_time;
    }
}

function timing_lap(quali_lap) {
    let minutes = Math.floor(quali_lap / 60);
    let seconds = Math.floor(quali_lap % 60);
    let milliseconds = Math.floor((quali_lap - Math.floor(quali_lap)) * 1000);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    milliseconds = milliseconds < 10 ? `00${milliseconds}` :
                   milliseconds < 100 ? `0${milliseconds}` : milliseconds;
    return `${minutes}:${seconds}.${milliseconds}`;
}
