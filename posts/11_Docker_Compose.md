---
icon: edit
date: 2024-02-02 20:50:00.00 -3
tag:
  docker
  compose
category:
  - aula
order: 11
---

# Docker Compose

Docker Compose é uma ferramenta para definir e executar aplicativos com vários contêineres. É a chave para desbloquear uma experiência de desenvolvimento e implantação simplificada e eficiente.

O Compose simplifica o controle de toda a pilha de aplicativos, facilitando o gerenciamento de serviços, redes e volumes em um arquivo de configuração YAML único e compreensível. Então, com um único comando, você cria e inicia todos os serviços do seu arquivo de configuração.

Compose funciona em todos os ambientes; produção, preparação, desenvolvimento, teste, bem como fluxos de trabalho de CI. Também possui comandos para gerenciar todo o ciclo de vida da sua aplicação:

- Iniciar, parar e reconstruir serviços
- Ver o status dos serviços em execução
- Transmita a saída de log dos serviços em execução
- Execute um comando único em um serviço


## Por que usar o Compose?

### Principais benefícios do Docker Compose

O uso do Docker Compose oferece vários benefícios que agilizam o desenvolvimento, a implantação e o gerenciamento de aplicativos em contêineres:

- **Controle simplificado**: o Docker Compose permite definir e gerenciar aplicativos de vários contêineres em um único arquivo YAML. Isso simplifica a complexa tarefa de orquestrar e coordenar vários serviços, facilitando o gerenciamento e a replicação do ambiente de aplicativos.
- **Colaboração eficiente**: os arquivos de configuração do Docker Compose são fáceis de compartilhar, facilitando a colaboração entre desenvolvedores, equipes de operações e outras partes interessadas. Essa abordagem colaborativa leva a fluxos de trabalho mais tranquilos, resolução de problemas mais rápida e maior eficiência geral.
- **Desenvolvimento rápido de aplicativos**: o Compose armazena em cache a configuração usada para criar um contêiner. Quando você reinicia um serviço que não foi alterado, o Compose reutiliza os contêineres existentes. A reutilização de contêineres significa que você pode fazer alterações em seu ambiente muito rapidamente.
- **Portabilidade entre ambientes**: o Compose oferece suporte a variáveis ​​no arquivo Compose. Você pode usar essas variáveis ​​para personalizar sua composição para diferentes ambientes ou diferentes usuários.
- **Ampla comunidade e suporte**: o Docker Compose se beneficia de uma comunidade vibrante e ativa, o que significa recursos, tutoriais e suporte abundantes. Este ecossistema orientado pela comunidade contribui para a melhoria contínua do Docker Compose e ajuda os usuários a solucionar problemas de forma eficaz.


## Casos de uso comuns do Docker Compose
O Compose pode ser usado de muitas maneiras diferentes. Alguns casos de uso comuns são descritos abaixo.

### Ambientes de desenvolvimento
Ao desenvolver software, a capacidade de executar um aplicativo em um ambiente isolado e interagir com ele é crucial. A ferramenta de linha de comando Compose pode ser usada para criar o ambiente e interagir com ele.

O arquivo Compose fornece uma maneira de documentar e configurar todas as dependências de serviço do aplicativo (bancos de dados, filas, caches, APIs de serviços da web, etc.). Usando a ferramenta de linha de comando Compose você pode criar e iniciar um ou mais contêineres para cada dependência com um único comando ( docker compose up).

Juntos, esses recursos fornecem uma maneira conveniente de iniciar um projeto. O Compose pode reduzir um "guia de primeiros passos do desenvolvedor" de várias páginas a um único arquivo Compose legível por máquina e alguns comandos.

### Ambientes de teste automatizados
Uma parte importante de qualquer processo de implantação contínua ou integração contínua é o conjunto de testes automatizados. O teste automatizado de ponta a ponta requer um ambiente no qual os testes sejam executados. O Compose fornece uma maneira conveniente de criar e destruir ambientes de teste isolados para seu conjunto de testes. Ao definir o ambiente completo em um arquivo Compose , você pode criar e destruir esses ambientes com apenas alguns comandos:

```console
docker compose up -d
./run_tests
docker compose down
```

### Implantações de host único

Tradicionalmente, o Compose se concentra no desenvolvimento e teste de fluxos de trabalho, mas a cada lançamento estamos progredindo em recursos mais voltados para a produção.

## Como funciona o Compose

Docker Compose depende de um arquivo de configuração YAML, geralmente denominado `compose.yaml`.


