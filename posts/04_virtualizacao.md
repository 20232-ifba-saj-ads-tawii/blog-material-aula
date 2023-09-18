---
icon: edit
date: 2023-10-06 20:40:00.00 -3
tag:
  - virtualizacao
category:
  - aula
order: 2
---

# Virtualização

[^AWS_VIR] [^AWS_VIRCON] [^AWS_CON]

## Execução de Aplicativos em um Sistema Operacional

Para entender como um aplicativo é executado em um sistema operacional, primeiro é necessário entender como um sistema operacional funciona. Um sistema operacional é responsável por gerenciar os recursos de um computador, como memória, processador e dispositivos de entrada e saída. Ele é o intermediário entre o hardware do computador e os programas que são executados nele.

Quando um aplicativo é executado em um sistema operacional, ele é carregado na memória do computador. O sistema operacional aloca um espaço de memória para o aplicativo e carrega o código executável do aplicativo naquele espaço de memória. Em seguida, o sistema operacional executa o código do aplicativo, instrução por instrução, até que o aplicativo seja concluído ou o usuário o encerre.

Durante a execução do aplicativo, ele pode precisar acessar outros recursos do computador, como arquivos em disco ou dispositivos de rede. O sistema operacional fornece uma interface para o aplicativo acessar esses recursos de forma segura e controlada.

## Execução de Aplicativos em um Ambiente Virtualizado

Em um ambiente virtualizado, um aplicativo é executado em um ambiente isolado que é separado do sistema operacional hospedeiro. Isso permite que o aplicativo seja executado em um ambiente que é configurado de maneira específica para o aplicativo, sem afetar o sistema operacional hospedeiro ou outros aplicativos que estão sendo executados nele.

Um ambiente virtualizado é criado usando um software de virtualização, que é instalado no sistema operacional hospedeiro. O software de virtualização cria um ambiente virtualizado que inclui seu próprio sistema operacional, que é instalado em uma imagem de disco virtual. Essa imagem de disco virtual contém todos os arquivos necessários para o sistema operacional, bem como para o aplicativo que será executado nele.

O aplicativo é instalado dentro do ambiente virtualizado e é executado dentro desse ambiente. O aplicativo só tem acesso aos recursos que foram alocados para ele dentro do ambiente virtualizado. Isso inclui recursos como memória, processador e dispositivos de entrada e saída. Qualquer tentativa do aplicativo de acessar recursos fora do ambiente virtualizado é bloqueada pelo software de virtualização.

## Tipos de Virtualização

Existem vários tipos de virtualização, cada um projetado para um conjunto específico de casos de uso. Os três principais tipos de virtualização são:

### Virtualização de Servidor
A virtualização de servidor é usada para criar vários servidores virtuais em um único servidor físico. Cada servidor virtual é isolado dos outros servidores virtuais e pode ter seu próprio sistema operacional, aplicativos e recursos de hardware. Isso permite que várias instâncias de um aplicativo sejam executadas em um único servidor, o que pode ajudar a reduzir os custos de hardware e melhorar a utilização dos recursos do servidor.

### Virtualização de Desktop
A virtualização de desktop é usada para criar desktops virtuais que podem ser acessados ​​por usuários de qualquer lugar. Cada desktop virtual é um ambiente virtualizado que inclui um sistema operacional e os aplicativos necessários para o usuário. Os usuários podem acessar seus desktops virtuais usando um cliente remoto, como um navegador da web ou um aplicativo de desktop remoto.

### Virtualização de Aplicativo
A virtualização de aplicativo é usada para criar um ambiente isolado para a execução de um único aplicativo. O aplicativo é executado em um ambiente virtualizado, separado do sistema operacional hospedeiro, o que garante que o aplicativo não afete outros aplicativos ou o sistema operacional. Isso pode ser útil para testar aplicativos ou para executar aplicativos que têm requisitos de sistema específicos.

### Virtualização de armazenamento
A virtualização de armazenamento é usada para criar um pool de armazenamento de vários dispositivos de armazenamento físico. O objetivo é fornecer aos usuários um único ponto de acesso para todo o armazenamento disponível. Isso pode ser útil em grandes empresas ou organizações que possuem grandes quantidades de dados.

