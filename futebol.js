const brData = [
  {team:"Flamengo", pts:50, pj:22, v:15, e:5, d:2, gm:47, gc:10, sg:37, logo:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg"},
  {team:"Cruzeiro", pts:47, pj:23, v:14, e:5, d:4, gm:37, gc:16, sg:21, logo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Escudo_Cruzeiro_1996.png"},
  {team:"Palmeiras", pts:46, pj:21, v:14, e:4, d:3, gm:32, gc:17, sg:15, logo:"https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"},
  {team:"Mirassol", pts:38, pj:21, v:10, e:8, d:3, gm:36, gc:20, sg:16, logo:"https://upload.wikimedia.org/wikipedia/commons/5/58/Mirassol_FC_Logo.png"},
  {team:"Bahia", pts:36, pj:21, v:10, e:6, d:5, gm:29, gc:24, sg:5, logo:"https://upload.wikimedia.org/wikipedia/commons/2/28/EC_Bahia_logo.svg"},
  {team:"Botafogo", pts:35, pj:21, v:10, e:5, d:6, gm:30, gc:14, sg:16, logo:"https://upload.wikimedia.org/wikipedia/commons/1/13/Escudo_Botafogo.png"},
  {team:"São Paulo", pts:35, pj:23, v:9, e:8, d:6, gm:27, gc:23, sg:4, logo:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Sao_Paulo_FC.svg"},
  {team:"Bragantino", pts:31, pj:23, v:9, e:4, d:10, gm:28, gc:33, sg:-5, logo:"https://upload.wikimedia.org/wikipedia/commons/6/6d/RedBullBragantino-SVG.svg"},
  {team:"Corinthians", pts:29, pj:23, v:7, e:8, d:8, gm:24, gc:28, sg:-4, logo:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Corinthians_logo.svg"},
  {team:"Fluminense", pts:28, pj:21, v:8, e:4, d:9, gm:25, gc:29, sg:-4, logo:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Fluminense_FC_escudo.png"},
  {team:"Ceará SC", pts:27, pj:22, v:7, e:6, d:9, gm:21, gc:22, sg:-1, logo:"https://upload.wikimedia.org/wikipedia/commons/0/08/Ceara_Sporting_Club_%28crest%29.svg"},
  {team:"Internacional", pts:27, pj:22, v:7, e:6, d:9, gm:26, gc:33, sg:-7, logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/SC_Internacional.svg"},
  {team:"Atlético-MG", pts:25, pj:21, v:6, e:7, d:8, gm:21, gc:25, sg:-4, logo:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Clube_Atl%C3%A9tico_Mineiro_logo.svg"},
  {team:"Grêmio", pts:25, pj:22, v:6, e:7, d:9, gm:20, gc:27, sg:-7, logo:"https://upload.wikimedia.org/wikipedia/commons/6/61/Gremio_logo.svg"},
  {team:"Vasco da Gama", pts:23, pj:22, v:6, e:5, d:11, gm:32, gc:33, sg:-1, logo:"https://upload.wikimedia.org/wikipedia/commons/0/05/CRVascodaGama.png"},
  {team:"Santos", pts:23, pj:22, v:6, e:5, d:11, gm:21, gc:32, sg:-11, logo:"https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"},
  {team:"EC Vitória", pts:22, pj:23, v:4, e:10, d:9, gm:19, gc:34, sg:-15, logo:"https://upload.wikimedia.org/wikipedia/commons/9/9a/EC_Vitoria_logo.png"},
  {team:"Juventude", pts:21, pj:21, v:6, e:3, d:13, gm:19, gc:43, sg:-24, logo:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Esporte_Clube_Juventude_logo.svg"},
  {team:"Fortaleza", pts:18, pj:22, v:4, e:6, d:12, gm:22, gc:34, sg:-12, logo:"https://upload.wikimedia.org/wikipedia/commons/b/bb/FortalezaEsporteClube.svg"},
  {team:"Sport Recife", pts:11, pj:21, v:1, e:8, d:12, gm:15, gc:34, sg:-19, logo:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Sport_Recife.svg"}
];

const brTitle = document.getElementById('br-title');
const brTbody = document.getElementById('br-standings');

const renderBR = () => {
  brTitle.textContent = "Brasileirão Série A";
  brTbody.innerHTML = brData.map((t, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><img src="${t.logo}" width="26" height="26" alt=""></td>
      <td>${t.team}</td>
      <td>${t.pts}</td>
      <td>${t.pj}</td>
      <td>${t.v}</td>
      <td>${t.e}</td>
      <td>${t.d}</td>
      <td>${t.sg}</td>
    </tr>
  `).join("");
};

renderBR();
