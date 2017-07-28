<img src="http://rawgit.com/caiogondim/webpack-conditional-loader/master/logo/banner.svg" width="100%" />

<h1 align="center">webpack-conditional-loader</h1>

<div align="center">
  <img src="http://travis-ci.org/caiogondim/webpack-conditional-loader.svg?branch=master" alt="Travis CI"> <img src="https://codecov.io/gh/caiogondim/webpack-conditional-loader/branch/master/graph/badge.svg" alt="Code coverage"> <a href="https://www.npmjs.com/package/conditional-loader"><img src="https://img.shields.io/npm/v/webpack-conditional-loader.svg" /></a>
</div>

## Installation

```bash
npm install --save-dev webpack-conditional-loader
```

## Usage

### In your `webpack.config.js`

```js
module: {
  rules: [{
    test: /\.js$/,
    use: ['conditional-loader']
  }]
}
```

Get an example config file [here](https://github.com/caiogondim/webpack-conditional-loader/blob/master/webpack.js)

### On your code

Use `// #if expression` and `// #endif` to wrap blocks of code you want to be removed if a given
predicate is false.

```js
// #if process.env.NODE_ENV === 'DEVELOPMENT'
console.log('lorem')
console.log('ipsum')
// #endif
```

In the example above, the code will be removed if the enviroment variable `NODE_ENV` is not
`DEVELOPMENT`, removing unnecessary code on your production bundle.

## Credits
- [GCC C conditional documentation](https://gcc.gnu.org/onlinedocs/gcc-3.0.2/cpp_4.html)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
