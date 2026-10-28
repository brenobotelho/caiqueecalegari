CAÍQUE & CALEGARI — SITE ESTÁTICO

Este projeto usa apenas HTML, CSS, JavaScript e imagens. Não requer Node.js, npm, build, servidor de aplicação ou função serverless para funcionar.

COMO VISUALIZAR
Abra index.html no navegador. Um servidor estático do editor, como Live Server, também funciona e facilita ver as mudanças enquanto você edita.

ESTRUTURA
- index.html: página principal, incluindo Hero com três fotos, chamada para casamentos, seção Contrate e agenda demonstrativa.
- casamentos.html e casamentos.css: apresentação dos shows para casamentos.
- acustico-premium.html, acustico-com-banda.html, banda-completa.html: páginas dos formatos de show.
- styles.css e shows.css: estilos.
- script.js e shows.js: interações da página e abertura dos vídeos.
- img/: imagens locais.

AGENDA
A agenda mostra três apresentações fictícias de 2027 para demonstrar o visual. Elas estão marcadas como exemplos e não devem ser divulgadas como datas confirmadas. Não há conexão com Google Sheets, API ou painel administrativo. Depois da reunião, será possível escolher entre editar as datas manualmente no site ou criar uma área de administração; nenhuma das duas opções está implementada agora.

HERO E CASAMENTOS
O Hero alterna entre img/dupla2.png, img/sobre1.jpeg e img/sobre2.jpeg, com botões para voltar ou avançar. A troca automática fica desativada para visitantes que preferem movimento reduzido. Para substituir ou acrescentar fotos, altere os blocos .hero-slide em index.html.
A página casamentos.html apresenta os três formatos existentes para uma celebração e abre o WhatsApp com uma mensagem inicial sobre casamento. As fotos e o vídeo nela são materiais gerais de divulgação da dupla, não registros de casamentos.

FORMULÁRIO DE CONTATO
O formulário da página principal continua demonstrativo e não envia solicitações. Os botões de WhatsApp funcionam como canal de contato.

PUBLICAÇÃO NO GITHUB + VERCEL
Coloque estes arquivos na raiz de um repositório GitHub. Ao importar na Vercel, escolha o preset Other e a pasta do projeto como Root Directory. Não configure Build Command nem Output Directory personalizado; o index.html está na raiz. Não execute npm start na Vercel.

Os links de Spotify, YouTube, WhatsApp, Instagram e as fontes do Google continuam externos ao projeto.
