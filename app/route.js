// grab the model

var Expert = require('./models/CRUD');

module.exports = function(app) {
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/Expert', function(req, res) {
          // use mongoose to get all experts in the database
          Expert.find(function(err, experts) {
            if(err) {
              res.send(err);
            }
            res.json(experts); //return all experts in JSON format
          });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

}