A virtualização de armazenamento é frequentemente usada em conjunto com a virtualização de servidor. Isso permite que os administradores de TI gerenciem o armazenamento de dados de vários servidores em um único local. Isso pode melhorar a eficiência, facilitando o gerenciamento de dados em vários servidores físicos.

### Virtualização de rede

A virtualização de rede é usada para criar redes virtuais em um único hardware de rede físico. Isso permite que vários sistemas operacionais e aplicativos compartilhem a mesma rede física. Cada rede virtual tem seu próprio conjunto de endereços IP e é isolada das outras redes virtuais. Isso pode ser útil em grandes organizações que precisam separar diferentes departamentos ou equipes em redes isoladas.

A virtualização de rede também pode ser usada para criar ambientes de teste isolados. Isso permite que os desenvolvedores testem aplicativos em uma rede isolada sem afetar a rede de produção.

### Virtualização de recursos

A virtualização de recursos é usada para criar pools de recursos físicos, como CPU, RAM e armazenamento, que podem ser alocados dinamicamente para diferentes aplicativos e sistemas operacionais. Isso pode ajudar a melhorar a eficiência de um sistema, permitindo que os recursos sejam compartilhados entre diferentes aplicativos e sistemas operacionais. Por exemplo, um servidor virtual pode ser configurado para compartilhar recursos de CPU e RAM entre vários sistemas operacionais.

A virtualização de recursos também pode ser usada para criar ambientes de teste isolados. Isso permite que os desenvolvedores testem aplicativos em um ambiente isolado sem afetar o ambiente de produção.

## Máquina virtual

Uma máquina virtual é um ambiente de computação que é criado por meio de software em um sistema operacional host. Ele é projetado para emular um sistema operacional completo e permitir que os usuários executem aplicativos e processos em um ambiente virtualizado.

Uma máquina virtual é criada a partir de uma imagem de disco que contém um sistema operacional e aplicativos pré-instalados. Essa imagem de disco é então executada dentro de um software de virtualização, que permite que a máquina virtual seja executada em um ambiente isolado e protegido do sistema operacional host.

Uma das principais vantagens das máquinas virtuais é que elas permitem que os usuários executem aplicativos em um ambiente isolado, sem afetar o sistema operacional host. Isso pode ser útil para testar novos aplicativos ou sistemas operacionais, ou para isolar aplicativos que podem apresentar riscos de segurança.

As máquinas virtuais também são úteis para desenvolvedores de software, pois permitem que eles criem um ambiente de desenvolvimento isolado que é compatível com as necessidades do projeto. Além disso, as máquinas virtuais podem ser facilmente clonadas e distribuídas para outras máquinas, permitindo que os usuários compartilhem ambientes de desenvolvimento ou teste.

Existem vários softwares de virtualização disponíveis, incluindo o VirtualBox, VMware e Hyper-V da Microsoft. Esses softwares permitem que os usuários criem e gerenciem máquinas virtuais em seus sistemas operacionais host.

No entanto, a virtualização também tem algumas desvantagens. As máquinas virtuais geralmente requerem mais recursos do sistema, como RAM e CPU, do que a execução de aplicativos diretamente no sistema operacional host. Além disso, a virtualização pode reduzir o desempenho do sistema operacional host, especialmente se várias máquinas virtuais estiverem sendo executadas ao mesmo tempo.

## Windows Subsystem for Linux (WSL) 

[^WSL]

O Windows Subsystem for Linux (WSL) é uma plataforma de virtualização de sistema operacional que permite aos usuários do Windows executar distribuições Linux em um ambiente virtualizado. Ele foi introduzido pela Microsoft como uma forma de fornecer aos desenvolvedores do Windows um ambiente de linha de comando mais amigável para o desenvolvimento de aplicativos baseados em Linux.

