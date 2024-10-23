---
icon: edit
date: 2023-09-15 20:20:00.00 -3
tag:
  - devops
category:
  - aula
order: 1
---


# Devops

[^PUCPR] [^AWS_DEVOPS]

DevOps é uma cultura e prática que tem como objetivo integrar as equipes de desenvolvimento de software (Dev) e operações (Ops), a fim de melhorar a colaboração e comunicação entre elas e aumentar a eficiência e qualidade do processo de desenvolvimento e implantação de software.

Essa abordagem busca diminuir as barreiras entre as equipes, promover a automação de processos, implementar a entrega contínua (continuous delivery) e o monitoramento constante do software em produção, além de enfatizar a importância de feedbacks rápidos e da melhoria contínua.

Em resumo, DevOps é uma forma de organizar e gerenciar o ciclo de vida de uma aplicação, desde a sua criação até a sua entrega e manutenção, visando a colaboração entre as áreas envolvidas e a entrega de valor ao usuário final.

## Pilares da cultura DevOps

**Colaboração**: A colaboração entre as equipes de desenvolvimento, operações e outras áreas envolvidas no processo de desenvolvimento e implantação de software é fundamental para o sucesso do DevOps. Isso envolve a criação de um ambiente em que as equipes trabalhem juntas para alcançar um objetivo comum, compartilhando informações, conhecimentos e responsabilidades.

**Automação**: A automação de processos é um aspecto crucial da cultura DevOps. Isso inclui a automação de tarefas repetitivas, como a compilação de código, os testes e a implantação de software, permitindo que a equipe se concentre em atividades de maior valor agregado.

**Monitoramento**: O monitoramento constante é outro pilar importante da cultura DevOps. Isso envolve a coleta de dados sobre o desempenho da aplicação em produção, a fim de identificar problemas e oportunidades de melhoria. Com base nesses dados, a equipe pode tomar decisões mais informadas sobre como melhorar a aplicação e garantir a sua disponibilidade e desempenho.

Além desses três pilares, alguns especialistas em DevOps também incluem a segurança (Security) como um quarto pilar da cultura DevOps, enfatizando a importância de abordagens e práticas de segurança integradas em todas as etapas do ciclo de vida de uma aplicação.


## Benefícios do DevOps

### Velocidade
Opere em alta velocidade para que você possa trazer inovações para os seus clientes mais rapidamente, adaptar-se melhor a mercados dinâmicos e tornar-se mais eficiente na geração de resultados comerciais. O modelo de DevOps permite que as suas equipes de desenvolvedores e operações atinjam esses resultados. Por exemplo, os microsserviços e a entrega contínua permitem que as equipes assumam a responsabilidade sobre os serviços e, então, lancem atualizações para eles mais rapidamente.

### Entrega rápida
Aumente a frequência e o ritmo de lançamentos para poder inovar e melhorar seu produto mais rapidamente. Quanto mais rápido você puder lançar novos recursos e corrigir erros, maior será a sua agilidade para responder às necessidades dos clientes e criar vantagem competitiva. A integração e a entrega contínuas são práticas que automatizam o processo de lançamento de software, da fase de criação à fase de implantação.


### Confiabilidade
Garanta a qualidade das atualizações de aplicativos e alterações de infraestrutura para que você possa entregar com confiança em um ritmo mais rápido, sem deixar de manter uma experiência positiva para os usuários finais. Use práticas como a integração e a entrega contínuas para testar se cada umas das alterações funciona e é segura. As práticas de monitoramento e registro em log ajudam você a permanecer informado sobre a performance em tempo real.

### Escala
Opere e gerencie seus processos de infraestrutura e desenvolvimento em escala. A automação e a constância ajudam você a gerenciar sistemas complexos ou dinâmicos com eficiência e risco reduzido. Por exemplo, a infraestrutura como código ajuda você a gerenciar seus ambientes de implantação, teste e produção de modo repetido e mais eficiente.

### Colaboração melhorada
Crie equipes mais eficientes em um modelo cultural de DevOps, que enfatiza valores como propriedade e responsabilidade. As equipes de desenvolvedores e operações colaboram de perto, compartilham muitas responsabilidades e combinam seus fluxos de trabalho. Isso reduz ineficiências e economiza tempo (por exemplo, períodos de transferência reduzidos entre desenvolvedores e operações, desenvolvimento de código que considera o ambiente em que é executado).

### Segurança
Opere rapidamente enquanto mantém o controle e preserva a conformidade. Você pode adotar o modelo de DevOps sem sacrificar a segurança usando políticas de conformidade automáticas, controles minuciosos e técnicas de gerenciamento de configuração. Por exemplo, usando a infraestrutura e a política como código, você pode definir e acompanhar a conformidade em escala.

## Por que o DevOps é importante
O software e a Internet transformaram o mundo e seus mercados, do comércio ao entretenimento e ao sistema bancário. O software já não apenas sustenta uma atividade empresarial, na verdade ele tornou-se um componente integral de cada parte de uma empresa. As empresas interagem com seus clientes por meio de softwares disponibilizados como serviços ou aplicativos online, e em todos os tipos de dispositivos. Elas também usam o software para aumentar a eficiência operacional ao transformar cada parte da cadeia de valor, como logística, comunicação e operações. Assim como as empresas de mercadorias físicas transformaram a maneira de projetar, criar e disponibilizar produtos por meio de automação industrial no século 20, as empresas de hoje devem transformar a maneira como criam e disponibilizam software.


