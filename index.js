const express = require('express')
const app = express()
app.all('/:name', async (req, res) => {
    const data = await (await fetch(`https://www.instagram.com/${name}/?__a=1&__d=1`)).json();
    res.json(data);
})
app.listen(process.env.PORT || 3000)
