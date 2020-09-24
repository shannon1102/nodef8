const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // app.get('/',(req,res)={
    //     res.render('home');
    // });
    app.use('/news', newsRouter);
    app.use('/site', siteRouter);
}
module.exports = route;
