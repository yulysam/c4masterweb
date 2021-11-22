const mongoose = require('mongoose');

const URI = 'mongodb+srv://andres:12345678Q@cluster0.jmdaw.mongodb.net/MasterDB?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;