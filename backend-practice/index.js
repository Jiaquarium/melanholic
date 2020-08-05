import express from 'express';
import blog from './handler/blog.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

router.get('/blog', cors(corsOptions), blog.sortedBlog);

app.use(router);
app.listen(process.env.PORT || 8000, error => {
    if (error) {
        return console.log('Error occurred when trying to start Express server', error);
    }

    // eslint-disable-next-line no-console
    return console.log(
        'Express server listening on port %d in %s mode',
        process.env.PORT || 8000,
        app.settings.env
    );
})