O WSL não é uma máquina virtual tradicional, mas sim um subsistema dentro do Windows que fornece uma camada de compatibilidade com o Linux. Ele usa a tecnologia de virtualização de recursos do Windows, como o Hyper-V, para criar um ambiente virtualizado que é executado em segundo plano. Isso permite que os usuários do Windows executem aplicativos baseados em Linux sem precisar instalar um sistema operacional Linux completo em uma máquina virtual.

O WSL oferece duas opções de distribuição Linux - o WSL1 e o WSL2. O WSL1 usa uma camada de compatibilidade para emular o kernel Linux no Windows, enquanto o WSL2 usa a tecnologia de virtualização Hyper-V para executar um kernel Linux real em uma máquina virtual leve. Isso torna o WSL2 mais rápido e mais eficiente em termos de recursos do que o WSL1, mas também pode exigir mais configuração inicial e compatibilidade com o hardware.

Uma das principais vantagens do WSL é que ele permite que os desenvolvedores do Windows usem ferramentas baseadas em Linux sem precisar alternar para um sistema operacional Linux separado. Isso pode melhorar significativamente a eficiência e a produtividade dos desenvolvedores, permitindo que eles trabalhem em um ambiente de linha de comando mais familiar e compatível com as ferramentas de desenvolvimento Linux.

No entanto, o WSL pode ter algumas limitações em relação a uma máquina virtual tradicional, como a falta de suporte para algumas funções de rede avançadas e a necessidade de usar uma distribuição Linux compatível com o WSL. Além disso, o WSL pode não ser a melhor opção para usuários que precisam de um ambiente de desenvolvimento Linux completo com recursos avançados de virtualização.

## Containers

Os containers proporcionam uma maneira padrão de empacotar código, configurações e dependências de seu aplicativo em um único objeto. Eles compartilham um sistema operacional instalado no servidor e são executados como processos isolados de recursos. Isso permite fazer implantações rápidas, confiáveis e consistentes, independentemente do ambiente. A Nuvem AWS oferece recursos de infraestrutura otimizados para a execução de containers, além de um conjunto de serviços de orquestração que facilitam a criação e execução de aplicativos conteinerizados em produção.

### Qual a diferença entre contêineres e máquinas virtuais?
Contêineres e máquinas virtuais são tecnologias que tornam as aplicações independentes de seus recursos de infraestrutura de TI. Um contêiner é um pacote de código de software que contém o código de uma aplicação, suas bibliotecas e outras dependências. A conteinerização torna suas aplicações portáteis, para que o mesmo código possa ser executado em qualquer dispositivo. Uma máquina virtual é uma cópia digital de uma máquina física. Você pode ter várias máquinas virtuais com seus próprios sistemas operacionais individuais em execução no mesmo sistema operacional host. Além disso, você pode criar uma máquina virtual que contém tudo o que é necessário para executar sua aplicação.



## Resumo das diferenças: Contêiner e Máquina Virtual

<figure>

```plantuml
digraph G {
	fontname="Helvetica,Arial,sans-serif"
		graph [
		newrank = true,
		nodesep = 1,
		ranksep = 0.2,
		overlap = true,
		splines = false,
	]
	node [
		colorscheme=oranges7
		fixedsize = false,
		fontsize = 24,
		height = 1,
		shape = box,
		style="rounded,filled",
		width = 3.5
	]
	edge [
		arrowhead = none,
		arrowsize = 0.5,
		labelfontname = "Ubuntu",
		weight = 10,
		style = "filled,setlinewidth(5)"
	]
  
	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [color=white];
    a0[color=7 label="Maquina\nHospedeira"];
    a1[color=6 label="S.O."];
    a2[color=5 label="SW de Vertualização"];
    a3[color=4 label="HW emulado"];
    a4[color=3 label="S.O. Virtualizado"];
    a5[color=2 label="Libs"];
    a6[color=1 label="App"];
		a6 -> a5 -> a4 -> a3 -> a2 -> a1 -> a0 [style=invis]
		label = "Maquina Virtual";
	}

	subgraph cluster_1 {
		node [colorscheme=greens7]
		b0[color=7 label="Maquina\nHospedeira"];
		b1[color=6 label="S.O."];
		b2[color=5 label="Container Engine"];
		b5[color=2 label="Libs"];
		b6[color=1 label="App"];
		
		label = "Container";
	}
  {rank = same; a0; b0;}
  {rank = same; a1; b1;}
  {rank = same; a2; b2;}
  {rank = same; a5; b5;}
}
```

