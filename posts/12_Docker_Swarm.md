---
icon: edit
date: 2024-02-02 20:50:00.00 -3
tag:
  docker
  swarm
category:
  - aula
order: 12
---

# Docker Swarm


As versões atuais do Docker incluem o modo Swarm para gerenciamento nativo de um cluster dos Docker Engines chamados de Swarm. Use o Docker CLI para criar um Swarm, implantar serviços de aplicativos para um Swarm e gerenciar o comportamento do Swarm.

## Destaques dos recursos

### Gerenciamento de cluster integrado ao Docker Engine

Use a CLI do Docker Engine para criar um Swarm de Docker Engines onde você pode implantar aplicativos Serviços. Você não precisa de software de orquestração adicional para criar ou gerenciar um Swarm.

### Design descentralizado

Em vez de lidar com a diferenciação entre funções de nós no tempo de implantação, o Docker Engine lida com qualquer especialização em tempo de execução. Você pode implementar ambos os tipos de nós, gerentes e trabalhadores, usando o Docker Engine. Isso significa que você pode construir um Swarm inteiro a partir de um único disco imagem.

### Modelo de serviço declarativo

Docker Engine usa uma abordagem declarativa para permitem definir o estado desejado dos vários serviços em seu aplicativo pilha. Por exemplo, você pode descrever um aplicativo composto por uma interface web no serviço final com serviços de enfileiramento de mensagens e back-end de banco de dados.

### Dimensionamento (Scaling)

Para cada serviço, você pode declarar o número de tarefas que deseja correr. Quando você aumenta ou diminui, o gerenciador de Swarm se adapta automaticamente adicionar ou remover tarefas para manter o estado desejado.

### Reconciliação de estado desejada

O nó gerenciador de Swarm monitora constantemente o estado do cluster e reconcilia quaisquer diferenças entre o estado real e o seu estado desejado expresso. Por exemplo, se você configurar um serviço para executar 10 réplicas de um contêiner e uma máquina de trabalho hospedando duas dessas réplicas falha, o gerente cria duas novas réplicas para substituir as réplicas que caiu. O gerenciador de Swarm atribui as novas réplicas aos trabalhadores que estão funcionando e disponível.

### Rede multi-host

Você pode especificar uma rede de sobreposição para o seu Serviços. O gerenciador de Swarm atribui endereços automaticamente aos contêineres na rede de sobreposição quando inicializa ou atualiza o aplicativo.

###Descoberta de serviço

Os nós gerenciadores de Swarm atribuem a cada serviço do Swarm um nome DNS exclusivo e balanceamento de carga executando contêineres. Você pode consultar cada contêiner em execução no Swarm por meio de um servidor DNS incorporado no Swarm.

### Balanceamento de carga

Você pode expor as portas para serviços a um balanceador de carga externo. Internamente, o Swarm permite especificar como distribuir contêineres de serviço entre nós.

### Seguro por padrão

Cada nó no Swarm impõe TLS mútuo autenticação e criptografia para proteger as comunicações entre ele e todos outros nós Você tem a opção de usar certificados raiz autoassinados ou certificados de uma CA raiz personalizada.

### Atualizações contínuas

No momento da implementação, você pode aplicar atualizações de serviço aos nós incrementalmente. O gerenciador de Swarm permite controlar o atraso entre o serviço implantação em diferentes conjuntos de nós. Se algo der errado, você pode reverter para uma versão anterior do serviço.

[Tutorial](https://docs.docker.com/compose/gettingstarted/)