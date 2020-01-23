import express, {json} from 'express';
import morgan from 'morgan';
import bodyParser from "body-parser";

const app=express();

//Importing routes
import gitRoutes from './routes/git'
import projectRoutes from './routes/projects';
import usersRoutes from './routes/users';
import homeRoutes from './routes/home';
import phpRoutes from './routes/php';
import saveRoutes from './routes/save';
import slackRoutes from './routes/slack';
import smsRoutes from './routes/sms';
import mailRoutes from './routes/mail';
import mastodonRoutes from './routes/mastodon';
import zipRoutes from './routes/zip';
//middlewares
app.use(morgan('dev'));
app.use(json());
// support parsing of application/json type post data
app.use(bodyParser.json({limit: '10mb', extended: true}));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));


//app.get('/',function(req,res){res.redirect('/login')});
app.get('/login',function(req,res){res.redirect('/login.html')});

app.use(express.static(__dirname + '/public'));

//routes
app.use('/api/projects',projectRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/users/login',usersRoutes);
app.use('/home',homeRoutes);
app.use('/php',phpRoutes);
app.use('/save',saveRoutes);
app.use('/repos',gitRoutes);
app.use('/slack',slackRoutes);
app.use('/sms',smsRoutes);
app.use('/mail',mailRoutes);
app.use('/mastodon',mastodonRoutes);
app.use('/zip',zipRoutes);






export default app;
