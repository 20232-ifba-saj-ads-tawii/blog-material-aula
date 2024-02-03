import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as i,e as r,a as e}from"./app-70e0fb3f.js";const n={},t=r('<h1 id="trabalho-semestral" tabindex="-1"><a class="header-anchor" href="#trabalho-semestral" aria-hidden="true">#</a> Trabalho Semestral</h1><p>Configuração de Ambiente Docker Swarm com Balanceamento de Carga e Redundância</p><h2 id="objetivo" tabindex="-1"><a class="header-anchor" href="#objetivo" aria-hidden="true">#</a> Objetivo</h2><p>O objetivo deste trabalho é desenvolver habilidades práticas em DevOps, implementando um ambiente robusto usando Docker Swarm para hospedar uma aplicação web com balanceamento de carga, um banco de dados com redundância, e garantir a continuidade dos serviços mesmo quando um trabalhador do Swarm falhar.</p><h2 id="passos-do-projeto" tabindex="-1"><a class="header-anchor" href="#passos-do-projeto" aria-hidden="true">#</a> Passos do Projeto</h2><ol><li><p><strong>Configuração Inicial:</strong></p><ul><li>Configure um cluster Docker Swarm com um nó de gerenciamento e pelo menos dois nós de trabalho.</li><li>Instale o Docker e o Docker Compose em todos os nós.</li></ul></li><li><p><strong>Aplicação Web:</strong></p><ul><li>Escolha uma aplicação web de sua preferência (pode ser simples, como uma página HTML, ou mais complexa, dependendo do nível de dificuldade desejado).</li><li>Dockerize a aplicação para que possa ser facilmente implantada no Swarm.</li></ul></li><li><p><strong>Balanceamento de Carga:</strong></p><ul><li>Utilize o Docker Swarm para criar um serviço que execute a aplicação web.</li><li>Configure o balanceamento de carga para distribuir as solicitações entre os nós de trabalho.</li><li>Demonstre que o balanceamento de carga está funcionando corretamente.</li></ul></li><li><p><strong>Banco de Dados com Redundância:</strong></p><ul><li>Escolha um banco de dados (por exemplo, MySQL ou PostgreSQL).</li><li>Configure um serviço de banco de dados no Swarm.</li><li>Garanta a redundância configurando replicação ou clustering para o banco de dados.</li><li>Teste a falha de um nó de trabalho para garantir que o banco de dados continue operando.</li></ul></li><li><p><strong>Serviço Jenkins:</strong></p><ul><li>Configure um serviço Jenkins no Docker Swarm.</li><li>Crie pipelines de integração contínua/desdobramento contínuo (CI/CD) para testar a aplicação web e o banco de dados.</li><li>Certifique-se de que os testes são executados automaticamente sempre que há uma alteração no código.</li></ul></li><li><p><strong>Demonstração de Continuidade de Serviço:</strong></p><ul><li>Simule a falha de um nó de trabalho no Swarm.</li><li>Mostre que a aplicação web continua funcionando e que o balanceamento de carga ajusta automaticamente o tráfego para os nós disponíveis.</li><li>Certifique-se de que o banco de dados mantém a integridade e disponibilidade após a falha do nó.</li></ul></li></ol><h2 id="relatorio-final" tabindex="-1"><a class="header-anchor" href="#relatorio-final" aria-hidden="true">#</a> Relatório Final:</h2><p>Elabore um relatório que inclua a arquitetura do ambiente, os arquivos de configuração do Docker Compose, os comandos utilizados, e os resultados dos testes. Descreva as dificuldades encontradas e as soluções aplicadas.</p><h3 id="apresentacao" tabindex="-1"><a class="header-anchor" href="#apresentacao" aria-hidden="true">#</a> Apresentação:</h3><p>Ao final do trabalho, faça uma documentação no github utilizando o markdown demonstrando o ambiente em funcionamento com prints da tela e os testes realizados.</p><p>Este projeto aborda aspectos essenciais de DevOps, como automação, integração contínua, orquestração de contêineres, e garantia de disponibilidade e redundância.</p><h2 id="videos" tabindex="-1"><a class="header-anchor" href="#videos" aria-hidden="true">#</a> Videos</h2>',12),s=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eMDWA2ey0zY?si=XP6FoO-9Wj7r1Es_",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),d=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ujAbn-oGR9I?si=K4PRqntZq_4ueg8B",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),l=[t,s,d];function c(u,m){return o(),i("div",null,l)}const b=a(n,[["render",c],["__file","13_Trabalho_Semestral.html.vue"]]);export{b as default};
