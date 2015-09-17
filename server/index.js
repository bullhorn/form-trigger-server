/**
 * Module dependencies.
 */
import http from 'http';
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer'; 
import middleware from './middleware';


//Configure Express
const app = express();
app.server = http.createServer(app);
app.enable('trust proxy');
app.use(function(req,res,next){
    if(req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1 ){
        req.headers['content-type'] = 'application/x-www-form-urlencoded';        
    }
    next(); 
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(multer().array());
//app.use(cookieParser());

// internal middleware
app.use(middleware());

app.use(express.static(path.resolve(__dirname + '/../public'))); 

app.server.listen(process.env.PORT || 9090);
console.log(`Started on port ${app.server.address().port}`);

export default app;