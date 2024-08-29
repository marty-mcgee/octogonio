// [MM] djent
//module.exports = require('./configureStore-djent');

// [MM] chat
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
