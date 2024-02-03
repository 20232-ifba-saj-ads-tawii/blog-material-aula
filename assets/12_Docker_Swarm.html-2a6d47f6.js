import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,a as e,b as n,d as s,e as c}from"./app-e95056ff.js";const t={},m=c('<h1 id="docker-swarm" tabindex="-1"><a class="header-anchor" href="#docker-swarm" aria-hidden="true">#</a> Docker Swarm</h1><p>As versões atuais do Docker incluem o modo Swarm para gerenciamento nativo de um cluster dos Docker Engines chamados de Swarm. Use o Docker CLI para criar um Swarm, implantar serviços de aplicativos para um Swarm e gerenciar o comportamento do Swarm.</p><h2 id="destaques-dos-recursos" tabindex="-1"><a class="header-anchor" href="#destaques-dos-recursos" aria-hidden="true">#</a> Destaques dos recursos</h2><h3 id="gerenciamento-de-cluster-integrado-ao-docker-engine" tabindex="-1"><a class="header-anchor" href="#gerenciamento-de-cluster-integrado-ao-docker-engine" aria-hidden="true">#</a> Gerenciamento de cluster integrado ao Docker Engine</h3><p>Use a CLI do Docker Engine para criar um Swarm de Docker Engines onde você pode implantar aplicativos Serviços. Você não precisa de software de orquestração adicional para criar ou gerenciar um Swarm.</p><h3 id="design-descentralizado" tabindex="-1"><a class="header-anchor" href="#design-descentralizado" aria-hidden="true">#</a> Design descentralizado</h3><p>Em vez de lidar com a diferenciação entre funções de nós no tempo de implantação, o Docker Engine lida com qualquer especialização em tempo de execução. Você pode implementar ambos os tipos de nós, gerentes e trabalhadores, usando o Docker Engine. Isso significa que você pode construir um Swarm inteiro a partir de um único disco imagem.</p><h3 id="modelo-de-servico-declarativo" tabindex="-1"><a class="header-anchor" href="#modelo-de-servico-declarativo" aria-hidden="true">#</a> Modelo de serviço declarativo</h3><p>Docker Engine usa uma abordagem declarativa para permitem definir o estado desejado dos vários serviços em seu aplicativo pilha. Por exemplo, você pode descrever um aplicativo composto por uma interface web no serviço final com serviços de enfileiramento de mensagens e back-end de banco de dados.</p><h3 id="dimensionamento-scaling" tabindex="-1"><a class="header-anchor" href="#dimensionamento-scaling" aria-hidden="true">#</a> Dimensionamento (Scaling)</h3><p>Para cada serviço, você pode declarar o número de tarefas que deseja correr. Quando você aumenta ou diminui, o gerenciador de Swarm se adapta automaticamente adicionar ou remover tarefas para manter o estado desejado.</p><h3 id="reconciliacao-de-estado-desejada" tabindex="-1"><a class="header-anchor" href="#reconciliacao-de-estado-desejada" aria-hidden="true">#</a> Reconciliação de estado desejada</h3><p>O nó gerenciador de Swarm monitora constantemente o estado do cluster e reconcilia quaisquer diferenças entre o estado real e o seu estado desejado expresso. Por exemplo, se você configurar um serviço para executar 10 réplicas de um contêiner e uma máquina de trabalho hospedando duas dessas réplicas falha, o gerente cria duas novas réplicas para substituir as réplicas que caiu. O gerenciador de Swarm atribui as novas réplicas aos trabalhadores que estão funcionando e disponível.</p><h3 id="rede-multi-host" tabindex="-1"><a class="header-anchor" href="#rede-multi-host" aria-hidden="true">#</a> Rede multi-host</h3><p>Você pode especificar uma rede de sobreposição para o seu Serviços. O gerenciador de Swarm atribui endereços automaticamente aos contêineres na rede de sobreposição quando inicializa ou atualiza o aplicativo.</p><p>###Descoberta de serviço</p><p>Os nós gerenciadores de Swarm atribuem a cada serviço do Swarm um nome DNS exclusivo e balanceamento de carga executando contêineres. Você pode consultar cada contêiner em execução no Swarm por meio de um servidor DNS incorporado no Swarm.</p><h3 id="balanceamento-de-carga" tabindex="-1"><a class="header-anchor" href="#balanceamento-de-carga" aria-hidden="true">#</a> Balanceamento de carga</h3><p>Você pode expor as portas para serviços a um balanceador de carga externo. Internamente, o Swarm permite especificar como distribuir contêineres de serviço entre nós.</p><h3 id="seguro-por-padrao" tabindex="-1"><a class="header-anchor" href="#seguro-por-padrao" aria-hidden="true">#</a> Seguro por padrão</h3><p>Cada nó no Swarm impõe TLS mútuo autenticação e criptografia para proteger as comunicações entre ele e todos outros nós Você tem a opção de usar certificados raiz autoassinados ou certificados de uma CA raiz personalizada.</p><h3 id="atualizacoes-continuas" tabindex="-1"><a class="header-anchor" href="#atualizacoes-continuas" aria-hidden="true">#</a> Atualizações contínuas</h3><p>No momento da implementação, você pode aplicar atualizações de serviço aos nós incrementalmente. O gerenciador de Swarm permite controlar o atraso entre o serviço implantação em diferentes conjuntos de nós. Se algo der errado, você pode reverter para uma versão anterior do serviço.</p>',23),u={href:"https://docs.docker.com/compose/gettingstarted/",target:"_blank",rel:"noopener noreferrer"};function p(l,h){const a=r("ExternalLinkIcon");return i(),d("div",null,[m,e("p",null,[e("a",u,[n("Tutorial"),s(a)])])])}const f=o(t,[["render",p],["__file","12_Docker_Swarm.html.vue"]]);export{f as default};
