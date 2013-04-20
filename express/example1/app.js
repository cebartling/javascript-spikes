var express = require('express'),
    users = require('./routes/users');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    // 'default', 'short', 'tiny', 'dev'
    app.use(express.bodyParser());
});

app.get('/api/users', users.findAll);
app.get('/api/users/:id', users.findById);
app.post('/api/users', users.addUser);
app.put('/api/users/:id', users.updateUser);
app.delete('/api/users/:id', users.deleteUser);

app.listen(3000);
console.log('Listening on port 3000');

