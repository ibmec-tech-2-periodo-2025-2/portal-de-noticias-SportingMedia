const data = {
    East: [
        {team:"Cleveland Cavaliers",wins:64,losses:18,logo:"img/cavaliers.svg"},
        {team:"Boston Celtics",wins:61,losses:21,logo:"img/celtics.svg"},
        {team:"New York Knicks",wins:51,losses:31,logo:"img/knicks.svg"},
        {team:"Indiana Pacers",wins:50,losses:32,logo:"img/pacers.svg"},
        {team:"Milwaukee Bucks",wins:48,losses:34,logo:"img/bucks.svg"},
        {team:"Detroit Pistons",wins:44,losses:38,logo:"img/pistons.svg"},
        {team:"Orlando Magic",wins:41,losses:41,logo:"img/magic.svg"},
        {team:"Atlanta Hawks",wins:40,losses:42,logo:"img/hawks.svg"},
        {team:"Chicago Bulls",wins:39,losses:43,logo:"img/bulls.svg"},
        {team:"Miami Heat",wins:37,losses:45,logo:"img/heat.svg"},
        {team:"Toronto Raptors",wins:30,losses:52,logo:"img/raptors.svg"},
        {team:"Brooklyn Nets",wins:26,losses:56,logo:"img/nets.svg"},
        {team:"Philadelphia 76ers",wins:24,losses:58,logo:"img/76ers.svg"},
        {team:"Charlotte Hornets",wins:19,losses:63,logo:"img/hornets.svg"},
        {team:"Washington Wizards",wins:18,losses:64,logo:"img/wizards.svg"}
    ],
    West: [
        {team:"Oklahoma City Thunder 🏆",wins:68,losses:14,logo:"img/okc.svg"},
        {team:"Houston Rockets",wins:52,losses:30,logo:"img/rockets.svg"},
        {team:"Los Angeles Lakers",wins:50,losses:32,logo:"img/lakers.svg"},
        {team:"Denver Nuggets",wins:50,losses:32,logo:"img/nuggets.svg"},
        {team:"Los Angeles Clippers",wins:50,losses:32,logo:"img/clippers.svg"},
        {team:"Minnesota Timberwolves",wins:49,losses:33,logo:"img/timber.svg"},
        {team:"Golden State Warriors",wins:48,losses:34,logo:"img/warriors.svg"},
        {team:"Memphis Grizzlies",wins:48,losses:34,logo:"img/memphis.svg"},
        {team:"Sacramento Kings",wins:40,losses:42,logo:"img/kings.svg"},
        {team:"Dallas Mavericks",wins:39,losses:43,logo:"img/mavericks.svg"},
        {team:"Phoenix Suns",wins:36,losses:46,logo:"img/suns.svg"},
        {team:"Portland Trail Blazers",wins:36,losses:46,logo:"img/blazzers.svg"},
        {team:"San Antonio Spurs",wins:34,losses:48,logo:"img/spurs.svg"},
        {team:"New Orleans Pelicans",wins:21,losses:61,logo:"img/pelicans.svg"},
        {team:"Utah Jazz",wins:17,losses:65,logo:"img/jazz.svg"}
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