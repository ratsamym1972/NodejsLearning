const app = require('express');
const server = require('http').server(app);
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
    task : {
        type : String,
        required : true,
    },
    created_at: {type: Date, default: Date.now },
    updated_at : Date
});

var Task = mongoose.model('Task', Task);

//var app = module.exports = express.createServer();
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express, errorHandler({ dumpExpections: true, showStack: true}));
    mongoose.connect('mongodb://locahost/todo_development');
    app.listen(3000);
});

console.log('Express server listening on port %d in %s mode', app.address().port, app.settings.env);


