# GreenThumb Frontend Challenge - React

Este é um projeto boilerplate para o desafio Frontend GreenThumb.


## Objetivo

O objetivo deste projeto é criar uma aplicação web que consuma a API de produtos fictícios **GreenThumb** e permita filtrar os produtos por categoria. Além disso, o projeto deve ser responsivo e seguir o design do Figma proposto para Desktop e Mobile.

Todas as imagens e ícones utilizados no projeto estão disponíveis na pasta `assets`.

Fique à vontade para utilizar qualquer biblioteca que desejar.


## Design

Acesse o design do projeto no Figma: [GreenThumb Frontend Challenge](https://www.figma.com/file/PPwt3dphLXVJeteJpxNNkx/frontend-challenge-01)


## API

A API de produtos fictícios **GreenThumb** está disponível em:

```
https://front-br-challenges.web.app/api/v2/green-thumb/
```

A API aceita os seguintes parâmetros:

- `sun`: `no`, `low` ou `high`
- `water`: `rarely`, `regularly` ou `daily`
- `pets`: `true` ou `false`

Exemplo de requisição:

```bash
curl https://front-br-challenges.web.app/api/v2/green-thumb/?sun=high&water=regularly&pets=false
```

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Euphorbia eritrea",
    "sun": "high",
    "water": "rarely",
    "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
    "price": 25,
    "toxicity": false,
    "staff_favorite": true
  },
  {
    "id": 2,
    "name": "Succulent Bowl",
    "sun": "high",
    "water": "rarely",
    "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
    "price": 30,
    "toxicity": false,
    "staff_favorite": false
  },
  ...
]
```


## O que será avaliado

- Conhecimento de React
- Conhecimento de CSS
- Conhecimento de responsividade
- Conhecimento de consumo de API


### Bônus

Você pode se destacar se utilizar:

- Boa organização de pastas e arquivos no projeto (arquivos de estilos, testes, consultas à API, etc)
- Boas práticas de desenvolvimento
- Utilização de TypeScript (tipagem de componentes (props), objetos provenientes da API, etc)
- Utilização de bibliotecas de estilização (styled-components ou emotion, etc)
- Testes usando Jest ou React Testing Library
- Uso de variável de ambiente para a configuração da API


## Instruções

1. Faça um fork deste repositório
2. Rode `yarn` para instalar as dependências
3. Rode `yarn dev` para iniciar o projeto
4. Acesse `http://localhost:5173` para ver o projeto rodando (ou a porta que o Vite mostrar no terminal)