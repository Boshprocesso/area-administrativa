import { BeneficioJSON } from "./app/dao/tiposJSON";

export const beneficiosUser2: any = {};
//export const beneficiosUser = Array<BeneficioJSON>();





export interface Produto{
    id: number;
    nome: string;
    foto: string;
    preco: number;
    precoAntigo: number;
    descricao: string;
    grupo: string;
    link: string;
    youtube: string;
}


export const carrinho = Array<Produto>(
{
    id: 1,
    nome: 'Processador AMD Ryzen 5 5600X, Cache 35MB, 3.7GHz (4.6GHz Max Turbo), AM4, Sem Vídeo - 100-100000065BOX',
    foto: "produto1.jpg",
    preco: 2449.90,
    precoAntigo: 2882.24,
    descricao: 'Processador AMD Ryzen 5 5600X Jogue com os melhores 6 núcleos incríveis para quem quer apenas jogar. Imbatível no jogo Obtenha o desempenho de jogos de alta velocidade do melhor processador de desktop do mundo. AMD Ryzen para criadores Codifique mais rápido. Renderize mais rápido. Repita mais rápido. Crie mais e mais rápido com os processadores AMD Ryzen™. Desempenho de próximo nível para arquitetos, engenheiros e profissionais criativos Imagine o que você pode fazer com o processador mais avançado do mundo. Garanta já o seu processador AMD Ryzen 5 5600X no KaBuM!',
    grupo: 'Hardware',
    link: "https://www.kabum.com.br/produto/129451/processador-amd-ryzen-5-5600x-cache-35mb-3-7ghz-4-6ghz-max-turbo-am4-sem-video-100-100000065box",
    youtube: 'https://www.youtube.com/embed/Bj_og4gd71I'
},
{
    id: 2,
    nome: 'Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta - AX4U36008G18I-CBKD45G',
    foto: "produto2.jpg",
    preco: 359.90,
    precoAntigo: 423.41,
    descricao: 'Módulo de memória SPECTRIX D45G DDR4 RGB O SPECTRIX D45G parece e é robusto com um exterior sólido de alumínio semelhante a uma armadura com cumes robustos e desempenho robusto, e defina a iluminação RGB da maneira que você deseja. o SPECTRIX D45G usa chips de IC e PCBs da mais alta qualidade para oferecer estabilidade ideal e desempenho de overclocking de até 3600 MHz.',
    grupo: 'Hardware',
    link: 'https://www.kabum.com.br/produto/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g',
    youtube: ''
}
);

