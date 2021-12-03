const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');

const server = express();


server.get('/',  async(request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    

    await page.goto('https://quotes.toscrape.com/');

    const QuotesText = await page.evaluate(() => 
        Array.from(document.querySelectorAll(`.text`))
        .map(partner => partner.innerText.trim())
    )

    const Authors = await page.evaluate(() => 
        Array.from(document.querySelectorAll(`.author`))
        .map(partner => partner.innerText.trim())
    );

    const Tags = await page.evaluate(() => 
    Array.from(document.querySelectorAll(`.tags`))
    .map(partner => partner.innerText.trim()));

    const space = ' ';
    Tags.forEach((valor, i) => Tags[i] = valor.split(space));
    Tags.forEach((value) =>  value.shift());


    let PaginaQuote = new Array();
    for ( let i = 0 ; i < Tags.length; i++) {
        iterandoObjeto = new Object();
        iterandoObjeto = {
            "Texto" : `${QuotesText[i]}`,
            "Autor" : `${Authors[i]}`,
            "Tags" : `${Tags[i]}`
        }
        PaginaQuote.push(iterandoObjeto)
    }

    let json = JSON.stringify(PaginaQuote);
    fs.writeFile('Quotes.json', json, (err) => err ? console.log(err) : console.log("Arquivo Salvo!"));
    

    await browser.close();
    response.send(PaginaQuote);
})

const port = 3000;
server.listen(port, () => {
    console.log(`
    Servidor subiu com sucesso!
    acesse em http://localhost:${port}`)
});


