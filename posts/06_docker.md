---
icon: edit
date: 2023-11-24 20:40:00.00 -3
tag:
  - docker
  - container
category:
  - aula
order: 6
---

# Docker

[^RUN_PODMAN]

## Podman vs Docker

Podman e Docker são duas plataformas de contêineres que permitem aos usuários executar e gerenciar aplicativos em contêineres. Ambos são projetados para criar, implantar e gerenciar aplicativos em contêineres, mas existem algumas diferenças entre eles.

Uma das principais diferenças entre o Podman e o Docker é que o Podman é executado sem um daemon em segundo plano. Em vez disso, ele é executado como um processo do usuário normal, o que significa que ele não requer privilégios elevados e é considerado mais seguro por alguns usuários. Por outro lado, o Docker é executado com um daemon em segundo plano que precisa de privilégios elevados para operar.

Outra diferença significativa é que o Podman usa o CRI-O como seu mecanismo de contêiner, enquanto o Docker usa o seu próprio mecanismo de contêiner. Isso pode levar a algumas diferenças na maneira como os contêineres são criados e gerenciados.

No que diz respeito à compatibilidade, o Docker é mais amplamente adotado e suportado pela comunidade, enquanto o Podman ainda está em desenvolvimento e pode não ter suporte para todos os recursos e funcionalidades disponíveis no Docker.

Em termos de recursos e desempenho, o Podman e o Docker são comparáveis. Ambos suportam o isolamento do contêiner, o que significa que os aplicativos em contêiner podem ser executados sem interferir no sistema operacional host.

Em resumo, o Podman e o Docker têm suas próprias vantagens e desvantagens, e a escolha entre eles dependerá das necessidades e preferências específicas de cada usuário. O Podman pode ser uma boa opção para usuários que valorizam a segurança e a compatibilidade com padrões abertos, enquanto o Docker pode ser uma escolha melhor para usuários que valorizam a ampla adoção da comunidade e a familiaridade com a plataforma. Em última análise, cabe a cada usuário decidir qual plataforma atende melhor às suas necessidades.

### Play With Docker 


[https://www.docker.com/101-tutorial/](https://www.docker.com/101-tutorial/)

[https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/](https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/)

```console
docker run -it --rm -d -p 8080:80 --name web nginx
```

## Referências

<!-- @include: ../bib/bib.md -->
