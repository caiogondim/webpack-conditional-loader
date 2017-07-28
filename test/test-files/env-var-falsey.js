let a = 1

// #if process.env.NODE_ENV === 'DEVELOPMENT'
a = 2
// #endif

module.exports = a
