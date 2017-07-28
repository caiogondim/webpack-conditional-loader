var a = 1

// #if process.env.NODE_ENV === 'PRODUCTION'
a =+ 1
// #endif

// #if 1 === 2
a =+ 1
// #endif

module.exports = a
