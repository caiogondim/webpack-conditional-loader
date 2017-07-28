let a = 1

// #if process.env.NODE_ENV === 'PRODUCTION'
a = 2
// #endif

module.exports = a