<figcaption>Comparativo entre virtualização de uma aplicação utilizando Máquina Virtual e Container</figcaption>
</figure>

|Características|Contêiner|Máquina virtual|
|---|---|---|
|Definição   | Um pacote de código de software que contém o código de um aplicativo, suas bibliotecas e outras dependências que fazem o ambiente de execução da aplicação.  |Réplica digital de uma máquina física. Particiona o hardware físico em vários ambientes. |
|Virtualização|Virtualiza o sistema operacional.|Virtualiza a estrutura física subjacente.|
|Encapsulamento|Camada de software sobre o sistema operacional necessária para executar a aplicação ou o componente da aplicação.|Sistema operacional, todas as camadas de software acima dele, várias aplicações.|
|Tecnologia|Mecanismo de contêiner coordena com o sistema operacional subjacente para obter recursos. |O hipervisor coordena com o hardware ou sistema operacional subjacente.|
|Tamanho|Mais leve (pense em termos de MB).|Muito maior (pense em termos de GB).|
|Controle|Menos controle do ambiente fora do contêiner.|Mais controle do ambiente inteiro.|
|Flexibilidade|Mais flexível. Você pode migrar rapidamente entre ambientes on-premises e centrados na nuvem.|Menos flexível. A migração tem desafios.|
|Escalabilidade|Altamente escalável. Escalabilidade granular possível com microsserviços.|Escalar pode ter custo elevado. É necessário alternar de instâncias on-premises para a nuvem para escalar com bom custo-benefício.

 
 ## Referências

 <!--
 Um hypervisor e o VirtualBox são duas tecnologias relacionadas à virtualização, mas com algumas diferenças importantes. Vou explicar cada um deles em português:

**Hypervisor (Hipervisor)**:
Um hypervisor é um software de virtualização que permite a execução de múltiplas máquinas virtuais (VMs) em um único servidor físico. Existem dois tipos principais de hypervisors:

1. **Hypervisor Tipo 1 (Bare-Metal)**: Este tipo de hypervisor é instalado diretamente no hardware físico do servidor, sem a necessidade de um sistema operacional host. Isso o torna mais eficiente e seguro, adequado para uso em ambientes de data centers e servidores de produção. Exemplos de hypervisors tipo 1 incluem o VMware vSphere/ESXi, Microsoft Hyper-V e o KVM (Kernel-based Virtual Machine).

2. **Hypervisor Tipo 2 (Hosted)**: Esse tipo de hypervisor é executado em cima de um sistema operacional host. É mais comumente usado para fins de desenvolvimento, teste e virtualização de desktops. O VirtualBox é um exemplo de hypervisor tipo 2.

**VirtualBox**:
O VirtualBox é um software de virtualização de código aberto desenvolvido pela Oracle. Ele é um hypervisor do tipo 2, o que significa que ele é executado em cima de um sistema operacional host, como o Windows, Linux ou macOS. O VirtualBox permite que você crie e execute máquinas virtuais em seu computador pessoal ou de desenvolvimento. Ele é frequentemente usado por desenvolvedores e entusiastas que desejam testar diferentes sistemas operacionais ou configurar ambientes de desenvolvimento isolados em suas máquinas locais.

Resumindo, a principal diferença entre um hypervisor e o VirtualBox está na sua implantação e uso. Os hypervisors são mais adequados para ambientes de data centers e servidores, enquanto o VirtualBox é mais voltado para uso em desktops e desenvolvimento pessoal. Ambos têm suas vantagens e usos específicos, e a escolha entre eles depende das suas necessidades e cenário de uso.

O Windows Subsystem for Linux (WSL) não requer o Microsoft Hyper-V para funcionar, pelo menos não nas versões iniciais do WSL (WSL 1). O WSL 1 funciona como uma tradução de chamadas de sistema entre aplicativos Linux e o kernel do Windows, sem a necessidade de virtualização completa.

