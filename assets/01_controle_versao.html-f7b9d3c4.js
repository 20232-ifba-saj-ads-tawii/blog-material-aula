import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as t,d as m,a as e,b as o,e as r,f as d}from"./app-cfba6c42.js";const u={},c=d('<h1 id="controle-de-versao" tabindex="-1"><a class="header-anchor" href="#controle-de-versao" aria-hidden="true">#</a> Controle de Versão</h1><p>Vamos imaginar que você é um programador nos primeiros passos na profissão e quer escrever seu código.</p><ul><li>Você abre um editor de textos qualquer e começa a criar arquivos e vai salvando em algum diretório.</li><li>Você vai escrever em cima do seu código de ontem, salvar e depois descobrir que fez errado e agora perdeu a versão de ontem.</li><li>Você vai renomear arquivos, sair apagando, e uma hora vai apagar um arquivo que não devia.</li><li>Depois de apagar coisas por acidente algumas vezes, você vai começar a duplicar os arquivos antes de editar.</li><li>Vai começar a ficar com versões diferentes do mesmo arquivo no diretório (&quot;_atual&quot;, &quot;_atual_novo&quot;, &quot;_atual_novo_novo&quot;, &quot;_final&quot;, &quot;_final2&quot;).</li></ul><p>Daí vem o segundo problema, você precisa que outro desenvolvedor trabalhe no mesmo projeto. Como resolver?</p><p>Uma das maneiras de fazer isso é colocar o diretório do projeto em alguma pasta compartilhada na rede local.</p><ul><li>Os dois abrirem o mesmo arquivo pra editar.</li><li>Você edita e salva primeiro.</li><li>O segundo cara edita a parte dele e salva por cima!</li></ul><p>E pronto, você acabou de perder o que tava fazendo.</p><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="a-necessidade-de-controle-de-versao" tabindex="-1"><a class="header-anchor" href="#a-necessidade-de-controle-de-versao" aria-hidden="true">#</a> A necessidade de controle de versão</h2><p>À medida que a programação de computadores se tornou mais complexa e colaborativa, surgiu a necessidade de um sistema mais formal de controle de versão. Os programadores perceberam que era crucial manter um histórico de alterações no código fonte para facilitar a colaboração e solucionar problemas.</p><h2 id="conceito-controle-de-versao" tabindex="-1"><a class="header-anchor" href="#conceito-controle-de-versao" aria-hidden="true">#</a> Conceito Controle de Versão:</h2><p>O controle de versão refere-se ao gerenciamento e rastreamento de alterações feitas em um conjunto de arquivos ao longo do tempo. Ele permite que os desenvolvedores acompanhem as modificações feitas em seu código-fonte, arquivos de configuração, documentos e outros ativos do projeto. O controle de versão é essencial para o trabalho colaborativo e o desenvolvimento de software, pois permite que várias pessoas trabalhem no mesmo projeto, façam alterações independentes em arquivos diferentes e depois combinem essas alterações de forma controlada. Os sistemas de controle de versão, como Git, Subversion e Mercurial, são projetados especificamente para gerenciar e controlar as versões de arquivos.</p><h3 id="principais-vantagens" tabindex="-1"><a class="header-anchor" href="#principais-vantagens" aria-hidden="true">#</a> Principais vantagens</h3><p><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>As principais vantagens de se utilizar um sistema de controle de versão para rastrear as alterações feitas durante o desenvolvimento de software ou o desenvolvimento de um documento de texto qualquer são:</p><ul><li><strong>Controle do histórico</strong>: facilidade em desfazer e possibilidade de analisar o histórico do desenvolvimento, como também facilidade no resgate de versões mais antigas e estáveis. A maioria das implementações permitem analisar as alterações com detalhes, desde a primeira versão até a última.</li><li><strong>Trabalho em equipe</strong>: um sistema de controle de versão permite que diversas pessoas trabalhem sobre o mesmo conjunto de documentos ao mesmo tempo e minimiza o desgaste provocado por problemas com conflitos de edições. É possível que a implementação também tenha um controle sofisticado de acesso para cada usuário ou grupo de usuários.</li><li><strong>Marcação e resgate de versões estáveis</strong>: a maioria dos sistemas permite marcar onde é que o documento estava com uma versão estável, podendo ser facilmente resgatado no futuro.</li><li><strong>Ramificação de projeto</strong>: a maioria das implementações possibilita a divisão do projeto em várias linhas de desenvolvimento, que podem ser trabalhadas paralelamente, sem que uma interfira na outra.</li><li><strong>Segurança</strong>: Cada software de controle de versão usa mecanismos para evitar qualquer tipo de invasão de agentes infecciosos nos arquivos. Além do mais, somente usuários com permissão poderão mexer no código.</li><li><strong>Rastreabilidade</strong>: Com a necessidade de sabermos o local, o estado e a qualidade de um arquivo; o controle de versão traz todos esses requisitos de forma que o usuário possa se embasar do arquivo que deseja utilizar.</li><li><strong>Organização</strong>: Alguns softwares disponibilizam uma interface visual onde podem ser vistos todos os arquivos controlados, desde a origem até o projeto por completo.</li><li><strong>Confiança</strong>: O uso de repositórios remotos (na nuvem) ajuda a não perder arquivos por eventos inesperados. Além disso, e possível fazer novos projetos sem danificar o desenvolvimento do atual.</li></ul><h2 id="sistemas-de-controle-de-versao-centralizado" tabindex="-1"><a class="header-anchor" href="#sistemas-de-controle-de-versao-centralizado" aria-hidden="true">#</a> Sistemas de controle de versão centralizado</h2><p>No início da programação de software, os desenvolvedores costumavam usar métodos simples para controlar suas versões localmente. Isso envolvia fazer cópias de segurança manuais dos arquivos de código-fonte em diretórios diferentes ou usando ferramentas básicas, como a criação de arquivos com diferentes extensões (por exemplo, &quot;script_v1.sh&quot;, &quot;script_v2.sh&quot;, etc.).</p><h3 id="sccs-source-code-control-system" tabindex="-1"><a class="header-anchor" href="#sccs-source-code-control-system" aria-hidden="true">#</a> SCCS (Source Code Control System)</h3><p>Em meados dos anos 70, o SCCS foi o primeiro sistema de controle de versão criado. Ele permitia aos desenvolvedores criar um repositório centralizado onde podiam armazenar e controlar as alterações em seus arquivos de código-fonte. No entanto, o SCCS tinha suas limitações e só funcionava em sistemas UNIX.</p><h3 id="rcs-revision-control-system" tabindex="-1"><a class="header-anchor" href="#rcs-revision-control-system" aria-hidden="true">#</a> RCS (Revision Control System)</h3><p>Na década de 1980, o RCS foi desenvolvido como uma evolução do SCCS. Ele introduziu recursos adicionais, como a capacidade de mesclar alterações de diferentes desenvolvedores e rastrear as modificações com mais precisão. O RCS ainda é usado em alguns ambientes Unix, mas foi substituído por sistemas mais avançados em muitos contextos.</p><h3 id="cvs-concurrent-versions-system" tabindex="-1"><a class="header-anchor" href="#cvs-concurrent-versions-system" aria-hidden="true">#</a> CVS (Concurrent Versions System)</h3><p>Lançado em 1986, o CVS foi o primeiro sistema de controle de versão a permitir a colaboração em tempo real entre os desenvolvedores. Ele introduziu a noção de um repositório centralizado acessado por várias pessoas, facilitando a mesclagem de alterações e o acompanhamento do histórico do projeto. O CVS foi amplamente adotado no mundo do software livre e de código aberto.</p><figure><img src="https://www.plantuml.com/plantuml/svg/dPB1QeGm48RlUOh1dfLEl7MXh1dO5oZqKde8PhehkA5e2eNITszY4jT8J-iXcV_tct-2yJWxFRclwoW-Xf6XYvkA6mdHGTEyNGPZsBvxMssbVprnxxGz1_Rr1Nu4-2S68UWPgWwRnmfkjegssjaKRThP7QufMC73fnxvF37RmpXOVhgLZT7pXSt1yRUBzdRYEXBBaUjCB4yeCozBNcPUtd-MDcUtTsJqmzI7ht9QGg3Qcke_amfpMVozR2yK5rCL9g58w8xDy8xEEDJFlYSoeKxX56h2FBqEkMk-LoUHpr0NCuAIISb5jKcrGQKs2Y2bDiAeP5AXZJpuAyIHhV5_-Hy0" alt="uml diagram" loading="lazy"><figcaption>Representação do versionamento com CVS</figcaption></figure><h3 id="svn-subversion" tabindex="-1"><a class="header-anchor" href="#svn-subversion" aria-hidden="true">#</a> SVN (Subversion)</h3><p>O SVN surgiu no início dos anos 2000 como uma alternativa ao CVS. Ele corrigiu algumas das deficiências do CVS e ofereceu recursos mais avançados, como versionamento de diretório, suporte a arquivos binários e a capacidade de renomear e mover arquivos sem perder o histórico. O SVN também tinha um modelo de repositório centralizado.</p><figure><img src="https://www.plantuml.com/plantuml/svg/RP713e8m38RlVOg6EsIRTmFRtOCcN8m78bD940tWoVZkTbI14hXq-zhi_rBIhY_Q_dMluLBL7ZCkbei3o319ZhUgB7rp8cpdLsgt_jmNpPLc3_bkxv-FNECRa3v-JcFHOPJfH4KuOSlOBh1Zx1WFd1wOv-i1MW6TXa_mZBSqJO9KQSw5IgqLGoCDHqKj5KT7FSaiR3XPOnnQOCCXm9NCZSmq_qmZCjM0KUvaNChCmmWFnLjHSYi_EROpuC8XKA2Ha0MfRqhwyLy0" alt="uml diagram" loading="lazy"><figcaption>Representação do versionamento com SVN</figcaption></figure><h3 id="microsoft-sourcesafe" tabindex="-1"><a class="header-anchor" href="#microsoft-sourcesafe" aria-hidden="true">#</a> Microsoft SourceSafe</h3><p>O Microsoft SourceSafe, também conhecido como Visual SourceSafe (VSS), foi um sistema de controle de versão desenvolvido pela Microsoft. Foi lançado pela primeira vez na década de 1990 e foi amplamente utilizado em ambientes de desenvolvimento Windows.</p><p>Um dos problemas mais conhecidos do SourceSafe era sua propensão a corrupção de dados. Muitos desenvolvedores experimentaram problemas de corrupção em seus repositórios SourceSafe ao longo dos anos.</p><p>A Microsoft descontinuou o Visual SourceSafe em 2005, recomendando que os usuários migrem para soluções de controle de versão mais modernas.</p><h3 id="rational-clearcase" tabindex="-1"><a class="header-anchor" href="#rational-clearcase" aria-hidden="true">#</a> Rational ClearCase</h3><p>O Rational ClearCase foi um sistema de controle de versão desenvolvido pela Rational Software, que foi adquirida pela IBM. Ele foi lançado na década de 1990 e é conhecido por suas capacidades avançadas de controle de versão</p><p>Embora o ClearCase fosse poderoso, também era complexo de configurar e administrar. Sua curva de aprendizado era íngreme, e muitas organizações precisavam de especialistas dedicados para gerenciá-lo efetivamente.</p><p>Ao longo dos anos, o ClearCase perdeu popularidade em favor de sistemas mais modernos e fáceis de usar, como o Git. A IBM descontinuou o desenvolvimento ativo do ClearCase, e muitas empresas migraram para soluções mais leves e ágeis.</p><h2 id="sistemas-de-controle-de-versao-distribuidos" tabindex="-1"><a class="header-anchor" href="#sistemas-de-controle-de-versao-distribuidos" aria-hidden="true">#</a> Sistemas de controle de versão distribuídos</h2><p>Os Sistemas de Controle de Versão Distribuídos (SCVs) são uma evolução dos sistemas de controle de versão centralizados, projetados para melhorar a colaboração e a flexibilidade no desenvolvimento de software. Eles operam com um modelo descentralizado, onde cada desenvolvedor possui uma cópia completa do repositório, permitindo o trabalho offline e facilitando a colaboração em equipes distribuídas. Eles revolucionaram a forma como o desenvolvimento de software é realizado.</p><h3 id="mercurial" tabindex="-1"><a class="header-anchor" href="#mercurial" aria-hidden="true">#</a> Mercurial</h3><p>O Mercurial (também conhecido como &quot;hg&quot;) foi criado por Matt Mackall em 2005, um ano após o lançamento do Git. Ele queria criar um SCV distribuído com uma interface mais simples e amigável do que o Git, enquanto mantinha a eficiência e a escalabilidade. Ele é conhecido por sua facilidade de uso e documentação clara. Ele oferece recursos semelhantes ao Git, como ramificação e fusão, mas com uma abordagem mais amigável para iniciantes.</p><h3 id="bazaar" tabindex="-1"><a class="header-anchor" href="#bazaar" aria-hidden="true">#</a> Bazaar</h3><p>O Bazaar (também conhecido como &quot;bzr&quot;) foi criado pela Canonical Ltd., a empresa por trás do sistema operacional Ubuntu. Ele foi desenvolvido para atender às necessidades de desenvolvimento de software distribuído da Canonical. Ele é conhecido por sua simplicidade e flexibilidade e foi projetado para ser extensível e pode ser adaptado para uma variedade de cenários de desenvolvimento.</p><h3 id="darcs" tabindex="-1"><a class="header-anchor" href="#darcs" aria-hidden="true">#</a> Darcs</h3><p>O Darcs foi criado por David Roundy em 2002. Ele é um dos SCVs distribuídos mais antigos e se destaca por sua abordagem única de rastreamento de alterações. O Darcs utiliza um modelo de rastreamento de patches que permite que os desenvolvedores apliquem e revertam alterações de forma flexível. Ele é conhecido por sua simplicidade e elegância conceitual.</p><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3><p>O Git é o SCV distribuído mais amplamente utilizado e foi criado por Linus Torvalds em 2005. A motivação de Torvalds para desenvolver o Git foi a necessidade de um sistema de controle de versão eficiente para o desenvolvimento do kernel do Linux, que envolvia colaboração global e controle de código-fonte de grande escala. O Git é conhecido por sua velocidade, escalabilidade e flexibilidade. Ele permite que desenvolvedores trabalhem em ramos separados, realizem fusões eficientes e tenham controle fino sobre o histórico de alterações.</p>',46),l=e("hr",{class:"footnotes-sep"},null,-1),p={class:"footnotes"},v={class:"footnotes-list"},q={id:"footnote1",class:"footnote-item"},f={href:"https://www.youtube.com/watch?v=6Czd1Yetaac&t=31s",target:"_blank",rel:"noopener noreferrer"},b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),g={id:"footnote2",class:"footnote-item"},h={href:"https://blog.wkm.com.br/o-que-%C3%A9-e-porque-usar-um-sistema-de-controle-de-vers%C3%A3o-23f00b08e12d",target:"_blank",rel:"noopener noreferrer"},S=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function x(z,j){const a=i("ExternalLinkIcon");return n(),t("div",null,[c,m(`
Transcript:
(00:00) Olá pessoal Fabio Akita Finalmente tô de volta! Fiquei uns dois meses
fora meio que de férias de fim de ano enquanto eu tava fazendo obras e me mudando pro meu
novo apartamento. Ainda não tá 100% mas vocês já podem ver que o cenário mudou
e este é o piloto de teste da nova configuração de equipamentos. Ainda vou refinar mais um
pouco e em breve faço um vídeo sobre como
(00:18) tô gravando a partir de agora. Como já estamos em fevereiro nem vou falar
de retrospectiva nem nada disso. Vamos já pular direto pra um assunto técnico. Na real,
eu tô postergando esse tema desde um ano atrás quando comecei a série Começando
aos 40 e no primeiro vídeo de conhecimentos gerais eu disse que era obrigatório conhecer
Git e Linux. Linux eu já fiz um episódio
(00:40) onde falei sobre como instalar e configurar
um ambiente de desenvolvimento em Ubuntu. Então resta falar sobre Git. Porém, já vou avisar que isso Não é um
tutorial de Git. Uma coisa que eu não tô a fim de fazer é tutoriais que você pode
facilmente encontrar em qualquer outro canal, ou curso online ou posts de blog. Aprender
a meia dúzia de comandos básicos de Git
(01:01) é super simples, nenhum inconveniente. Em
poucas horas você já aprendeu e com poucos dias praticando você já devia ser capaz
de participar de um projeto. Em vez disso, eu quero dar alguns insights que talvez vocês
não saibam mesmo se já usam Git faz tempo. Essa história começa uns 12 anos atrás. (...)
(01:23) Lembro bem que era um dia de semana por volta
de 2007, eu tava voltando de algum cliente ou algo assim no meu carro e naquela época
eu ouvia alguns podcasts e audiobooks porque eu gastava muitas horas no carro indo e voltando
do trabalho. E um dos programas que eu ouvia naquela época era o FLOSS Weekly do Leo Laporte,
episódio 19 do dia 1o de setembro de 2007.
(01:47) Uma entrevista com Junio Hamano, entrevistado
por ninguém menos que Randal Schwartz que era bem conhecido na comunidade Perl. Vou
deixar o link desse episódio nas descrições abaixo. Eu mesmo preciso ouvir de novo porque
eu só ouvi uma única vez naquele dia. Pra dar um contexto, nessa época eu tava
deixando de ser consultor SAP e programador
(02:08) Java pra experimentar ser freelancer em Ruby
on Rails. Eu contei um pouco disso no episódio sobre SAP e sobre Ruby on Rails então dêem
uma olhada. Mas o comum naquela época na maioria das empresas era, ou não usar nenhum
tipo de controle de versão de código fonte, ou no máximo algum produto comercial Bem
porcaria como Microsoft SourceSafe ou Rational
(02:29) ClearCase. Mundo open source ainda não tinha
tanta força, muitos projetos ainda usavam CVS, alguns poucos tavam indo pra Subversion.
A primeira década do século XXI ainda tava muito atrasado em relação a qualidade de
vida pra desenvolvedores. Eu era um dos rebeldes chatos que ficava insistindo
em tentar usar pelo menos Subversion no mundo
(02:50) corporativo, porque eu já tinha cicatrizes
demais por conta do SourceSafe. Ninguém merece aquele lixo. Eu sofri com SourceSafe desde
o ano 2000 e já tava de saco cheio. E mesmo Subversion não era nenhuma grande maravilha,
era mais a filosofia do “menos pior” mesmo. E CVS, quem teve que lidar com essa outra
porcaria nos anos 90 lembra o sofrimento.
(03:13) Mundo open source e mundo corporativo estavam
bem mal servidos. A entrevista do podcast era com Junio Hamano
que era, e acho que ainda é, o mantenedor do Git. E ele tava justamente explicando que
diabos era isso de Git. Em 2007 literalmente ninguém fora dos colaboradores da kernel
do Linux tinham muita idéia sobre isso. Como
(03:32) eu tinha essa péssima experiência com CVS,
subversion, SourceSafe e tudo mais, quando eu ouvi a explicação fiquei com vontade
de experimentar o quanto antes. Então cheguei em casa e fui logo pesquisar.
Obviamente tinha pouca coisa online a respeito. Foi meio um dejavu, foi a mesma sensação
quando pesquisei sobre Ruby on Rails 2 anos
(03:52) antes e também não achava ninguém muito
interessado. Mas aí esbarrei numa palestra do próprio Linus Torvalds de poucos meses
antes. Foi uma tech talk dentro do Google. Tem um monte de coisas do Google que eu pessoalmente
não gosto, mas não se pode negar que eles sempre tentam estar um passo à frente nas
tendências. E se tem um video sobre Git que
(04:11) eu diria que deveria ser obrigatório assistir
é essa tech talk de Maio de 2007 do Torvalds. A seguinte passagem foi o que vendeu Git pra
mim: (Linus xinga CVS e Subversion)
(anybody who disagree is ugly) Eu Adoro quando o
(05:53) Torvalds não só pisa no calo, mas puxa o
martelo e marreta com força. Em resumo, antes do Git a manutenção do projeto da kernel
do Linux era feita literalmente com patches e tarballs. Vou voltar pra explicar isso já
já. Mas aí eles encontraram a ferramenta comercial BitKeeper que foi um dos primeiros
versionadores de código distribuídos e bem
(06:32) feitos. E assim como o GitHub, era uma ferramenta
fechada mas que eles deixaram projetos open source usar. Só que o problema de confiar
numa ferramenta comercial é que por um tempo eles podem ser legais e deixar usar de grátis,
mas um belo dia podem proibir de usar. E foi o que aconteceu, porque alguém tentou fazer
engenharia reversa do protocolo deles, se
(06:54) não me engano, e eles não gostaram nada
disso e mudaram de idéia. Daí o Linux ia ficar sem o BitKeeper. Obviamente
outras porcarias como SourceSafe jamais foram cogitados como alternativa. E nem voltar pra
coisas como CVS. A outra opção era voltar ao procedimento anterior de patches e tarballs.
Depois de lançar a kernel 2.6 o Torvalds
(07:14) queria resolver esse problema de uma vez.
Ele olhou as opções e pensou assim. (eu faço melhor em duas semanas e tava certo) Eu não sou contra falar grande se a pessoa
entrega grande. E Torvalds como todo mundo
(08:47) sabe, entrega. E o resultado disso foi o Git,
que ele desenvolveu por volta de 2015. Antes de continuar, vale eu voltar rapidamente na
história. Pensa assim, um programador iniciante hoje ou um programador nos anos 70 ou 80,
não importa. Você tá nos primeiros passos, você quer escrever código. Então você
abre um editor de textos qualquer e começa
(09:08) a criar arquivos e vai salvando em algum diretório. Muito rapidamente você vai cair nos mesmos
erros que todo programador sempre caiu não importa em qual época. Você vai escrever
em cima do seu código de ontem, salvar e depois descobrir que fez errado e agora perdeu
a versão de ontem. Você vai renomear arquivos,
(09:26) sair apagando, e uma hora vai apagar um arquivo
que não devia. Quem nunca? Depois de apagar coisas por acidente algumas vezes, você vai
começar a duplicar os arquivos antes de editar. Daí vai começar a ficar com versões diferentes
do mesmo arquivo no diretório. Eu cansei de fazer isso quando era novo e cansei de
ver projetos dos outros cheio de arquivos
(09:47) velhos que não deviam estar lá. Daí vem o segundo problema, você precisa
que outro desenvolvedor trabalhe no mesmo projeto. Uma das maneiras de fazer isso é
colocar o diretório do projeto em alguma pasta compartilhada na rede local. Daí acontece
de os dois abrirem o mesmo arquivo pra editar. Você edita e salva primeiro. Daí o segundo
cara edita a parte dele e salva por cima!
(10:10) E pronto, você acabou de perder o que tava
fazendo. Por isso que muitos produtos comerciais daquela
época como SourceSafe ou ClearCase, que eu já xinguei várias vezes, tem como princípio
ser uma camada por cima do sistema de arquivos de rede e te dar a opção de bloquear um
arquivo ou diretório. Daí antes de abrir
(10:28) um arquivo, primeiro você bloqueia ou faz
checkin. Daí se outro programador tentar abrir o mesmo arquivo o sistema vai negar.
E ele tem que esperar você terminar, salvar e dar checkout pra desbloquear o arquivo. Isso ajuda um pouquinho, mas não muito. Eu
lembro que no ano 2000 eu trabalhava no Brasil
(10:46) mas na empresa tinha grupos de programadores
em Miami, em Buenos Aires e outros lugares da América Latina. Daí um infeliz em Miami
bloqueava um arquivo e ia embora sem desbloquear. E eu precisava editar aqui e não conseguia.
Daí tinha que ligar pra alguém que fosse administrador do servidor pra desbloquear
forçado.
(11:07) Esse sistema de bloquear e desbloquear era
um lixo na prática. Só servia pra casos muito simples. E isso não resolve o problema
de alguém ou você mesmo salvar o que não devia e perder o que tinha antes. Pra isso
precisava ter versionamento. Hoje em dia os próprios sistemas operacionais e mesmo produtos
como Dropbox já oferecem um mínimo de versionamento.
(11:26) Mesmo que você apague o conteúdo de um arquivo
e grave, você pode optar em pedir pro sistema fazer tipo um backup da versão anterior.
Daí você tem a opção de tentar recuperar algumas versões pra trás. Veja um Time Machine
da Apple por exemplo. Hoje em dia a maioria das pessoas tem no mínimo 128GB de HD mas
é muito comum ter meio tera ou mais que um
(11:47) terabyte. O computador que eu uso pra editar
meus vídeos tem 2 Samsung EVO nvme2 de 3TB cada, sem contar os backups externos. Mas no ano 2000 era luxo ter 10 GB de HD.
Máquina corporativa podia ter menos que isso ainda. E projeto Java naquela época era pesado
como é hoje mesmo. Nos anos 90 pra trás,
(12:08) espaço em disco era mais inacessível ainda.
O jeito tosco que eu falei acima de duplicar o arquivo antes de editar, pro caso de você
precisar da versão anterior é super ineficiente não só porque vai sujando seu diretório
de arquivos desnecessários. Mas vira um enorme desperdício de espaço caro em disco. Por
isso acho que foi por volta dos anos 70, na
(12:29) época dos UNIX que surgiram duas ferramentas
que existem até hoje nos Linux e devia ser ensinado como parte da matéria de algoritmos
e estruturas de dados. A primeira ferramenta se chama Diff que é
usado pra tirar a diferença entre dois arquivos. E aqui é um exemplo de onde estudo de algoritmos
faz diferença. Se você como iniciante quiser
(12:49) fazer uma ferramenta que abre dois arquivos
e tira a diferença em um terceiro arquivo, como você faria? É um problema exponencial
que fica lento muito rápido se implementar desse jeito tosco. Mas existe um algoritmo
bem conhecido pra encontrar a subsequência comum mais longa entre dois strings. No pior
caso a complexidade vai ser de 2 elevado a
(13:10) m, sendo m o tamanho de um dos arquivos. Mas
no melhor caso a complexidade cai pra m vezes n, sendo m e n o tamanho dos dois arquivos.
Se fizer da forma ingênua vai ficar exponencialmente pior que isso. Aliás, se vocês estão estudando algoritmos
e estruturas de dados na faculdade, recomendo estudar esse algoritmo também. O professor
de vocês pode ajudar. Ou procurem vídeos
(13:32) no YouTube mesmo com a explicação passo
a passo pra entender como você consegue achar essa subsequência. A partir dessa subsequência,
se um conteúdo existe no arquivo original mas não existe na subsequência, podemos
marcar com um caracter como "menos". Se não existe no arquivo original mas existe na subsequência,
podemos marcar com um caracter como "mais".
(13:53) Adicione a essa subsequência alguns metadados
como em qual linha do arquivo aquela subsequência se localiza e chegamos no que chamamos do
formato de um patch. Então a ferramenta diff que todo Linux tem
consegue achar a subsequência comum mais longa entre dois arquivos, adiciona metadados
como o número da linha no arquivo e gera
(14:13) esse arquivo de patch. Patch que em inglês
é basicamente um remendo. Alguns dizem que essa é a origem do nome Apache, o servidor
web. Era A-Patch, por isso Apache. Enfim, dentro de um arquivo de patch você
tem chunks ou hunks de código, que é literalmente nacos de código. Vários nacos de código,
ou hunks, formam um patch, que é um remendo.
(14:37) Daí digamos que você queira mandar as modificações
que você fez num arquivo pra um amigo seu que tem o mesmo arquivo. Você envia só o
arquivo de patch. E no Linux tem a segunda ferramenta que eu falei, que se chama patch
e é feito pra aplicar um arquivo de patch no arquivo original, pra ter a versão nova.
(15:00) Se você já pelo menos andou fuçando um
projeto num GitHub da vida, já deve ter visto o formato de patches só que colorizado. Mas
é basicamente a mesma coisa. A ferramenta diff nasceu por volta de 1976 então ele é
pouca coisa mais velho do que eu ... e graças a isso ficou mais econômico guardar só as
modificações feitas sobre o arquivo original
(15:18) em vez de duplicar o arquivo toda vez só
por causa de Uma linha modificada. Então economizamos tanto espaço em disco quanto
banda de rede já que se fosse transferir as modificações pela rede, antes precisava
ir o arquivo modificado inteiro, agora pode ir só o patch que vai ser muito menor. E
de novo, lembre-se que hoje você tem banda
(15:39) larga com 200Mb por segundo ou mais, mas antigamente
estamos falando de linhas discadas ou redes lentas que trafegavam alguns kilobytes por
segundo só. Agora, se você tiver outro programador que
tá colaborando no mesmo projeto, não basta só dar o patch pra ele, ele precisa ter alguma
versão do projeto baixado pra poder aplicar
(15:58) esse patch. E como ele baixa o projeto? Pensando
de novo nos primórdios da internet, uma forma de fazer isso seria baixar de um servidor
de arquivos. Só que eu já expliquei que temos essa limitação de baixa velocidade.
Dependendo do tamanho do projeto pode ficar bem lento de baixar. Pense que antigamente, anos 70 pra trás,
disco rígido era uma coisa bem cara. A forma
(16:20) mais comum nos mainframes e minicomputadores
era armazenar dados em fitas. Rolos de fitas. E pra gravar em fita você precisava tentar
desperdiçar menos espaço quanto possível e daí no fim dos anos 70 nasce o formato
de gravação de arquivos em fita ou tape archive, que você conhece hoje como TAR.
A estrutura de dados de um TAR é gravar uma
(16:42) série de objetos um atrás do outro. Tar
é traduzido literalmente como alcatrão, um poluente de petróleo, mas pense mais como
um piche. Então se você tem uma bola de piche onde objetos vão grudando, você tem
um tarball. Daí que vem esse termo que todo mundo de
Unix e Linux sempre usa mas você nunca soube
(17:01) o que era. Na prática pense que em vez de
você ter 100 arquivos separados, você combine os 100 um atrás do outro num único arquivão.
A grosso modo isso é um tar. E pra ser eficiente o comando tar dos Unix e Linux ganhou capacidade
de adicionar compressão sem perda a partir dos anos 90. Aliás, compressão existem dois tipos, lossy
e lossless, ou seja, compressão que perde
(17:24) dados e compressão que não perde dados.
Exemplos de compressão lossy que perde dados é JPEG pra imagens ou MP3 pra música. Exemplos
de compressão que não perde dados é Zip ou 7z. A compressão mais simples que você
mesmo pode aprender sozinho e deveria ser ensinado na faculdade na matéria de algoritmos
e estruturas de dados é o algoritmo de Huffman
(17:46) pra compressão de texto. O formato gzip que você vê até hoje em
Linux usa o algoritmo deflate que é uma combinação de uma variação do Lempel-Ziv e do Huffman.
Aliás, algoritmos de compressão é outra área que os russos dominavam. Se você já
usou ou ouviu falar de RAR o nome vem de Roshal Archive, que é o nome do inventor russo Eugene
Roshal. O zip e o 7zip vem de outro russo,
(18:10) Igor Pavlov. No fim dos anos 80 um dos compressores
mais famosos na época do MS-DOS era o PKZIP que eu usei bastante. Mas nesse caso era do
americano Phil Katz. E foi Katz que inventou o deflate dos Unix. Compressão é outro tema
complicado de explicar a história, mas até hoje você usa alguma variação disso. Qualquer
página na web que seu navegador baixa é
(18:32) entregue comprimido pelos servidores web,
normalmente por gzip. De qualquer forma, essa tangente foi só pra
explicar que com as ferramentas que eu descrevi, você já consegue montar um fluxo de trabalho
pra um projeto como a kernel do Linux. O Linus Torvalds faz um tarball da versão 1.0 da
kernel e coloca num servidor FTP público.
(18:52) Um outro desenvolvedor como um Alan Cox ou
Andrew Morton baixa do FTP e começa a desenvolver alguma nova funcionalidade. Quando termina,
faz um diff dos arquivos e envia anexado num e-mail de volta pro Linus. No Unix e Linux
existem comandos de terminal pra conectar em servidores POP3 ou IMAP hoje em dia, então
o Linus consegue automatizar baixar o e-mail,
(19:15) separar o anexo, e usar o comando patch do
Linux pra aplicar os patches na versão na sua máquina. Se tudo estiver ok pra ele,
ele faz um novo tarball versão 1.1 e coloca no servidor. Se você já fuçou servidores
de FTP já deve ter visto diretórios de projetos com tarballs de diversas versões. Não é um fluxo eficiente em 2020, mas nos
anos 90, estamos falando no que havia de mais
(19:39) avançado em fluxo de trabalho distribuído.
Então a internet, somado com ferramental Linux como diff, patch, tar, gzip, FTP, e-mail,
permitiram um fluxo de trabalho distribuído e o nascimento do mundo open source como conhecemos
hoje. Alguma variação disso já existia no mundo Unix nos anos 80 mas foi com o Linux
que esse modelo de trabalho começou a ganhar
(20:02) chão. Mas isso é no mundo pós-internet comercial
e Linux. No começo dos anos 70 já havia o conceito de versionamento de código fonte.
Em resumo em 1972 havia o SCSS ou Source Code Control System desenvolvido na linguagem SNOBOL
na Bell Labs, obviamente, e usado em sistemas como IBM System 370 até o PDP-11. Nos anos
80 foi substituído por uma evolução, que
(20:26) foi o RCS ou Revision Control System. O RCS
ainda é mantido até hoje. Finalmente por volta de 1990 surgiu o Concurrent Version
System ou CVS pra substituir o RCS. O modelo sempre foi o que se chama de centralizado,
ou cliente-servidor, que era a arquitetura da moda nos anos 80 e 90. Você configurava
um servidor onde ficava o projeto. Na máquina
(20:52) de cada desenvolvedor você instala um cliente
que consegue se conectar nesse servidor. O servidor era responsável por coisas como
autenticar o login de cada desenvolvedor pra dar permissão de acesso ao código. Daí
o desenvolvedor podia fazer checkout pra baixar todo o código; fazer checkin pra subir as
modificações e de tempos em tempos dar um
(21:12) update pra baixar as últimas modificações
do servidor. O servidor ia guardando os deltas de modificação, possível graças à idéia
de patches. Novas versões adicionaram coisas como delta compression pra economizar espaço
no disco guardando os patches zipados. E novas funcionalidades foram aparecendo como a idéia
de fazer branches.
(21:34) Branch é um conceito simples com uma operação
complicada. Fazer um branch, da forma mais grosseira, é duplicar o diretório do projeto.
Daí você trabalha num diretório separado. Quando termina gera os patches e aplica no
diretório principal e pode apagar o diretório duplicado. É uma forma de trabalhar numa
funcionalidade que pode demorar; ou testar
(21:55) correção de bugs, sem atrapalhar o diretório
principal. Isso funciona bem se você trabalha sozinho, ou com poucas pessoas, ou com pessoas
que estão muito bem coordenadas entre si. Caso contrário isso se torna um puta pesadelo
muito rápido. Nos dias de hoje você tem Pull Requests no GitHub que é basicamente
um branch do projeto.
(22:16) (Linux branch true guru) Pra adiantar essa história, o que foi o Subversion?
Subversion de fato nasceu com o conceito de CVS feito direito. Na prática ele adota um
fluxo muito parecido com o CVS mas com uma implementação menos puxadinho e um pouco
mais estável. O básico funciona igual, checkout, checkin ou commit, update. Mas branches sempre
foi o calcanhar de aquiles. O Subversion consertou
(22:38) branches tarde demais. Só na versão 1.5
que saiu em junho de 2008, que ele ganhou a funcionalidade de merge tracking. 8 anos
depois da primeira versão. Aí foi muito pouco muito tarde. Em 2008 foi quando o GitHub
começou a bombar e aí o resto é história. Eu já expliquei porque a gente odeia coisas
como SourceSafe, porque o conceito de bloquear
(23:00) arquivos pra só uma pessoa usar de cada vez
é uma desgraça. Pior ainda pra gerenciar releases, ou fechar versões. Era tão complicado
essas porcarias que nos anos 90 e começo dos anos 2000 havia a figura de um gestor
de configuração. Um cara pago pra fazer o equivalente a commit e tagear versões.
Pensa no absurdo de precisar de alguém tempo
(23:22) integral pra não corromper muito o código
fonte. O outro problema eram as branches. E é a
razão principal de porque CVS e Subversion tiveram reputação tão ruim. A gente era
meio que obrigado a usar porque não tinha opção melhor. Ninguém usava porque gostava.
Faça um exercício: tenta instalar um servidor
(23:39) CSV em qualquer Linux hoje. Você vai ver
que é super chato. Eu mesmo perco a paciência e desisto no meio de tão chato que é configurar
um CVS. Subversion é um pouco mais fácil de configurar e mesmo assim é um saco. Um dos grandes defeitos estruturais do CVS
é que ele guardava revisões arquivo por arquivo, ele não entendia o conceito de um
único arquivão de patch de uma funcionalidade
(24:03) inteira, como um Pull Request hoje por exemplo,
que é um conjunto de commits. De forma simplória um commit é nada mais que um arquivo de patch
com um cabeçalho com metadados como o autor do commit e data e hora. Mas enfim, era difícil
de gerenciar versões no CVS. Cada desenvolvedor precisava trabalhar num branch ou num fork
que, pra todos os efeitos e propósitos, é
(24:26) mais ou menos a mesma coisa, uma duplicata
do projeto original. Só que pra combinar as modificações de dezenas de desenvolvedores
numa única versão, era um cornojob desgraçado, podia levar um dia inteiro ou mais pra conseguir
fazer o merge. Eis que na virada do século surge a BitMover
e seu produto BitKeeper. Muita gente pensa
(24:46) que a principal diferença era ser descentralizado.
Mas na realidade a principal novidade foi tornar branches, forks e principalmente merges,
operações razoavelmente triviais. Um trabalho que podia levar horas ou dias reduzido pra
minutos, e com muito menos margem de erros. Por isso que apesar de ser um produto comercial
de código fechado, por pragmatismo, o Linus
(25:08) resolveu migrar o desenvolvimento do kernel
pro BitKeeper. Isso foi em 2002, mas em 2 ou 3 anos teve o problema que já falei que
a BitMover resolveu botar restrições demais ao ponto que o Linus se encheu. Com o CVS e Subversion, que eram as alternativas
open source, muito atrasados em relação ao BitKeeper, as outras alternativas comerciais
sendo as porcarias que sempre foram, muitos
(25:31) começaram a pensar em novas soluções. Assim
em 2003 surgiu o Darcs e em 2005 surgiu o Mercurial e a própria Canonical que mantém
o Ubuntu fez o Bazaar. E também em 2005 o próprio Linus resolveu fazer o Git. No papel
todos eles são muito parecidos. Sistemas de versionamento descentralizados com foco
em resolver o problema de branches e merges.
(25:53) A diferença é que todos eles tinham problema
de performance, menos o Git. Mercurial e Bazaar eram feitos em Python,
então eles não tem como escalar em performance até certo ponto. Darcs se não me engano
era feito em Haskell e também era criticado por problemas de performance. O Git, por outro
lado, feito pelo Linus sempre foi hiper rápido,
(26:12) porém difícil de usar. Mas em casos como
esse, performance e, principalmente segurança, tem prioridade. Antes desses novos sistemas, a estrutura de
dados que ferramentas como Subversion entendiam era uma árvore. Pense diretórios e arquivos.
É uma árvore. Um branch era mais ou menos duplicar a árvore. E um merge era comparar
duas árvores. Pra ilustrar um problema óbvio.
(26:36) Pense que no diretório original você renomeia
um arquivo. E no diretório duplicado você deleta o mesmo arquivo. Agora tenta fazer
o merge disso no Subversion ou CVS, você vai tomar um conflito de merge. Isso é o
tipo de coisa que um Git faz merge automaticamente e corretamente, BitKeeper e os outros novos
também.
(26:57) Conflitos de merge é o pesadelo de todo desenvolvedor
nesses sistemas antigos e incompetentes. Num Git minimamente bem usado você raramente
encontra conflitos. E mesmo quando encontra eles costumam ser fáceis de resolver. Hoje
em dia trabalhar em branches é super comum, a gente faz isso o tempo todo. Fazer merge
também. Idealmente você faz merges com frequência
(27:17) e evita deixar código não mergeado esquecido
num branch por semanas ou meses. Mas em sistemas antigos fazer branches custava meio caro,
e com merges eram complicados, você evitava ao máximo fazer com frequência. Só que
quanto mais você espera também mais caro vai ficando, então era uma faca de dois gumes.
Em vez de ter que passar por todo esse pesadelo
(27:40) a maioria simplesmente desistia de fazer branches
e todo mundo trabalhava na mesma versão, que em Subversion se chama trunk, em Git é
o que você conhece como master. Por isso antigamente se tinha tanta discussão
sobre quem podia ou quem não podia ter acesso de escrever, ou seja acesso de commit no trunk.
O Linus explica isso melhor:
(28:00) (Linus morons commit access) Agora, por que branches e
(29:55) merges num sistema como Git é tão infinitamente
melhor do que num Subversion antes da versão 1.5? Pra simplificar vamos pensar o que você
vê hoje em dia num projeto num GitHub da vida, que usa Git por baixo. Aliás, se você
não sabia, você não precisa de GitHub pra usar Git, o GitHub é só um facilitador mas
ele é opcional. De qualquer forma, se você
(30:26) já fez qualquer tutorial de Git e já tentou
usar um pouco deve ter notado alguns termos que a gente usa. Vamos recapitular, você
faz git clone pra puxar uma cópia do projeto pra sua máquina. Você vai fazendo modificações,
edita um arquivo, cria um novo, renomeia outro e quando termina uma parte do trabalho, faz
um git add pra marcar essas alterações e
(30:46) faz um git commit pra empacotar essas modificações.
Se você não sabia disso, o git commit por baixo faz algo equivalente ao diff que falei
antes. Um commit é o patch de modificações desde o commit anterior. Eu fiz o episódio de Criptografia básica
porque eu precisava ensinar um conceito lá que vou usar agora. Uma das coisas que o Linus
queria garantir é que os dados no repositório
(31:09) Git sejam sempre confiáveis, ou seja, que
eu possa confiar que o texto que eu baixo dele está correto. Pra garantir isso a próxima
coisa depois do tal diff que o git commit faz é passar o patch por um algoritmo de
hashing no caso o SHA-1. Esse é aquele numerozão longo e estranho que todo commit tem. É o
hash do patch, a assinatura daquele delta.
(31:31) Lembra do conceito de hash? Se eu modificar
um bit dentro desse patch o SHA-1 vai mudar completamente e não vai mais bater com o
SHA-1 original então eu sei que o patch está corrompido. Aqui vale mais uma curiosidade. Eu não entendo
quando as pessoas me perguntam "Akita, que tutorial de Git eu devo estudar?" Qual é
a dificuldade de ler a documentação no site
(31:53) oficial das coisas como o primeiro passo?
Eu sempre achei óbvio ir no site oficial de tudo que eu quero aprender. Se você tivesse
ido no site do Git e aberto o link “Book” que é o livro, e lido o capítulo Git Internals,
já saberia muito do que estou dizendo aqui. Só pra não perder tempo, eu vou justamente
usar um trecho desse capítulo.
(32:14) Eu disse que não vou fazer um tutorial, mas
eu acho interessante demonstrar algumas coisas neste ponto. Eu fico bastante irritado de
ver programadores usando ferramentas que geram arquivos e modificam coisas no seu projeto
e ele não saber o que está acontecendo. Deixa eu fazer outra tangente. Quando eu aprendi
CVS uma coisa que era necessário pra ferramenta
(32:33) rastrear os arquivos é que ele sujava meu
projeto inteiro criando um diretório .cvs em todos os subdiretórios do projeto. Era
um saco isso. Esse subdiretório começa com ponto porque todo mundo sabe que em Linux
um arquivo que começa com ponto significa escondido. Se você mexesse nesses diretórios
tinha muita chance de estragar tudo e ter
(32:54) que dar um checkout de novo pra reconstruir
certo. Subversion fazia a mesma coisa, só que agora
eram subdiretórios .svn. Até aí tudo bem. Só que em 2003 eu desenvolvia em Windows
e tinha projetos .NET que eu precisava usar Visual Studio. Se você usasse alguma coisa
como a porcaria do SourceSafe, tecnicamente
(33:15) tudo funcionava integrado. Mas obviamente
eu era rebelde e queria usar Subversion pra tudo. Pois bem, me fodi, Visual Studio crasheava
quando tentava abrir um projeto vindo do Subversion. Porque em 2003 nem Windows XP, nem Windows
Server 2003 entendiam direito arquivos que começam com ponto. Era um dos motivos de
porque quase ninguém usava Subversion com
(33:37) projetos de Visual Studio no começo dos anos
2000. O que eu fiz? A ferramenta que normalmente
se usava pra dar checkout de repositórios Subversion se chamava TortoiseSVN. Era uma
ferramentinha feita em Visual C++. Então eu fiz um patch pra esse projeto, eu fiz o
Tortoise criar esses subdiretórios de rastreamento
(33:55) como underline "_svn" em vez de ponto ".svn"
e aí o Visual Studio conseguia abrir o diretório agora sem crashear. Pra fazer isso primeiro
eu precisava saber que não tinha importância renomear esse diretório, porque ele só é
importante pro cliente de subversion, não pro servidor. Hoje em dia felizmente o Windows já entende
arquivos e diretórios que começa com ponto,
(34:18) porque o Git faz a mesma coisa, ele cria um
diretório chamado ponto ".git". Mas ele é diferente do CVS e Subversion, porque na realidade
agora os arquivos e diretórios do projeto que você vê e edita é que não tem importância.
O conteúdo de verdade dos arquivos fica no repositório inteiro dentro desse ponto .git
e por isso só tem um na raíz e não em todos
(34:39) os subdiretórios. Entenda. Se você cria um projeto qualquer,
digamos de de Node, de C#, tanto faz, e dá git init pra iniciar, depois git add de tudo
e o primeiro git commit, agora você pode apagar os arquivos originais, menos o diretório
.git. Mesmo se você apagar qualquer arquivo, qualquer um pode ser recuperado com um simples
git checkout. Ele vai procurar o arquivo dentro
(35:04) desse .git, sem precisar perguntar nada pra
nenhum servidor. É por isso que você consegue ficar mudando de branches no mesmo diretório,
o conteúdo inteiro muda. Arquivos somem e reaparecem. Num Mercurial toda nova branch
gera um novo diretório ao lado do diretório original do projeto. Só que se você listar o que tem dentro desse
diretório, você não vai achar os arquivos
(35:27) do seu projeto. Em vez disso vai ter alguns
subdiretórios meio estranhos e um maior que é o .git / objects. E nele vai achar um monte
de arquivos com nomes que parecem hashes de SHA-1. Ficou complicado? Deixa eu ilustrar.
Nesta parte eu vou seguir igualzinho a primeira página do capítulo de Git Internals do livro
gratuito que está no site oficial, que é
(35:48) uma coisa que você já devia ter feito também.
Vamos lá, primeiro criar um novo repositório local de git com o comando git init test. Agora vamos listar o tal diretório .git / objects.
Vazio. Agora vamos usar um comando que você nunca viu o git hash-object. Vou dar echo
de uma string e passar pra esse comando. Agora
(36:07) se listar de novo o diretório você vai ver
que apareceu um arquivo lá com o nome sendo o SHA-1 desse string. Agora, pra pegar o conteúdo
desse arquivo podemos usar outro comando que você nunca viu e nem nunca vai usar o git
cat-file. E pronto, é o conteúdo que passamos antes. O repositório git é um banco de dados de
objetos. Vamos dar echo de um string qualquer
(36:31) pra dentro de um arquivo. Isso é uma operação
do sistema operacional, nada a ver com git. Agora vamos usar o git pra gerar o hash do
conteúdo do arquivo com o git hash-object de novo. Faltou nesse livro apagar o arquivo
original antes de dar echo de novo, senão o próximo comando vai falhar. Então vamos
apagar e agora dar echo de um novo conteúdo
(36:52) com o mesmo nome de arquivo. Rodamos hash-object
e obviamente o SHA-1 tem que ser diferente pra um conteúdo diferente. Listando os objetos agora temos mais arquivos.
Nesse ponto, podemos apagar de novo o arquivo e recuperar o conteúdo que está no arquivo
hasheado. E assim sabemos que é possível recuperar conteúdo que você apagou a partir
do versionamento do repositório. É assim
(37:16) que comandos como o git checkout funcionam. Só que até aqui estamos gravando meramente
os conteúdos dos arquivos mas não os metadados como o nome do arquivo, estrutura de diretórios
ou atributos. Os objetos que criamos até aqui são meros blobs, um punhado de bytes.
Pra organizar, precisamos criar esses metadados
(37:36) que também são objetos, mas em vez de tipo
blob eles são tipo tree ou árvore. Pra isso precisamos usar uma área intermediária do
Git onde é possível manipular esses metadados. Se você já usou o comando git add é nessa
área intermediária que o git estaciona suas modificações. No nosso caso queremos adicionar os metadados
na primeira versão do arquivo text.txt que
(37:59) criamos no começo. Então vamos usar outro
comando que você nunca viu o git update-index. E esse número 100644 é o mode do arquivo,
que se você já usou Linux antes deve saber do comando chmod que é change mode. 644 é
um arquivo normal, 755 é um arquivo executável. Ou sendo mais exato, o primeiro número é
o modo pro usuário dono do arquivo, o segundo
(38:23) número é o modo pro grupo e o terceiro número
é o modo pra qualquer outro usuário. 7 é ler, escrever e executar, 5 é ler e executar,
4 é só leitura e assim por diante. Estude sobre chmod depois pra entender isso melhor.
É coisa básica de Linux. De qualquer forma, nada foi gravado ainda,
pra gravar precisamos agora tirar da área
(38:43) estacionada ou stage com o comando git write-tree.
E agora criamos um novo objeto de tipo tree com os metadados e podemos usar o git cat-file
pra ver. Agora vamos criar um novo objeto de tree só que apontando pra dois outros
objetos, um novo arquivo e um que já existe. Primeiro criamos o arquivo new.txt. Agora
damos update-index na versão mais recente
(39:06) do test.txt que criamos antes e também um
update-index no arquivo new.txt. De novo, estamos trabalhando na área intermediária
de stage, então quando terminamos de adicionar os metadados, agora podemos fazer git write-tree
pra gerar o objeto de tree com esses metadados. Vamos listar com cat-file e agora ele mostra
os dois blobs que esse novo objeto de tree
(39:29) está apontando. Entenderam o que estamos fazendo? Estamos
manipulando o repositório Git local que é basicamente um banco de dados de objetos,
criando os objetos e apontando novos objetos de metadados pra eles. Até agora nossa estrutura
está mais ou menos como nessa ilustração. Finalmente, vamos pro terceiro tipo de objeto
interessante aqui, os commits. Vamos criar
(39:52) um commit apontando pro último objeto de
tree que criamos. Quando tentamos criar um commit o git vai reclamar que eu ainda não
configurei email nem nome pra etiquetar no commit. Pra gerar os mesmos SHA-1 do exemplo
eu vou usar o email e nome do Scott Chacon que é o autor desse livro e um dos sócios
fundadores do GitHub. Mas na sua máquina
(40:14) você deve usar seu próprio nome e e-mail,
claro. Pronto, agora geramos o commit de novo e novamente
ele nos devolve um hash. Veja como todo objeto, seja um blob, um tree ou um commit ou qualquer
outro tipo sempre gera um SHA-1 que ao mesmo tempo serve como ID desse objeto e também
como validador da integridade do dado. Podemos
(40:35) usar o mesmo cat-file pra mostrar esse commit
também usando o hash que acabamos de gerar. E se você já usou git antes, esse formato
deve ser familiar pra você. Vamos gerar mais dois objetos de commit, cada
um referenciando o commit anterior. Então criamos o segundo commit apontando pro primeiro.
E o terceiro apontando pro segundo. E agora,
(40:56) se usarmos o comando git log, vamos ver tudo
organizado. Entenda o que aconteceu até aqui. Usamos
comandos de baixo nível do Git que são conhecidos como plumbing, ou encanamento mesmo, como
cat-file, write-tree, update-index, read-tree, pra fazer as mesmas coisas que outros dois
comandos que você talvez já conheça, o
(41:19) git add e git commit. Add e Commit são comandos
conhecidos como Porcelain, de alto nível. Todo tutorial e curso de Git só ensina os
comandos Porcelain, mas entenda que por baixo dos panos na realidade esses comandos fazem
uso do encanamento, dos comandos plumbing, que você raramente vai usar. O Linus desenvolveu
primeiro os comandos plumbing, foi depois
(41:41) que o Junio Hamano entrou como novo mantenedor
que ele e outros colaboradores foram melhorando a usabilidade e criando comandos mais simples
pra meros mortais. Agora vamos terminar essa parte mostrando
por outra perspectiva. Vamos abrir o console de Ruby puro. Começamos criando uma variável
com um string. Agora vamos criar uma variável
(42:01) chamada header que tem como conteúdo a palavra
blog e o tamanho da variável anterior. Finalmente vamos criar uma terceira variável chamada
store que é o header mais o conteúdo. Vamos importar a biblioteca de sha1 do Ruby
e gerar a versão hexadecimal de 40 caracteres desse store. Agora vamos abrir um outro terminal
e usar o primeiro comando plumbing do Git
(42:26) que vimos, o hash-object. E veja que o SHA-1
é exatamente igual. É assim que o Git estrutura o conteúdo e gera o hash. Se você foi atento
deve ter notado que usamos o comando git cat-file pra ver o conteúdo do objeto. Mas porque
não usamos o comando cat padrão do Linux? Vamos fazer isso no terminal. E veja que apareceu
só um monte de sujeira que não dá pra ler.
(42:49) É um binário, não um texto. Mas o que é
esse binário? Voltando pro Ruby, vamos importar outra biblioteca,
a zlib pra ter acesso ao método Deflate. Lembram que eu falei de deflate antes? Que
é a compressão do gzip? Então vamos aplicar deflate na variável store e esse é o binário
comprimido da string original. Parece maior
(43:08) porque é a representação do binário no
terminal, mas o conteúdo real é menor. E pra simular o que o git hash-object faz, vamos
gravar o arquivo. Primeiro vamos gerar o caminho completo do diretório e arquivo. De curiosidade você vai notar que quebramos
os primeiros dois caracteres desse SHA-1 pra fazer um subdiretório e colocamos o restante
como arquivo dentro dele. Se você é um pouco
(43:32) experiente entende porque. Entenda que diretórios
tem limite de arquivos. Eu não lembro se eram uns 64 mil arquivos. Pra evitar ficar
tudo num diretório só, criando subdiretórios a partir do SHA-1 vai ajudar a balancear os
arquivos, agora você pode ter uns 64 mil subdiretórios cada um com uns 64 mil arquivos
cada ou seja, aumentamos a capacidade máxima
(43:56) pra uns 4 bilhões de arquivos… deve ser
suficiente. Agora vamos importar a biblioteca fileutils
pra criar os subdiretórios caso não existam. No Linux usamos o comando mkdir com o parâmetro
traço -p pra isso, por isso o método no fileutils do Ruby se chama mkdir_p. E finalmente
gravamos a versão comprimida do conteúdo
(44:18) no novo arquivo. Pra ver se funcionou, podemos
sair do console do Ruby e usar o mesmo comando git cat-file pra abrir esse objeto blob que
acabamos de criar. E funciona! Repetindo, quando você clona um projeto do
GitHub pra sua máquina, os diretórios e arquivos do projeto que você vê no seu editor,
são só um espelho do que está dentro do
(44:41) diretório .git / objects. O banco de dados
de verdade são esses objects. A estrutura de diretórios e arquivos pode ser inteira
recriada a partir desses objetos. Mais do que isso, perceberam que quando criamos o
SHA-1 ele só considera o blob. Os metadados como nome do arquivo e diretório ficam num
objeto separado, do tipo tree.
(45:02) É uma das razões de porque o Git é mais
eficiente pra comparar versões diferentes. Lembram quando eu falei da situação de você
renomear um arquivo num branch e apagar o arquivo num outro branch e o conflito que
isso dá num Subversion ou CVS? No Git esse conflito não existe, o Git rastreia primeiro
o conteúdo, depois os metadados.
(45:21) Mas essa é só a primeira vantagem. E com
esse exemplo de Ruby você sabe como as bibliotecas de Git em qualquer outra linguagem se integram
com repositórios Git. É isso que permite um GitHub ou GitLab. A estrutura de dados
do Git é aberta e razoavelmente simples de trabalhar. Eu recomendo que vocês leiam o livro no site
oficial do Git pra entender como o resto do
(45:45) Git funciona. Mas agora eu posso voltar pro
problema principal: branches e merge. Como eu disse antes, imagine que em sistemas antigos
tipo CVS um branch é mais ou menos internamente como duplicar o diretório inteiro do projeto.
E o merge é fazer diff no diretório duplicado, gerar os patches de cada arquivo e aplicar
de volta no diretório original. Parece simples,
(46:09) mas é muito fácil de ver como isso vai fracassar
homericamente. Esse tipo de merge é o que se chama de 2-way.
O Git prioriza não a estrutura de diretórios, mas um grafo, mais especificamente um DAG
ou um Direct Acyclic Graph. Acíclico porque os nós desse grafo não apontam de volta
um pro outro causando um loop infinito. Vocês
(46:32) viram como manualmente criamos um commit novo
apontando pro commit anterior. É isso que o comando git commit faz sempre: cria um commit
ligado ao anterior, criando uma cadeia. O DAG é esse grafo de commits. Um branch é
nada mais, nada menos que um desvio nesse grafo com uma etiqueta com o nome do branch.
(46:55) A vantagem disso é que todo branch tem a
informação do ponto de Origem. A partir de qual commit começa o branch. Um CVS e
o Subversion antes da versão 1.5, não tem essa informação. Depois que você faz merge
uma vez, fodeu, você não pode mais continuar trabalhando no branch, porque o próximo merge
vai ser um inferno na Terra de conflitos.
(47:15) Até aqui deve estar meio confuso pra vocês
visualizarem, então vamos fazer um exemplo simples. Na verdade eu adaptei o exemplo de
um artigo da revista Dr. Dobbs que eu li em 2013 pra entender isso e ainda é um bom exemplo,
então deixo o link nas descrições abaixo. Pra variar vamos chamar nossos desenvolvedores
fictícios de Alice e Bob. Cada um tem uma
(47:34) cópia do projeto. Em um determinado momento
precisamos mergear o trabalho dos dois. Você abre o arquivo da Alice e encontra o comando
Print hello na linha 30. Daí abre o mesmo arquivo do Bob e vê o comando um pouco diferente,
Print bye na mesma linha 30. E agora? Um CVS olha pra esses dois arquivos e tem que interromper
o processo de merge porque ele não tem como
(47:59) decidir qual das duas linhas é a válida.
Agora a Alice e o Bob precisam ser chamados pra ver se eles lembram o que era pra ser
o correto. Isso é um pequeno exemplo, agora imagina isso acontecendo em centenas de linhas
de dezenas de arquivos no mesmo projeto. Isso é o que chamamos de um merge 2-way,
ou seja com duas versões sendo comparadas.
(48:19) A diferença no Git é que quando fazemos
um branch ele marca a commit de origem do branch. Agora Alice continua trabalhando no
branch original master e Bob começa a trabalhar no novo branch, digamos hotfix, que acabamos
de criar. Mesma situação, no final precisamos mesclar o trabalho dele e chegamos no mesmo
problema de antes na tal linha 30 do arquivo.
(48:41) A diferença é que o Git pode voltar no passado
até o ponto onde o branch foi criado e olhar como era o arquivo original. Agora temos 3
bases de comparação, a versão da Alice, a versão do Bob e a versão original. E se
olharmos a versão original vamos descobrir que originalmente a linha 30 tinha o comando
Print bye. Então quem modificou o arquivo
(49:04) foi a Alice. E o Git pode escolher automaticamente
usar a versão mais recente que é certamente a da Alice. E o processo de merge não dá
mais esse conflito e pode seguir automaticamente. (Linus 22,000 files) Agora você começa a entender porque o algoritmo
de merge 3-way é absurdamente superior a 2-way. Por causa disso o Git consegue eliminar
praticamente todo conflito que daria num CVS.
(49:33) Esse foi o ponto que pra mim mais me deixou
impressionado em 2007. Mais do que isso, depois que o Git conclui o merge, ele cria um commit
de merge. Agora Alice e Bob podem continuar trabalhando cada um em seu respectivo branch
e quando forem fazer um novo merge, o novo ancestral de comparação vai ser esse último
merge e não o commit de quando o branch foi
(50:06) criado. Num CVS e no Subversion sem o merge
tracking da versão 1.5 que eu falei, eles não tem como saber quando aconteceu o último
merge e ele sempre vai comparar tudo de um branch contra tudo do outro branch, então
se da primeira vez deu um monte de conflito, vai dar tudo de novo no próximo merge e só
vai piorando.
(50:35) == cortado - começo
Outra coisa que parece confundir muita gente até hoje é a diferença entre rebase e merge.
A regra é simples, você nunca faz rebase num branch que espelha um branch num repositório
oficial, por exemplo na sua conta no GitHub. Por convenção Isso normalmente é o branch
chamado de master, que aponta pra remote/origin/master
(51:01) do servidor. Agora, qualquer branch de nova
funcionalidade, ou branch experimental que você cria na sua própria máquina, você
sempre deve fazer rebase da master nele. E quando terminar você faz merge da sua branch
pra master. Essa é a regra: rebase a partir do master pra sua branch e merge da sua branch
pro master.
(51:19) Agora o que diabos é um rebase na prática.
Vamos voltar pro exemplo da Alice e do Bob. Pra facilitar digamos que o Bob faz um branch
chamado hotfix a partir do commit 5 do branch master onde a Alice tá trabalhando. Agora
a Alice continua trabalhando e faz os commits 6 e 7. E o Bob continua trabalhando no branch
dele e faz um commit 8. No histórico do Bob
(51:44) o commit 5 pula direto pro commit 8. Mas pro
Bob estar atualizado com o que a Alice anda trabalhando, de tempos em tempos ele pode
fazer rebase da master Quando ele faz rebase, o que o Git faz é
mover os commits dele uma área temporária, então é como se ele rebobinasse o branch
do Bob até onde ele foi criado, que é o
(52:13) commit 5. Daí o Git pega os commits 6 e 7
da Alice e adiciona no branch do Bob. Agora ele tem a sequência mais atualizada dos commits
5, 6 e 7. E finalmente o Git pega os commits que ele moveu pra área temporária, no caso
o commit 8, e aplica a partir do 7. Agora o histórico do Bob está limpo e linear,
5, 6, 7 e 8. E quando ele terminar agora ele
(53:01) faz um merge, que vai gerar um commit 9 ligando
com o commit 8 do Bob com o 7 da Alice. E pronto, ele pode apagar o branch temporário
dele. Recapitulando, rebase é rebobinar seu branch de volta pro começo, aplicar os commits
mais novos do branch original, e depois aplicar seus commits de volta por cima. Só isso.
== cortado - fim
(53:29) Hoje em dia, se você só usou Git e ocasionalmente
fez alguma besteira e deu alguns conflitos num merge, é só isso, um pequeno inconveniente,
mas antes de ferramentas como Git, era o que eu falei antes, um verdadeiro inferno na Terra.
Como anedota, quando eu era consultor Java e SAP, eu estava num cliente com minha equipe.
Um dos desenvolvedores amigo meu fazia faculdade
(53:49) a noite. E ele era do tipo que se irritava
com as coisas mesmo. Ele tava atrasado e deu um tanto de conflito quando ele deu um update
ou commit. Ele tentava resolver os conflitos e não ia. No fim ele saiu atrasado pra faculdade
a noite, puto da vida, e bateu o carro. Então, Subversion já fez alguém bater o carro.
Não tô exagerando, era assim ruim.
(54:12) Então, quando eu ouvi o Torvalds xingando
o povo do Subversion, eu sabia exatamente do que ele tava falando. Sério, no marketing
do Subversion onde eles falavam que era CVS feito direito, também tinha bastante propaganda
de como criar branches era uma coisa simples no Subversion. Isso era totalmente irrelevante.
De fato, criar branches num CVS era mais custoso.
(54:32) Mas o problema nunca foi criar branches, o
problema sempre foi mergear os branches. E isso o Subversion levou 8 anos pra remendar.
Depois dessa tech talk do Torvalds ainda levou mais de um ano pra adicionarem o maldito merge
tracking. Mas nesse ponto já era tarde demais, eu já tinha abandonado Subversion e comecei
a usar Git.
(54:55) Mas tinha um problema. Ao meu redor, só eu
queria usar Git, pra variar. Quando eu deixei de ser consultor SAP e virei freelancer de
Ruby on Rails, os primeiros projetos que peguei ainda eram em Subversion. Felizmente tanto
Mercurial quanto Git tinham tipo um adaptador. Era possível fazer checkout, baixar o código
de um repositório Subversion, converter localmente
(55:14) em um repositório Git e trabalhar normalmente
com Git. Depois que eu tivesse terminado de mergear meus branches e estivesse tudo pronto,
dava pra dar commit de volta pro repositório Subversion. Então era possível começar
a migrar minha forma de trabalhar mesmo se o cliente não quisesse mudar pra Git.
(55:35) Essa é a outra vantagem de sistemas distribuídos.
Num sistema centralizado, qualquer coisa que você precisa fazer, precisa pedir pro servidor.
Então se eu estivesse offline, digamos num aeroporto, e eu quisesse fazer um commit pra
não perder acidentalmente o que eu tava fazendo, não tinha como, porque em Subversion commit
é o equivalente a commit e push do Git. Ele
(55:53) precisa enviar pro servidor. Mas offline,
já era, meu fluxo de trabalho era interrompido. Compare com hoje em dia, 2 anos atrás eu
realmente fui codando um projeto durante meu vôo pra Las Vegas, fiquei as 8 horas do vôo
codando, comitando e fazendo tudo que eu precisava. Quando cheguei no aeroporto em Las Vegas eu
conectei meu notebook no 4G e fiz um push
(56:16) pro repositório no meu GitLab. Aliás, vale explicar outra coisa. Eu já
disse antes que GitHub ou GitLab são opcionais pra usar Git. Quando você faz um git init
como eu já mostrei, o diretório .git tem tudo que você precisa. Digamos que estamos
na situação do aeroporto ou na situação de eu estar em alguma conferência sem internet.
Daí um amigo meu se oferece pra me ajudar.
(56:39) Como ele clona o projeto de mim? De várias
maneiras. Ele pode se conectar via SSH no meu notebook. Ele pode simplesmente pegar
uma cópia do diretório pela rede local. Ou eu posso copiar o repositório num pendrive
e dar pra ele clonar. Muita gente não sabe disso mas quando você
faz um git clone de um GitHub, a diferença
(56:57) pra um repositório criado localmente é só
algumas linhas no arquivo de config no diretório .git apontando um remote chamado origin pra
um endereço na internet, que pode ser um servidor https ou até mesmo um servidor SSH,
ou nem precisa ser um servidor, pode ser um outro diretório local na mesma máquina.
Isso mesmo, você pode fazer git clone de
(57:19) um diretório. Deixa eu mostrar isso, vamos
pegar o repositório que criamos antes chamado test. Agora vamos sair do diretório. Agora
podemos fazer git clone desse repositório e chamar o clone de test2. Pronto, clonado.
Se olharmos o arquivo de config do test2 vemos uma configuração de remote origin apontando
pro diretório em vez do GitHub por exemplo.
(57:41) E como remote é só um texto de configuração,
podemos apontar pra onde a gente quiser depois. Git e outros sistemas distribuídos tem como
característica não precisar de um servidor central que controla tudo. Como hoje já tá
comprido demais este episódio um dia eu retomo o assunto, mas basta dizer que a forma como
todo mundo usa Git via GitHub hoje é só
(58:02) uma das formas de se trabalhar, que provavelmente
funciona melhor pra maioria das pessoas, mas não é adequada pro fluxo de trabalho dos
desenvolvedores do projeto da kernel do Linux, por exemplo, por isso eles não estão no
GitHub apesar de usarem Git. Eu mesmo prefiro que terceiros não tenham acesso ao meu código
fonte e nem dos meus clientes, por isso eu
(58:23) mantenho uma instalação privada de GitLab.
Tudo funciona igualzinho ao GitHub se não melhor em muitos casos. E mesmo sem GitLab,
pra casos menores, bastaria fazer o que eu já fazia dez anos atrás: dar git init num
servidor de SSH e todos os meus amigos podem clonar de lá e a gente já pode trabalhar.
(58:44) Uma das grandes barreiras que o Git enfrentou
desde o começo, principalmente comparado com a concorrência, é que ele foi feito
pra ser usado num terminal Linux. O Git é um conjunto de programas de linha de comando,
que assume que está num ambiente POSIX. Portanto em Windows sempre foi bem chatinho de usar
porque o command prompt sempre foi uma grande
(59:03) porcaria e o suporte POSIX sempre foi meia
boca. O que uma década não faz? Se você assistiu meu vídeo sobre o Windows Subsystem
for Linux, ou WSL, agora o Windows oferece um terminal decente e agora tá super fácil
usar programas de linha de comando de Linux nativamente no Windows. Fora isso diversas
IDEs e editores de texto incluindo o Visual
(59:24) Studio Code tem suporte decente de Git também.
Então mesmo no Windows você consegue usar Git sem grandes problemas hoje. Em 2008 quando eu fui trabalhar na Locaweb,
assim como muitas outras empresas, eles usavam o que? O famigerado e odiado Microsoft SourceSafe.
Eu, do meu jeito delicado de chegar chutando
(59:43) a porta, forcei a migração de todos os projetos
e códigos fonte da empresa pra ficar num servidor Git. Na época GitHub ainda tava
só começando, GitLab não existia, mas havia um projeto open source chamado Gitorious que
dava suporte somente a hospedar projetos open source. Como o código era aberto, eu adicionei
a funcionalidade de administração e gerenciamento
(1:00:06) de usuários e permissões. E foi isso que
usamos por muito tempo. Depois que eu saí eles migraram pro GitLab que tinha acabado
de lançar e é bem melhor. Eu lembro que a rejeição ao Git era muito
grande, especialmente por conta de suporte ruim a usar em Windows pelo command prompt.
Eu literalmente fui sentando na mesa de cada
(1:00:26) desenvolvedor pra ensinar a usar os comandos
e fluxos básicos. Foi uma puta dor de cabeça na época, só um louco pra me deixar fazer
isso em 2008. Levou meses até todo mundo se acostumar, mas eu acho que valeu a pena. Por causa de todas as limitações e a filosofia
de servidor centralizado, em corporações
(1:00:44) antiquadas o mais comum ainda é esconder
o máximo do código fonte quanto possível. Normalmente desenvolvedores de departamentos
diferentes não tem acesso ao código de outros departamentos. Hoje em dia em ambientes modernos
isso pode parecer um absurdo, mas esse era o normal. Como era fácil fazer merda, era
melhor limitar o acesso o máximo possível.
(1:01:07) Além de forçar a migração do SourceSafe
pra Gitorious em 2008 eu também injetei o conceito de todo mundo ver tudo, todo código
fonte fica aberto a todo funcionário e qualquer um pode criar branches e forks e colaborar
via o equivalente a Pull Requests da época. É o modelo que eu acho que é o mais correto
até hoje. Esconder código garante que código
(1:01:30) ruim sobreviva mais do que deveria. Além
de criar politicagem desnecessária. E estamos chegando ao fim deste episódio!
Como eu falei no começo do vídeo, o objetivo de hoje não era fazer tutorial. O próprio
Linus tem a mesma resposta que eu usaria: (Linus feeling lucky) O objetivo hoje era tentar dar um panorama
de porque o Git existe, quais eram as alternativas,
(1:02:13) porque nenhuma outra foi bem sucedida e o
que torna o Git tão diferente do resto. O próprio BitKeeper ainda existe e hoje em
dia e integra com Git. A Microsoft ainda tem o Team Foundation Server ou TFS que pra todos
os efeitos e propósitos é o sucessor espiritual do SourceSafe e eu espero nunca esbarrar em
um. E o TFS também se não me engano tem
(1:02:42) alguma forma de interfacear com repositórios
Git. Graças ao GitHub, rapidamente todo mundo migrou pra Git. Hoje em dia ninguém mais
questiona. Se você é da comunidade Ruby on Rails daquela
época e se lembrar da primeira grande conferência no Brasil, a Rails Summit Latin America, vai
lembrar que um dos palestrantes que eu trouxe
(1:02:57) foi o Chris Wanstrath, um dos fundadores do
GitHub. Eu tinha entrevistado ele pro meu blog no ano anterior e conheci ele, o Tom
e o Scott Chacon na Railsconf um ano antes. O Scott que eu também trouxe se não me engano
na Rubyconf Brasil de 2010. Hoje todo mundo conhece o GitHub como a compra de mais de
7 bilhões de dólares pela Microsoft. Eu
(1:03:01) lembro do GitHub na época em que eles estavam
codando o GitHub de algum Starbucks. Bons tempos. Espero que vocês tenham aprendido um pouco
mais sobre essa que é provavelmente a ferramenta mais básica pra qualquer desenvolvedor hoje
em dia. Minha expectativa de vida como desenvolvedor melhorou substancialmente depois que eu migrei
pra Git em 2007. Se tiverem interesse de ver
(1:03:07) o que eu falava sobre o assunto vou deixar
linkado os posts do meu blog que postei naquela época também. Se curtiram o video deixem
um joinha, assinem o canal e não deixem de clicar no sininho pra não perder os próximos
episódios. Agora eu acho que devo voltar a publicar toda semana se nada der errado,
então a gente se vê, até mais!
`),l,e("section",p,[e("ol",v,[e("li",q,[e("p",null,[o("Fábio Akita. Entendendo GIT | (não é um tutorial!) - YouTube "),e("a",f,[o("https://www.youtube.com/watch?v=6Czd1Yetaac&t=31s"),r(a)]),o(),b])]),e("li",g,[e("p",null,[o("O que é e porque usar um sistema de controle de versão? "),e("a",h,[o("https://blog.wkm.com.br/o-que-%C3%A9-e-porque-usar-um-sistema-de-controle-de-vers%C3%A3o-23f00b08e12d"),r(a)]),o(),S])])])])])}const C=s(u,[["render",x],["__file","01_controle_versao.html.vue"]]);export{C as default};
