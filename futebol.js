/* ======================= Dados da Tabela ======================= */
const brData = [
  {team:"Flamengo",        pts:50, pj:22, v:15, e:5,  d:2,  gm:47, gc:10, sg:37},
  {team:"Cruzeiro",        pts:47, pj:23, v:14, e:5,  d:4,  gm:37, gc:16, sg:21},
  {team:"Palmeiras",       pts:46, pj:21, v:14, e:4,  d:3,  gm:32, gc:17, sg:15},
  {team:"Mirassol",        pts:38, pj:21, v:10, e:8,  d:3,  gm:36, gc:20, sg:16},
  {team:"Bahia",           pts:36, pj:21, v:10, e:6,  d:5,  gm:29, gc:24, sg:5},
  {team:"Botafogo",        pts:35, pj:21, v:10, e:5,  d:6,  gm:30, gc:14, sg:16},
  {team:"São Paulo",       pts:35, pj:23, v:9,  e:8,  d:6,  gm:27, gc:23, sg:4},
  {team:"Bragantino",      pts:31, pj:23, v:9,  e:4,  d:10, gm:28, gc:33, sg:-5},
  {team:"Corinthians",     pts:29, pj:23, v:7,  e:8,  d:8,  gm:24, gc:28, sg:-4},
  {team:"Fluminense",      pts:28, pj:21, v:8,  e:4,  d:9,  gm:25, gc:29, sg:-4},
  {team:"Ceará SC",        pts:27, pj:22, v:7,  e:6,  d:9,  gm:21, gc:22, sg:-1},
  {team:"Internacional",   pts:27, pj:22, v:7,  e:6,  d:9,  gm:26, gc:33, sg:-7},
  {team:"Atlético-MG",     pts:25, pj:21, v:6,  e:7,  d:8,  gm:21, gc:25, sg:-4},
  {team:"Grêmio",          pts:25, pj:22, v:6,  e:7,  d:9,  gm:20, gc:27, sg:-7},
  {team:"Vasco da Gama",   pts:23, pj:22, v:6,  e:5,  d:11, gm:32, gc:33, sg:-1},
  {team:"Santos",          pts:23, pj:22, v:6,  e:5,  d:11, gm:21, gc:32, sg:-11},
  {team:"EC Vitória",      pts:22, pj:23, v:4,  e:10, d:9,  gm:19, gc:34, sg:-15},
  {team:"Juventude",       pts:21, pj:21, v:6,  e:3,  d:13, gm:19, gc:43, sg:-24},
  {team:"Fortaleza",       pts:18, pj:22, v:4,  e:6,  d:12, gm:22, gc:34, sg:-12},
  {team:"Sport Recife",    pts:11, pj:21, v:1,  e:8,  d:12, gm:15, gc:34, sg:-19}
];

/* ============== Mapa: nome do time -> arquivo do escudo ============== */
const logoMap = {
  "Flamengo":        "Flamengo.png",
  "Cruzeiro":        "Cruzeiro.png",
  "Palmeiras":       "Palmeiras.png",
  "Mirassol":        "Mirassol-SP.png",        // nome do arquivo tem sufixo -SP
  "Bahia":           "Bahia.png",
  "Botafogo":        "Botafogo.png",
  "São Paulo":       "SãoPaulo.png",           // espaço removido no arquivo
  "Bragantino":      "RedBullBragantino.png",  // nome completo do RB Bragantino
  "Corinthians":     "Corinthians.png",
  "Fluminense":      "Fluminense.png",
  "Ceará SC":        "Ceará.png",              // equipe no dado vem como "Ceará SC"
  "Internacional":   "Internacional.png",
  "Atlético-MG":     "AtléticoMineiro.png",    // arquivo usa o nome completo do clube
  "Grêmio":          "Grêmio.png",
  "Vasco da Gama":   "VascodaGama.png",        // sem espaços e com letra minúscula no "da"
  "Santos":          "Santos.png",
  "EC Vitória":      "Vitória.png",            // arquivo não tem o prefixo "EC"
  "Juventude":       "Juventude.png",
  "Fortaleza":       "Fortaleza.png",
  "Sport Recife":    "SportRecife.png"         // sem espaço no nome do arquivo
};

/* Retorna a URL do escudo já com encoding correto para acentos/espaços */
const logoSrc = (team) => encodeURI(logoMap[team] || ''); // se não houver mapeamento, retorna string vazia

/* ============== Referências aos elementos da tabela no DOM ============== */
const brTitle = document.getElementById('br-title');      // <h2> do título "Brasileirão Série A"
const brTbody = document.getElementById('br-standings');  // <tbody> onde as linhas serão injetadas

/* ============== Renderiza a tabela do Brasileirão com os dados acima ============== */
function renderBR() {
  brTitle.textContent = "Brasileirão Série A"; // garante o texto do título (idempotente)
  // Gera as linhas da tabela com base em brData; i+1 é a posição (1-based)
  brTbody.innerHTML = brData.map((t, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <img 
          src="${logoSrc(t.team)}"         /* caminho do escudo, já codificado */
          width="26" height="26"           /* tamanho consistente para todos os escudos */
          alt="${t.team} logo"             /* acessibilidade: descrição da imagem */
          loading="lazy"                   /* adia o carregamento para melhorar performance */
          onerror="this.style.display='none'" /* se a imagem não existir, esconde o <img> */
        >
      </td>
      <td>${t.team}</td>
      <td>${t.pts}</td>
      <td>${t.pj}</td>
      <td>${t.v}</td>
      <td>${t.e}</td>
      <td>${t.d}</td>
      <td>${t.sg}</td>
    </tr>
  `).join(""); // junta o array de strings em um único HTML sem vírgulas
}

/* === Sincroniza a barra de rolagem do topo com a tabela === */
function initTopScrollbarSync() {
  const wrap = document.querySelector('.tabelas1 .table-wrap');   // container rolável da tabela
  const top  = document.querySelector('.tabelas1 .scrollbar-top'); // “barra” falsa no topo
  if (!wrap || !top) return; // segurança: sai se algum elemento não existir

  const spacer = top.querySelector('.scrollbar-spacer'); // elemento que define a largura da barra falsa

  const syncWidths = () => {
    // Usa a largura total rolável do conteúdo da tabela para igualar a “barra” superior
    spacer.style.width = wrap.scrollWidth + 'px';
  };

  // Mantém a posição de scroll horizontal sincronizada entre o topo e a tabela
  top.addEventListener('scroll',  () => { wrap.scrollLeft = top.scrollLeft;  });
  wrap.addEventListener('scroll', () => { top.scrollLeft  = wrap.scrollLeft; });

  // Ajusta a largura da barra ao carregar e quando a janela é redimensionada
  syncWidths();
  window.addEventListener('resize', syncWidths);

  // Observa mudanças no tamanho interno de wrap (ex.: imagens carregando alteram largura)
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(syncWidths); // chama syncWidths sempre que o tamanho muda
    ro.observe(wrap);
  }

  // Delay curto para esperar carregamento de imagens que impactam o scrollWidth
  setTimeout(syncWidths, 100);
}

/* ===================== Chamada inicial (bootstrap) ===================== */
renderBR();            // popula a tabela no carregamento
initTopScrollbarSync(); // ativa a sincronização da barra superior
