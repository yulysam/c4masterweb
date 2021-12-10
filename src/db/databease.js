const mongoose = require('mongoose');

const URI = 'mongodb+srv://UsuarioTest:test21@cluster0.k9flr.mongodb.net/Proyectociclo4?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
module.exports = mongoose;