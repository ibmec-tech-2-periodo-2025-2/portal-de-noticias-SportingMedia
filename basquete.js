const data = {
    East: [
        {team:"Boston Celtics",wins:64,losses:18,logo:"https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg"},
        {team:"New York Knicks",wins:50,losses:32,logo:"https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg"},
        {team:"Milwaukee Bucks",wins:49,losses:33,logo:"https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"},
        {team:"Cleveland Cavaliers",wins:48,losses:34,logo:"https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg"},
        {team:"Orlando Magic",wins:47,losses:35,logo:"https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg"},
        {team:"Indiana Pacers",wins:47,losses:35,logo:"https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg"},
        {team:"Philadelphia 76ers",wins:47,losses:35,logo:"https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg"},
        {team:"Miami Heat",wins:46,losses:36,logo:"https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"},
        {team:"Chicago Bulls",wins:39,losses:43,logo:"https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg"},
        {team:"Atlanta Hawks",wins:36,losses:46,logo:"https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg"},
        {team:"Brooklyn Nets",wins:32,losses:50,logo:"https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg"},
        {team:"Toronto Raptors",wins:25,losses:57,logo:"https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg"},
        {team:"Charlotte Hornets",wins:21,losses:61,logo:"https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"},
        {team:"Washington Wizards",wins:15,losses:67,logo:"https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg"},
        {team:"Detroit Pistons",wins:14,losses:68,logo:"https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg"}
    ],
    West: [
        {team:"Oklahoma City Thunder",wins:57,losses:25,logo:"https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg"},
        {team:"Denver Nuggets",wins:57,losses:25,logo:"https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg"},
        {team:"Minnesota Timberwolves",wins:56,losses:26,logo:"https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg"},
        {team:"Los Angeles Clippers",wins:51,losses:31,logo:"https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg"},
        {team:"Dallas Mavericks",wins:50,losses:32,logo:"https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg"},
        {team:"Phoenix Suns",wins:49,losses:33,logo:"https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg"},
        {team:"New Orleans Pelicans",wins:49,losses:33,logo:"https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg"},
        {team:"Sacramento Kings",wins:46,losses:36,logo:"https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg"},
        {team:"Los Angeles Lakers",wins:47,losses:35,logo:"https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg"},
        {team:"Golden State Warriors",wins:46,losses:36,logo:"https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg"},
        {team:"Houston Rockets",wins:41,losses:41,logo:"https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg"},
        {team:"Utah Jazz",wins:31,losses:51,logo:"https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg"},
        {team:"Memphis Grizzlies",wins:27,losses:55,logo:"https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg"},
        {team:"San Antonio Spurs",wins:22,losses:60,logo:"https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg"},
        {team:"Portland Trail Blazers",wins:21,losses:61,logo:"https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg"}
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
render('East');