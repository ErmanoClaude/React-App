import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import renderer from './src/helpers/renderer';
import helmet from 'helmet';
import webConfig from './webConfig.json'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build/public'))// this makes it publically avaliable
app.use(helmet());

app.enable('trust proxy');
app.use(express_enforces_ssl());


app.get('*',(req,res)=>{
    const context = {};
    const html = renderer(req, context);
    res.send(html)
})

app.listen(PORT, ()=>{
    console.log(`This app is running on PORT ${PORT}`);
})