export const produtos = [
    {
        id: 1,
        nome: 'Processador AMD Ryzen 5 5600X, Cache 35MB, 3.7GHz (4.6GHz Max Turbo), AM4, Sem Vídeo - 100-100000065BOX',
        foto: "produto1.jpg",
        preco: 2449.90,
        precoAntigo: 2882.24,
        descricao: 'Processador AMD Ryzen 5 5600X Jogue com os melhores 6 núcleos incríveis para quem quer apenas jogar. Imbatível no jogo Obtenha o desempenho de jogos de alta velocidade do melhor processador de desktop do mundo. AMD Ryzen para criadores Codifique mais rápido. Renderize mais rápido. Repita mais rápido. Crie mais e mais rápido com os processadores AMD Ryzen™. Desempenho de próximo nível para arquitetos, engenheiros e profissionais criativos Imagine o que você pode fazer com o processador mais avançado do mundo. Garanta já o seu processador AMD Ryzen 5 5600X no KaBuM!',
        grupo: 'Hardware',
        link: "https://www.kabum.com.br/produto/129451/processador-amd-ryzen-5-5600x-cache-35mb-3-7ghz-4-6ghz-max-turbo-am4-sem-video-100-100000065box",
        youtube: 'https://www.youtube.com/embed/Bj_og4gd71I'
    },
    {
        id: 2,
        nome: 'Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta - AX4U36008G18I-CBKD45G',
        foto: "produto2.jpg",
        preco: 359.90,
        precoAntigo: 423.41,
        descricao: 'Módulo de memória SPECTRIX D45G DDR4 RGB O SPECTRIX D45G parece e é robusto com um exterior sólido de alumínio semelhante a uma armadura com cumes robustos e desempenho robusto, e defina a iluminação RGB da maneira que você deseja. o SPECTRIX D45G usa chips de IC e PCBs da mais alta qualidade para oferecer estabilidade ideal e desempenho de overclocking de até 3600 MHz.',
        grupo: 'Hardware',
        link: 'https://www.kabum.com.br/produto/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g',
        youtube: ''
    },
    {
        id: 3,
        nome: 'SSD Kingston NV1 500GB,M.2 2280 NVMe, Leitura: 2100MB/s e Gravação: 1700MB/s - SNVS/500G',
        foto: "produto3.jpg",
        preco: 469.90,
        precoAntigo: 552.82,
        descricao: 'SSD Kingston NV1 500GB M.2 Desempenho eficiente para notebooks e sistemas mais finos O SSD NV1 NVMe ™ PCIe da Kingston é uma solução de armazenamento substancial que oferece velocidade de leitura/gravação de até 2.100/1.700MB/s, o que é 3 a 4 vezes mais rápido do que um SSD baseado em SATA e 35 vezes mais rápido do que um disco rígido tradicional. O NV1 funciona com menor potência, menor aquecimento e tempo de carregamento mais rápido. O eficiente desempenho e design M.2 2280 (22x80mm) de um lado torna o NV1 ideal para notebooks finos e sistemas com espaço limitado. Disponível em capacidades de 500GB a 2TB para lhe oferecer todo o espaço que você precisa para seus aplicativos, documentos, fotos, vídeos e muito mais. Garanta já o seu SSD Kingston NV1 500GB M.2 no KaBuM!',
        grupo: 'Hardware',
        link: 'https://www.kabum.com.br/produto/155408/ssd-kingston-nv1-500gb-m-2-2280-nvme-leitura-2100mb-s-e-gravacao-1700mb-s-snvs-500g',
        youtube: ''
    },
    {
        id: 4,
        nome: 'SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G',
        foto: "produto4.jpg",
        preco: 307.90,
        precoAntigo: 362.24,
        descricao: 'SSD Kingston A400 240GB Sata Todo o espaço que você precisa A unidade de estado sólido A400 da Kingston aumenta drasticamente a resposta do seu computador com tempos incríveis de inicialização, carregamento e transferência, comparados a discos rígidos mecânicos. Reforçado com uma controladora de última geração para velocidades de leitura e gravação de até 500MB/s e 450MB/s¹, este SSD é 10x mais rápido do que um disco rígido tradicional para melhor desempenho, resposta ultrarrápida em multitarefas e um computador mais rápido de modo geral. Também mais confiável e durável do que um disco rígido, o A400 é feito com memória Flash. Não há partes móveis, com menor probabilidade de falhas do que um disco rígido mecânico. Também é mais frio e mais silencioso e sua resistência a choques e vibração torna-o ideal para notebooks e outros dispositivos móveis de computação. O A400 está disponível em diversas capacidades de 120GB a 480GB oferecendo todo o espaço que você precisa para aplicativos, vídeos, fotos e outros documentos importantes. Você também pode substituir seu disco rígido ou um SSD menor por uma unidade grande o suficiente para conter todos os seus arquivos. SSD confiável e durável para melhor desempenho do computador e respostas ultrarrápidas em multitarefas. Garanta já o seu SSD Kingston A400 240GB Sata no KaBuM!',
        grupo: 'Hardware',
        link: 'https://www.kabum.com.br/produto/85197/ssd-kingston-a400-240gb-sata-leitura-500mb-s-gravacao-350mb-s-sa400s37-240g',
        youtube: 'https://www.youtube.com/embed/qLEYy3XiN3o'
    },
    {
        id: 5,
        nome: 'Jogo Ghost of Tsushima PS4',
        foto: "game1.jpg",
        preco: 175.91,
        precoAntigo: 219.99,
        descricao: 'No final do século XIII, o Império Mongol destruiu nações inteiras em sua campanha para conquistar o Oriente. A ilha de Tsushima é tudo o que resta entre o Japão e uma enorme invasão mongol liderada por um general ardiloso e implacável, Khotun Khan. Em meio à ilha devastada pela primeira onda de ataques mongóis está Jin Sakai, guerreiro samurai e um dos últimos sobreviventes de seu clã. Ele está decidido a fazer o que for preciso, custe o que custar, para proteger seu povo e recuperar seu lar. Jin deve deixar de lado as tradições que o moldaram como guerreiro e forjar um novo caminho, o do Fantasma, travando uma guerra atípica pela liberdade de Tsushima. Aventure-se além dos campos de batalha e vivencie o Japão feudal de uma forma nunca antes vista. Neste jogo de ação e aventura em mundo aberto, trilhe por paisagens vastas e terrenos amplos, encontrando personagens riquíssimos, descobrindo monumentos antigos e revelando toda a beleza oculta de Tsushima. Explore regiões meticulosamente criadas que mostram toda a diversidade dessa enorme ilha. De campos ondulantes e santuários tranquilos a florestas ancestrais, vilas e montanhas com paisagens de brilhar os olhos. Encontre paz na quietude serena da natureza e alívio nos momentos partilhados com as pessoas que ajuda ao longo de sua jornada.',
        grupo: 'Games',
        link: "https://www.kabum.com.br/produto/112350/jogo-ghost-of-tsushima-ps4",
        youtube: 'https://www.youtube.com/embed/5IfovBU1wcQ'
    },
    {
        id: 6,
        nome: 'Jogo The Last Of Us Part II PS4',
        foto: "game2.jpg",
        preco: 99.90,
        precoAntigo: 199.44,
        descricao: 'Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações. Uma história complexa e emocionante. Vivencie os conflitos morais cada vez maiores criados pela busca implacável de Ellie por vingança. O ciclo de violência deixado em seu caminho desafiará suas noções de certo ou errado, bem ou mal e herói ou vilão. Um mundo belo, mas perigoso. Embarque na jornada de Ellie, levando-a das montanhas e florestas tranquilas de Jackson até as ruínas exuberantes e cobertas pela vegetação da área metropolitana de Seattle. Encontre novos grupos de sobreviventes, ambientes desconhecidos e traiçoeiros e evoluções terríveis dos infectados. Criados pela versão mais recente do mecanismo da Naughty Dog, o mundo e os personagens mortais estão mais realistas e meticulosamente detalhados do que nunca. Partida tensa e alucinante de ação e sobrevivência. Os sistemas de partida novos e avançados atendem aos desafios de vida ou morte da jornada de Ellie por um mundo hostil. Vivencie sua batalha alucinante pela sobrevivência através de recursos aprimorados como combate corpo a corpo de alta intensidade, movimento fluido e ações furtivas dinâmicas. Uma ampla variedade de armas, itens de criação, habilidades e atualizações possibilitam que você personalize as habilidades de Ellie de acordo com seu estilo de jogo.',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/107331/jogo-the-last-of-us-part-ii-ps4',
        youtube: 'https://www.youtube.com/embed/f2CBQzHxF8s'
    },
    {
        id: 7,
        nome: 'Jogo Marvel´s Spider-Man: Miles Morales PS5',
        foto: "game3.jpg",
        preco: 131.91,
        precoAntigo: 149.90,
        descricao: "Marvels Spider-Man: Miles Morales Edição Ultimate Seja mais. Seja você mesmo. Acompanhe a trajetória de Miles Morales enquanto ele aprende a dominar poderes incríveis e explosivos para se tornar o novo Spider-Man. Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man. Mas quando uma violenta disputa de forças ameaça destruir sua vizinhança, o aspirante a herói percebe que com grandes poderes também vêm grandes responsabilidades. Para salvar a Nova York da Marvel, Miles deve reconhecer e assumir o título de Spider-Man. Garanta o seu aqui no KaBuM!",
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/128369/jogo-marvels-spider-man-miles-morales-ps5',
        youtube: ''
    },
    {
        id: 8,
        nome: 'Jogo Red Dead Redemption 2 PS4',
        foto: "game4.jpg",
        preco: 129.90,
        precoAntigo: 219.90,
        descricao: 'Red Dead Redemption 2 Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou. Dos criadores de Grand Theft Auto V e Red Dead Redemption, Red Dead Redemption 2 é uma história épica sobre a vida nos Estados Unidos no alvorecer dos tempos modernos. Garanta já o seu no KaBuM!',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/98091/jogo-red-dead-redemption-2-ps4',
        youtube: 'https://www.youtube.com/embed/me2UUl9DZMg'
    },
    {
        id: 9,
        nome: 'Jogo Dark Souls III The Fire Fades Edition PS4',
        foto: "game5.jpg",
        preco: 99.66,
        precoAntigo: 104.91,
        descricao: 'Jogo Dark Souls III The Fire Fades Edition Enquanto as chamas se apagam e o mundo fica em ruínas, prepare-se mais uma vez para Abraçar a Escuridão! DARK SOULS III: THE FIRE FADES EDITION Vencedor do 2017 DICE Awards de “Jogo de RPG/Multiplayer Massivo do Ano” e do Golden Joystick Awards de 2016 de “Jogo Definitivo do Ano”, Dark Souls III continua rompendo barreiras com o mais novo capítulo da aclamada e definitiva série do diretor Hidetaka Miyazaki. Os jogadores serão submersos num mundo de atmosfera épica e sombria com inimigos colossais, ambientes expansivos, e gameplay de combate intenso e desafiador. Ação de Combate Intensa O Gameplay desafiador e definitivo. // Ação de combate diversificado permite aos jogadores criarem seu próprio estilo. Junte-se a outros jogadores para se ajudarem ou testar suas habilidades nas batalhas PvP Todos os mapas PvP desbloqueados e acessíveis. // Funcionalidade do matchmaking online melhorada. A experiência completa de Dark Souls III em um só disco Inclui o premiado jogo Dark Souls III mais os dois DLCs completos: Ashes of Ariandel e The Ringed City Garanta o seu no KaBuM!',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/88200/jogo-dark-souls-iii-the-fire-fades-edition-ps4',
        youtube: ''
    },
    {
        id: 10,
        nome: 'Jogo God of War Hits PS4',
        foto: "game6.jpg",
        preco: 49.90,
        precoAntigo: 99.99,
        descricao: 'Jogo Dark Souls III The Fire Fades Edition Enquanto as chamas se apagam e o mundo fica em ruínas, prepare-se mais uma vez para Abraçar a Escuridão! DARK SOULS III: THE FIRE FADES EDITION Vencedor do 2017 DICE Awards de “Jogo de RPG/Multiplayer Massivo do Ano” e do Golden Joystick Awards de 2016 de “Jogo Definitivo do Ano”, Dark Souls III continua rompendo barreiras com o mais novo capítulo da aclamada e definitiva série do diretor Hidetaka Miyazaki. Os jogadores serão submersos num mundo de atmosfera épica e sombria com inimigos colossais, ambientes expansivos, e gameplay de combate intenso e desafiador. Ação de Combate Intensa O Gameplay desafiador e definitivo. // Ação de combate diversificado permite aos jogadores criarem seu próprio estilo. Junte-se a outros jogadores para se ajudarem ou testar suas habilidades nas batalhas PvP Todos os mapas PvP desbloqueados e acessíveis. // Funcionalidade do matchmaking online melhorada. A experiência completa de Dark Souls III em um só disco Inclui o premiado jogo Dark Souls III mais os dois DLCs completos: Ashes of Ariandel e The Ringed City Garanta o seu no KaBuM!',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/107474/jogo-god-of-war-hits-ps4',
        youtube: 'https://www.youtube.com/embed/T_Srfdv6BZA'
    },
    {
        id: 11,
        nome: 'Jogo GTA V Premium Online Edition PS4',
        foto: "game7.jpg",
        preco: 129.9,
        precoAntigo: 178.46,
        descricao: 'GTA V Premium Online Edition PS4 GRAND THEFT AUTO V! Entre nas vidas de três criminosos muito diferentes, Michael, Franklin e Trevor, enquanto eles arriscam tudo em uma série de assaltos ousados que podem garantir o resto de suas vidas. Explore o deslumbrante mundo de Los Santos e Blaine County na experiência definitiva de Grand Theft Auto V, apresentando amplas atualizações e melhorias técnicas tanto para jogadores novos quanto para os que estão retornando. Além de distâncias maiores de renderização e melhor resolução, os jogadores podem esperar diversas adições e melhorias. O Grand Theft Auto V Premium Edition Inclui o Modo História completo do Grand Theft Auto V, acesso gratuito ao mundo em constante evolução do Grand Theft Auto Online e todo o conteúdo e melhorias de jogo já lançados, incluindo O Golpe do Juízo Final, Tráfico de Armas, Acima da Lei, Motoqueiros e muito mais. Você também recebe o Kit Inicial de Esquema Criminal, a maneira mais rápida de começar seu império do crime no Grand Theft Auto Online. Garanta o seu no KaBuM!',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/96697/jogo-gta-v-premium-online-edition-ps4',
        youtube: ''
    },
    {
        id: 12,
        nome: 'Jogo Marvel´s Guardiões da Galaxia, PS4',
        foto: "game8.jpg",
        preco: 219.90,
        precoAntigo: 269.90,
        descricao: 'Nesta história original dos Guardiões da Galáxia da Marvel, você vai se deparar com novos seres poderosos e personagens emblemáticos, todos envolvidos em uma luta pelo destino da galáxia. É hora de mostrar ao universo do que você é capaz. Funcionalidades do Jogo: • LIDERE OS GUARDIÕES DA GALÁXIA: Você joga no papel do Senhor das Estrelas, e tudo é permitido com seu estilo de combate ousado, de pistolas elementais a botas a jato e ataques coletivos. • UMA NOVA HISTÓRIA: Seu recém-formado grupo de desajustados lendários está determinado a salvar o universo nesta nova e fiel versão dos Guardiões da Galáxia. Você desencadeará uma série de eventos catastróficos, e com isso embarcará em uma viagem por mundos extraordinários habitados por personagens emblemáticos e originais da Marvel. Curta a trilha sonora dos anos 80 e se prepare para detonar. • DE DESAJUSTADOS A SUPER-HERÓIS: Você é a única coisa que mantém os imprevisíveis Guardiões unidos, então é bom pegar o jeito desse negócio de liderança o quanto antes.',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/238166/jogo-marvels-guardioes-da-galaxia-ps4',
        youtube: ''
    },
    {
        id: 13,
        nome: 'Jogo FIFA 22 BR, PS4',
        foto: "game9.jpg",
        preco: 233.91,
        precoAntigo: 349.90,
        descricao: '- Viva seus sonhos no futebol no Modo Carreira do FIFA 22 enquanto você cria um clube e o lidera  de  candidatos  ao  rebaixamento  para  gigantes  globais,  além  de  aproveitar  uma experiência  reformulada  na  Carreira  de  Jogador,  que  dá  a  você  mais  formas  de  progredir, conquistar e mergulhar de cabeça na jornada de Craque Virtual pelo jogo. Mais informações sobre os novos recursos do Modo Carreira disponíveis em breve. - Monte  o  seu  time  dos  sonhos  e  dispute  no  modo  mais  popular  do  FIFA,  com  milhares  de jogadores para adicionar ao seu clube e inúmeras maneiras de personalizar seu clube dentro e fora dos gramados. Independentemente se você deseja jogar solo no Squad Battles, junto no  Co-Op  do  FUT,  online  no  Division  Rivals  ou  contra  a  elite  no  FUT  Champions,  o  FIFA Ultimate Team™ (FUT) conecta você ao mundo do futebol ao longo de toda a temporada com uma variedade de conteúdo influenciado por desempenhos e competições do mundo real –incluindo a UEFA Champions League, UEFA Europa League e CONMEBOL Libertadores.O FIFA 22 Ultimate Team redesenha a forma como você disputa no Division Rivals e no FUT Champions para criar uma maneira mais acessível de testar suas habilidades e seu progresso contra outras pessoas, oferece ainda mais maneiras para deixar o seu clube com a sua cara, com novas opções de personalização dentro e fora do campo, e apresenta os Heróis do FUT –o retorno de alguns dos jogadores mais adorados do futebol.',
        grupo: 'Games',
        link: 'https://www.kabum.com.br/produto/211089/jogo-fifa-22-br-ps4',
        youtube: 'https://www.youtube.com/embed/iXdK9tTM1xY'
    }
];