# Web Scrapping de Quotes

Projeto desenvolvido como Challenge para a vaga de Estágio na empresa CMTecnologia. Os Quotes foram retirados da página de quotes do site https://quotes.toscrape.com/. As citações não são de minha autoria.

## 👨‍💻 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.



### 📋 Pré-requisitos

Para executar o código foi utilzada a IDE VSCode e a linguagem JavaScript. É necessário possuir um navegador moderno e uma IDE com o interpretador JaavScript( V8)



### 🔧 Instalação

O código foi desenvolvido em JavaScript utilizando algumas bibliotecas  em meu ambiente de desenvolvimento:

Para iniciar, instale o node ◾ v. 16.13.1.

```
https://nodejs.org/pt-br/download/
```

O gerenciador de pacotes em JS npm em sua versão 8.2.0. Para inicializá-lo, execute o comando abaixo no seu terminal:

```
npm init
```

O express é a biblioteca utilizada para levantar um servidor local e acessar protocolos http:

```
npm install express
```

Pupetter também é necessário para manipular páginas web com o chromium em NodeJS:

```
npm i puppeteer
```
Além disso, é necessário que se instale o Nodemon para executar as configurações do servidor:

```
npm install -g nodemon
```

Para iniciar a aplicação e salvar os dados em um arquivo JSON na pasta de instalação, execute o comando abaixo:

```
npm dev run
```

Para obter o arquivo JSON com estrutura de dados necessária, acessar em algum navegador a url abaixo:

```
http://localhost:3000
```

## 📦 Desenvolvimento

Esse código é uma alternativa para se realizar scrapping dos quotes da página "Quotes to Scrape". Essa não é a unica forma de se fazer e o código está sempre em revisão com o objetivo de refatorá-lo, tornando-o mais limpo e performático.

O arquivo gerado segue a estrutura de dados abaixo:

```
{
    "text":"String"
    "author":"String"
    "tags":[...,"String"]
}
```

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [NodeJs](https://nodejs.org/en/docs/) - Javascript runtime 
* [NPM](https://docs.npmjs.com/) - Gerente de Dependência/Softwares
* [Puppeteer](https://pptr.dev/) - Usada para gerenciar o Chromium
* [Express](https://expressjs.com/pt-br/4x/api.html) - Framework NodeJs para aplicativos web
*[Nodemon](https://www.npmjs.com/package/nodemon) - Build e restart de aplicação NodeJs





## ✒️ Autores


* **João Pedro** - *Trabalho Inicial* - [João Pedro Marques Mourão](https://github.com/joaopedro-marques)




## 🎁 Expressões de gratidão


* Agradeço a oportunidade de CM Technologia por possibilitar realizar esse desafio.


---
Read me adaptado de:
[Armstrong Lohãns](https://gist.github.com/lohhans) 😊