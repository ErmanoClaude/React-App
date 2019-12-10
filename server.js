import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import renderer from './src/helpers/renderer';
import helmet from 'helmet';
import express_enforces_ssl from 'express-enforces-ssl';
import webConfig from './webConfig.json'
import force from "express-force-domain";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build/public'))// this makes it publically avaliable
app.use(helmet());

app.enable('trust proxy');
app.use(express_enforces_ssl());

//When testing comment this out
app.use(force(webConfig.customUrl))

app.get('*',(req,res)=>{
    const context = {};
    const html = renderer(req, context);
    res.send(html)
})

app.listen(PORT, ()=>{
    console.log(`This app is running on PORT ${PORT}`);
})