No entanto, o WSL 2, que foi introduzido posteriormente, utiliza uma arquitetura baseada em hipervisor, e é aí que o Microsoft Hyper-V entra em cena. O WSL 2 é mais integrado com o Hyper-V, o que pode proporcionar melhor desempenho e compatibilidade com aplicativos Linux em comparação com o WSL 1.

Portanto, para utilizar o WSL 2, você precisa ter o Hyper-V habilitado em seu sistema Windows. Isso significa que o Hyper-V deve ser compatível com seu hardware e estar ativado nas configurações do Windows. Vale ressaltar que a ativação do Hyper-V pode afetar a virtualização de outros sistemas, como o VirtualBox ou o VMware, uma vez que o Hyper-V toma controle das funcionalidades de virtualização do hardware.

Em resumo, o WSL em sua versão 1 não requer o Hyper-V, mas o WSL 2 usa o Hyper-V para melhorar o desempenho e a compatibilidade com aplicativos Linux. Portanto, a necessidade do Hyper-V depende da versão do WSL que você está utilizando e das suas necessidades específicas.

O Windows Subsystem for Linux 1 (WSL 1) não é um hypervisor tipo 2. O WSL 1 utiliza uma abordagem diferente para executar aplicativos Linux em sistemas Windows. Ele funciona como uma tradução de chamadas de sistema entre aplicativos Linux e o kernel do Windows, permitindo que aplicativos Linux sejam executados de forma nativa dentro do ambiente Windows.

Em outras palavras, o WSL 1 não utiliza uma máquina virtual separada ou um hypervisor para executar o Linux. Em vez disso, ele age como uma camada de compatibilidade que permite a execução de binários Linux diretamente no Windows. Isso torna a inicialização de aplicativos Linux mais rápida em comparação com uma máquina virtual completa.

Por outro lado, o WSL 2, como mencionado anteriormente, utiliza uma abordagem baseada em hypervisor, onde uma VM (máquina virtual) Linux é executada dentro do Hyper-V. O WSL 2 oferece melhor compatibilidade e desempenho em relação ao WSL 1, mas requer o Hyper-V e uma máquina virtual para funcionar.

O Windows Subsystem for Linux 1 (WSL 1) não é exatamente um emulador, embora muitas vezes seja descrito dessa forma devido à sua função de fornecer compatibilidade entre aplicativos Linux e o ambiente Windows. Vamos esclarecer a diferença entre um emulador e o WSL 1:

1. **Emulador**:
   - Um emulador é um software que cria um ambiente virtual para um sistema operacional ou hardware diferente. Ele simula o comportamento de um sistema ou dispositivo para permitir a execução de aplicativos ou software específicos.
   - Emuladores são frequentemente usados quando é necessário executar aplicativos de sistemas operacionais ou plataformas diferentes em um sistema host. Por exemplo, emuladores de consoles de jogos permitem que você jogue jogos de diferentes consoles em um computador.
   - Emuladores normalmente envolvem uma tradução completa das chamadas de sistema e da arquitetura do hardware do sistema emulado.

2. **WSL 1 (Windows Subsystem for Linux 1)**:
   - O WSL 1 não é um emulador no sentido tradicional, pois não emula a arquitetura do hardware Linux.
   - Em vez disso, o WSL 1 age como uma camada de compatibilidade que traduz chamadas de sistema Linux em chamadas de sistema Windows. Isso permite que aplicativos Linux sejam executados de forma nativa no ambiente Windows, sem emulação completa do hardware.
   - O WSL 1 não cria um ambiente virtualizado separado; ele utiliza o kernel do Windows para a execução de aplicativos Linux.

Portanto, embora o termo "emulador" às vezes seja usado de forma coloquial para descrever o WSL 1, é mais apropriado considerá-lo como uma camada de compatibilidade que permite a coexistência de aplicativos Linux e Windows no mesmo ambiente, sem a necessidade de emular completamente o hardware Linux.
 
 -->

<!-- @include: ../bib/bib.md -->