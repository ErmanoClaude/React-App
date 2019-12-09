import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser'
import renderer from './src/helpers/renderer'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build/public'))// this makes it publically avaliable

app.get('*',(req,res)=>{
    const context = {};
    const html = renderer(req, context);
    res.send(html)
})

app.listen(PORT, ()=>{
    console.log(`This app is running on PORTs ${PORT}`);
})




