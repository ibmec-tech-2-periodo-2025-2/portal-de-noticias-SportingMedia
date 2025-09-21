const data = {
    East: [
        {team:"Boston Celtics",wins:64,losses:18,logo:"svg/celtics.svg"},
        {team:"New York Knicks",wins:50,losses:32,logo:"svg/knicks.svg"},
        {team:"Milwaukee Bucks",wins:49,losses:33,logo:"svg/bucks.svg"},
        {team:"Cleveland Cavaliers",wins:48,losses:34,logo:"svg/cavaliers.svg"},
        {team:"Orlando Magic",wins:47,losses:35,logo:"svg/magic.svg"},
        {team:"Indiana Pacers",wins:47,losses:35,logo:"svg/pacers.svg"},
        {team:"Philadelphia 76ers",wins:47,losses:35,logo:"svg/76ers.svg"},
        {team:"Miami Heat",wins:46,losses:36,logo:"svg/heat.svg"},
        {team:"Chicago Bulls",wins:39,losses:43,logo:"svg/bulls.svg"},
        {team:"Atlanta Hawks",wins:36,losses:46,logo:"svg/hawks.svg"},
        {team:"Brooklyn Nets",wins:32,losses:50,logo:"svg/nets.svg"},
        {team:"Toronto Raptors",wins:25,losses:57,logo:"svg/raptors.svg"},
        {team:"Charlotte Hornets",wins:21,losses:61,logo:"svg/hornets.svg"},
        {team:"Washington Wizards",wins:15,losses:67,logo:"svg/wizards.svg"},
        {team:"Detroit Pistons",wins:14,losses:68,logo:"svg/pistons.svg"}
    ],
    West: [
        {team:"Oklahoma City Thunder 🏆",wins:57,losses:25,logo:"svg/okc.svg"},
        {team:"Denver Nuggets",wins:57,losses:25,logo:"svg/nuggets.svg"},
        {team:"Minnesota Timberwolves",wins:56,losses:26,logo:"svg/timber.svg"},
        {team:"Los Angeles Clippers",wins:51,losses:31,logo:"svg/clippers.svg"},
        {team:"Dallas Mavericks",wins:50,losses:32,logo:"svg/mavericks.svg"},
        {team:"Phoenix Suns",wins:49,losses:33,logo:"svg/suns.svg"},
        {team:"New Orleans Pelicans",wins:49,losses:33,logo:"svg/pelicans.svg"}, // No corresponding file found
        {team:"Sacramento Kings",wins:46,losses:36,logo:"svg/kings.svg"},
        {team:"Los Angeles Lakers",wins:47,losses:35,logo:"svg/lakers.svg"},
        {team:"Golden State Warriors",wins:46,losses:36,logo:"svg/warriors.svg"},
        {team:"Houston Rockets",wins:41,losses:41,logo:"svg/rockets.svg"},
        {team:"Utah Jazz",wins:31,losses:51,logo:"svg/jazz.svg"},
        {team:"Memphis Grizzlies",wins:27,losses:55,logo:"svg/memphis.svg"},
        {team:"San Antonio Spurs",wins:22,losses:60,logo:"svg/spurs.svg"},
        {team:"Portland Trail Blazers",wins:21,losses:61,logo:"svg/blazzers.svg"}
    ]
};

const title = document.getElementById('title');
const tbody = document.getElementById('standings');
const eastBtn = document.getElementById('eastBtn');
const westBtn = document.getElementById('westBtn');

const render = conf => {
    title.textContent = `NBA ${conf} Conference`;
    tbody.innerHTML = data[conf].map((t,i)=>`<tr><td>${i+1}</td><td><img src="${t.logo}" width="30" height="30"></td><td>${t.team}</td><td>${t.wins}</td><td>${t.losses}</td></tr>`).join('');
};

eastBtn.onclick = () => render('East');
westBtn.onclick = () => render('West');
render('West');