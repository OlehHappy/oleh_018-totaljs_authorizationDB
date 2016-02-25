var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/myapp');
// mongoose.connect(F.config.database);
mongoose.connect(CONFIG('database'));

global.mongoose = mongoose;
