---
icon: edit
date: 2024-02-02 20:51:00.00 -3
tag:
  trabalho
category:
  - exercicio
order: 13
---

# Trabalho Semestral

Configuração de Ambiente Docker Swarm com Balanceamento de Carga e Redundância

## Objetivo

O objetivo deste trabalho é desenvolver habilidades práticas em DevOps, implementando um ambiente robusto usando Docker Swarm para hospedar uma aplicação web com balanceamento de carga, um banco de dados com redundância, e garantir a continuidade dos serviços mesmo quando um trabalhador do Swarm falhar.

## Passos do Projeto

1. **Configuração Inicial:**
   - Configure um cluster Docker Swarm com um nó de gerenciamento e pelo menos dois nós de trabalho.
   - Instale o Docker e o Docker Compose em todos os nós.

2. **Aplicação Web:**
   - Escolha uma aplicação web de sua preferência (pode ser simples, como uma página HTML, ou mais complexa, dependendo do nível de dificuldade desejado).
   - Dockerize a aplicação para que possa ser facilmente implantada no Swarm.

3. **Balanceamento de Carga:**
   - Utilize o Docker Swarm para criar um serviço que execute a aplicação web.
   - Configure o balanceamento de carga para distribuir as solicitações entre os nós de trabalho.
   - Demonstre que o balanceamento de carga está funcionando corretamente.

4. **Banco de Dados com Redundância:**
   - Escolha um banco de dados (por exemplo, MySQL ou PostgreSQL).
   - Configure um serviço de banco de dados no Swarm.
   - Garanta a redundância configurando replicação ou clustering para o banco de dados.
   - Teste a falha de um nó de trabalho para garantir que o banco de dados continue operando.

5. **Serviço Jenkins:**
   - Configure um serviço Jenkins no Docker Swarm.
   - Crie pipelines de integração contínua/desdobramento contínuo (CI/CD) para testar a aplicação web e o banco de dados.
   - Certifique-se de que os testes são executados automaticamente sempre que há uma alteração no código.

6. **Demonstração de Continuidade de Serviço:**
   - Simule a falha de um nó de trabalho no Swarm.
   - Mostre que a aplicação web continua funcionando e que o balanceamento de carga ajusta automaticamente o tráfego para os nós disponíveis.
   - Certifique-se de que o banco de dados mantém a integridade e disponibilidade após a falha do nó.

## Relatório Final:

Elabore um relatório que inclua a arquitetura do ambiente, os arquivos de configuração do Docker Compose, os comandos utilizados, e os resultados dos testes. Descreva as dificuldades encontradas e as soluções aplicadas.

### Apresentação:

Ao final do trabalho, faça uma documentação no github utilizando o markdown demonstrando o ambiente em funcionamento com prints da tela e os testes realizados.

Este projeto aborda aspectos essenciais de DevOps, como automação, integração contínua, orquestração de contêineres, e garantia de disponibilidade e redundância.

## Entrega

[Link pra entrega](https://classroom.github.com/a/FMOiKcvA)

## Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/eMDWA2ey0zY?si=XP6FoO-9Wj7r1Es_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ujAbn-oGR9I?si=K4PRqntZq_4ueg8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
