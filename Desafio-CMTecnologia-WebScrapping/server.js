const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');


const server = express();



server.get('/',  async(request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const numeroDePaginas = 10;
    let quotesFinal = []; 
    
    for (let i = 1 ; i <= numeroDePaginas ; i++) {
        await page.goto(`https://quotes.toscrape.com/page/${i}`);    
        
        let quotes = await page.evaluate(() => 
        Array.from(document.querySelectorAll(`.quote`))
            .map(complete => ({
                text: complete.querySelector('.text').innerText.trim(),
                author: complete.querySelector('.author').innerText.trim(),
        })) )

        const tags = await page.evaluate(() => 
        Array.from(document.querySelectorAll(`.tags`))
        .map(partner => partner.innerText.trim()));    
        
        const space = ' ';     
        tags.forEach((valor, i) => tags[i] = valor.split(space));
        tags.forEach((value) =>  value.shift());


        quotes.forEach((e, i) => quotes[i].tags = tags[i]);
        quotesFinal = quotesFinal.concat(quotes);
    }    

    let json = JSON.stringify(quotesFinal);
    fs.writeFile('Quotes.json', json, (err) => err ? console.log(err) : console.log("Arquivo Salvo!"));
    

    await browser.close();
    response.send(quotesFinal);
})

const port = 3000;
server.listen(port, () => {
    console.log(`
    Servidor subiu com sucesso!
    acesse em http://localhost:${port}`)
});