O arquivo `compose.yaml` segue as regras fornecidas pela [Especificação Compose](https://docs.docker.com/compose/compose-file/) sobre como definir aplicativos com vários contêineres. Esta é a implementação do Docker Compose da [especificação formal do Compose](https://github.com/compose-spec/compose-spec) .


### O modelo de aplicativo Compose

Os componentes de computação de um aplicativo são definidos como serviços . Um serviço é um conceito abstrato implementado em plataformas executando a mesma imagem e configuração de contêiner uma ou mais vezes.

Os serviços comunicam-se entre si através de redes . Na especificação Compose, uma rede é uma abstração de capacidade de plataforma para estabelecer uma rota IP entre contêineres dentro de serviços conectados entre si.

Os serviços armazenam e compartilham dados persistentes em volumes . A Especificação descreve dados persistentes como uma montagem de sistema de arquivos de alto nível com opções globais.

Alguns serviços requerem dados de configuração que dependem do tempo de execução ou da plataforma. Para isso, a Especificação define um conceito de configurações dedicado . Do ponto de vista do contêiner de serviço, as configurações são comparáveis ​​aos volumes, pois são arquivos montados no contêiner. Mas a definição real envolve recursos e serviços de plataforma distintos, que são abstraídos por este tipo.

Um segredo é um tipo específico de dados de configuração para dados confidenciais que não devem ser expostos sem considerações de segurança. Os segredos são disponibilizados aos serviços como arquivos montados em seus contêineres, mas os recursos específicos da plataforma para fornecer dados confidenciais são específicos o suficiente para merecer um conceito e uma definição distintos dentro da especificação do Compose.

Um projeto é uma implantação individual de uma especificação de aplicativo em uma plataforma. O nome de um projeto, definido com o atributo de nível superior name, é usado para agrupar recursos e isolá-los de outros aplicativos ou de outras instalações do mesmo aplicativo especificado pelo Compose com parâmetros distintos. Se você estiver criando recursos em uma plataforma, deverá prefixar os nomes dos recursos por projeto e definir o rótulo `com.docker.compose.project`.

O Compose oferece uma maneira de definir um nome de projeto personalizado e substituir esse nome, para que o mesmo `compose.yaml`arquivo possa ser implantado duas vezes na mesma infraestrutura, sem alterações, apenas passando um nome distinto.

Em seguida, você interage com seu aplicativo Compose por meio da CLI do Compose . Comandos como docker compose upsão usados ​​para iniciar o aplicativo, enquanto docker compose downpara e remove os contêineres.

## O arquivo Compose

O caminho padrão para um arquivo Compose é `compose.yaml`(preferencial) ou `compose.yml` colocado no diretório de trabalho. O Compose também oferece suporte `docker-compose.yaml` para `docker-compose.yml` compatibilidade com versões anteriores. Se ambos os arquivos existirem, o Compose preferirá o canonical `compose.yaml`.

Você pode usar [fragmentos](https://docs.docker.com/compose/compose-file/10-fragments/) e [extensões](https://docs.docker.com/compose/compose-file/11-extension/) para manter seu arquivo Compose eficiente e fácil de manter.

Vários arquivos do Compose podem ser mesclados para definir o modelo do aplicativo. A combinação de arquivos YAML é implementada anexando ou substituindo elementos YAML com base na ordem do arquivo Compose que você definiu. Atributos e mapas simples são substituídos pelo arquivo Compose de ordem mais alta, as listas são mescladas por anexação. Os caminhos relativos são resolvidos com base na pasta pai do primeiro arquivo do Compose, sempre que os arquivos complementares mesclados estiverem hospedados em outras pastas. Como alguns elementos do arquivo Compose podem ser expressos como strings únicas ou objetos complexos, as mesclagens se aplicam ao formulário expandido. Para obter mais informações, consulte Trabalhar com vários arquivos do Compose

Se quiser reutilizar outros arquivos do Compose ou fatorar partes do modelo do seu aplicativo em arquivos separados do Compose, você também pode usar `include`. Isso é útil se o seu aplicativo Compose depender de outro aplicativo gerenciado por uma equipe diferente ou precisar ser compartilhado com outras pessoas.

## Exemplo ilustrativo

O exemplo a seguir ilustra os conceitos do Compose descritos acima. O exemplo não é normativo.

Considere um aplicativo dividido em um aplicativo web front-end e um serviço back-end.

O frontend é configurado em tempo de execução com um arquivo de configuração HTTP gerenciado pela infraestrutura, fornecendo um nome de domínio externo e um certificado de servidor HTTPS injetado pelo armazenamento secreto seguro da plataforma.

O back-end armazena dados em um volume persistente.

Ambos os serviços se comunicam entre si em uma rede isolada de camada posterior, enquanto o frontend também está conectado a uma rede de camada frontal e expõe a porta 443 para uso externo.

![Arquitetura da Aplicação](https://docs.docker.com/compose/images/compose-application.webp)

O aplicativo de exemplo é composto pelas seguintes partes:

- 2 serviços, apoiados por imagens Docker: webappedatabase
- 1 segredo (certificado HTTPS), injetado no frontend
- 1 configuração (HTTP), injetada no frontend
- 1 volume persistente, anexado ao back-end
- 2 redes

```yaml

services:
  frontend:
    image: example/webapp
    ports:
      - "443:8043"
    networks:
      - front-tier
      - back-tier
    configs:
      - httpd-config
    secrets:
      - server-certificate

  backend:
    image: example/database
    volumes:
      - db-data:/etc/data
    networks:
      - back-tier

volumes:
  db-data:
    driver: flocker
    driver_opts:
      size: "10GiB"

configs:
  httpd-config:
    external: true

secrets:
  server-certificate:
    external: true

networks:
  # The presence of these objects is sufficient to define them
  front-tier: {}
  back-tier: {}

```


[Tutorial](https://docs.docker.com/compose/gettingstarted/)