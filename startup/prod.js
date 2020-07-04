const helmet = require('helemt');
const compression = require('compression');

module.exports = function(app) {
    app.use(helmet());
    app.use(compression());
    
}