## Práticas de DevOps
Veja a seguir as melhores práticas de DevOps: 

### Integração contínua
A integração contínua é uma prática de desenvolvimento de software em que os desenvolvedores, com frequência, juntam suas alterações de código em um repositório central. Depois disso, criações e testes são executados. Os principais objetivos da integração contínua são encontrar e investigar erros mais rapidamente, melhorar a qualidade do software e reduzir o tempo necessário para validar e lançar novas atualizações de software.

### Entrega contínua
A entrega contínua é uma prática de desenvolvimento de software em que alterações de código são criadas, testadas e preparadas automaticamente para liberação para produção. Ela expande com base na integração contínua, pela implantação de todas as alterações de código em um ambiente de teste e/ou ambiente de produção, após o estágio de criação. Quando a integração contínua for implementada adequadamente, os desenvolvedores sempre terão um artefato de criação pronto para ser implantado, e que passou por um processo de teste padronizado.
Saiba mais sobre a entrega contínua e o AWS CodePipeline »

### Microsserviços
A arquitetura de microsserviços é uma abordagem de projeto para a criação de um aplicativo único como um conjunto de pequenos serviços. Cada serviço é executado em seu próprio processo e se comunica com outros serviços por meio de uma interface bem definida usando um mecanismo leve, geralmente uma interface de programação de aplicativo (API) baseada em HTTP. Os microsserviços são criados em torno dos recursos empresariais, e cada serviço tem uma finalidade única. Você pode usar estruturas ou linguagens de programação diferentes para gravar microsserviços e implantá-los independentemente como um único serviço ou um grupo de serviços.

### Infraestrutura como código
A infraestrutura como código é uma prática em que a infraestrutura é provisionada e gerenciada usando técnicas de desenvolvimento de código e software, como controle de versão e integração contínua. O modelo controlado por API da nuvem permite que desenvolvedores e administradores de sistema interajam com a infraestrutura de modo programático e em escala, em vez de precisarem instalar e configurar manualmente os recursos. Portanto, os engenheiros podem dialogar com a infraestrutura usando ferramentas baseadas em código e tratá-la de modo similar ao código do aplicativo. Como são definidos por código, infraestrutura e servidores podem ser implantados rapidamente usando padrões normativos, atualizados com os patches e as versões mais recentes ou duplicados várias vezes.

#### Gerenciamento de configuração
Os desenvolvedores e os administradores de sistema usam código para automatizar o sistema operacional e a configuração do host, as tarefas operacionais e muito mais. O uso do código torna as alterações de configuração repetidas e padronizadas. Isso isenta os desenvolvedores e os administradores de sistemas de ter que configurar manualmente sistemas operacionais, aplicativos de sistemas ou software do servidor.

#### Política como código
Com a infraestrutura e a sua configuração codificada com a nuvem, as empresas podem monitorar e aplicar a conformidade de modo dinâmico e em escala. Portanto, a infraestrutura, que é descrita pelo código, pode ser acompanhada, validada e reconfigurada de modo automático. Isso facilita para as empresas administrarem as alterações de recursos e garantirem que as medidas de segurança foram aplicadas adequadamente de modo distribuído (por exemplo, segurança de informações ou conformidade com PCI-DSS ou HIPAA). Isso permite que as equipes de uma empresa operem em uma velocidade maior, pois recursos fora de conformidade podem ser sinalizados automaticamente para serem investigados em mais detalhes ou, até mesmo, ter sua conformidade restabelecida de modo automático.

### Monitoramento e registro em log
As empresas monitoram métricas e logs para ver como a performance do aplicativo e da infraestrutura afeta a experiência do usuário final do seu produto. Ao capturar, categorizar e analisar dados e logs gerados pelos aplicativos e pela infraestrutura, as empresas compreendem como as alterações ou atualizações afetam os usuários, o que proporciona um esclarecimento sobre as causas raiz dos problemas ou das alterações inesperadas. Como os serviços devem estar disponíveis 24/7 e a frequência de atualização do aplicativo e da infraestrutura aumenta, o monitoramento ativo torna-se cada vez mais importante. A criação de alertas ou a execução de análise em tempo real desses dados também ajuda as empresas a monitorar de modo mais proativo seus serviços.

### Comunicação e colaboração
O aumento da comunicação e da colaboração em uma empresa é um dos principais aspectos culturais do DevOps. O uso das ferramentas de DevOps e da automação do processo de entrega de software estabelece a colaboração ao unir fisicamente os fluxos de trabalho e as responsabilidades de desenvolvimento e operações. Baseando-se nisso, essas equipes definem normas culturais sólidas com relação ao compartilhamento de informações, além de facilitar a comunicação por meio do uso de aplicativos de chat, sistemas de acompanhamento de problemas ou projetos, e wikis. Isso ajuda a agilizar a comunicação entre desenvolvedores, operações e até mesmo outras equipes, como marketing ou vendas, permitindo que todas as partes da empresa se alinhem mais estreitamente às metas e aos projetos.

## Referências

<!-- @include: ../bib/bib.md -->

