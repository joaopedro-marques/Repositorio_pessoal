const { response } = require("express");
const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");

const server = express();

let quotesFinal = [];

server.get("/", async (request, response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const numeroDePaginas = 10;
  

  for (let i = 1; i <= numeroDePaginas; i++) {
    await page.goto(`https://quotes.toscrape.com/page/${i}`);

    let quotes = await page.evaluate(() =>
      Array.from(document.querySelectorAll(`.quote`)).map((complete) => ({
        text: complete.querySelector(".text").innerText.trim(),
        author: complete.querySelector(".author").innerText.trim(),
      }))
    );

    let tags = await page.evaluate(() =>
      Array.from(document.querySelectorAll(`.tags`)).map((partner) =>
        partner.innerText.trim()
      )
    );

    tags = transformTags(tags);
    quotesFinal = concatObjects(quotes, tags);
    
  }

  createJson(quotesFinal);

  await browser.close();
  response.send("Verificar pasta de instalação, arquivo Quotes.json gerado!");
});

function createJson(quotes) {
  let json = JSON.stringify(quotes);
  fs.writeFile("Quotes.json", json, (err) =>
    err ? console.log(err) : console.log("Arquivo Salvo!")
  );
}

function transformTags(tags) {
  const space = " ";
  tags.forEach((valor, i) => (tags[i] = valor.split(space)));
  tags.forEach((value) => value.shift());
  return tags;
}

function concatObjects (quotes, tags){
    quotes.forEach((e, i) => (quotes[i].tags = tags[i]));
    quotesFinal = quotesFinal.concat(quotes);
    return quotesFinal;
}

const port = 3000;
server.listen(port, () => {
  console.log(`
    Servidor subiu com sucesso!
    acesse em http://localhost:${port}`);
});
