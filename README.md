# Event-flow ![Em Andamento](https://img.shields.io/badge/status-em%20andamento-yellow)

Este projeto tem como objetivo desenvolver um sistema de backend para inscrição e indicação de eventos. A plataforma permitirá que os usuários se cadastrem em eventos e façam indicações, garantindo um fluxo organizado e eficiente de participação. Utilizamos tecnologias modernas para garantir escalabilidade, desempenho e segurança.

## Tecnologias
![Tecnologias](https://skillicons.dev/icons?i=nodejs,typescript,postgres,docker,redis)

## Índice

- [Event-flow ](#event-flow-)
  - [Tecnologias](#tecnologias)
  - [Índice](#índice)
  - [Sobre](#sobre)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Arquitetura](#arquitetura)

## Sobre
O **Event-flow** visa simplificar a gestão de participação em eventos, permitindo que os usuários se inscrevam e recomendem eventos a outras pessoas. O backend está sendo desenvolvido com foco em desempenho e escalabilidade, utilizando **Fastify**, **Drizzle ORM** para interação com o banco de dados PostgreSQL, **Redis** para caching e filas de processamento, e conteinerização via **Docker**.

## Funcionalidades

- **Cadastro e Autenticação de Usuários**
  Implementação de autenticação segura para controle de acessos.

- **Inscrição em Eventos**
  Permitir que os usuários se inscrevam em eventos de forma rápida e intuitiva.

- **Sistema de Indicação**
  Possibilidade de indicar eventos para outras pessoas através de convites personalizados.

- **Armazenamento e Gestião de Eventos**
  Registro de eventos com descrições, datas e capacidades de lotação.

- **Fila de Processamento com Redis**
  Utilização do Redis para gerenciar filas de tarefas e otimizar o processamento de dados.

- **API Rápida com Fastify**
  Estruturado para ser leve e eficiente, aproveitando as vantagens do Fastify.

- **Banco de Dados PostgreSQL**
  Persistência de dados estruturada e otimizada para consultas rápidas e seguras.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/PedrOliveiraM/back-eventflow.git
   ```

2. Instale as dependências:
   ```sh
   pnpm install
   ```

3. Configure o ambiente (crie um arquivo `.env` baseado no `.env.example`).

4. Suba os contêineres do Docker:
   ```sh
   docker-compose up -d
   ```

5. Rode as migrações do banco de dados:
   ```sh
   pnpm run migrate
   ```

## Uso

O sistema será utilizado por organizadores de eventos e participantes interessados em inscrições e indicações de eventos.

Para iniciar o servidor localmente:
```sh
pnpm run dev
```

## Arquitetura
![Arquitetura do Sistema](https://raw.githubusercontent.com/seu-usuario/event-flow/master/public/ArquiteturaDoSistema.png)

