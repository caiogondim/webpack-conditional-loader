<img src="http://rawgit.com/caiogondim/webpack-conditional-loader/master/logo/banner.svg" width="100%" />

# webpack-conditional-loader

<div>
  <a href="https://www.npmjs.com/package/webpack-conditional-loader"><img src="https://img.shields.io/npm/v/webpack-conditional-loader.svg" /></a>
</div>

<br>

Inspired by [C conditionals directive](https://gcc.gnu.org/onlinedocs/gcc-3.0.2/cpp_4.html),
conditional loader decides if a given block should be included in the final bundle.

Useful for removing instrumentation code and making your final production bundle smaller (therefore
faster).

## Installation

```bash
npm install --save-dev webpack-conditional-loader
```

## Usage

### In your `webpack.config.js`

Put `webpack-conditional-loader` as the last loader in the array, so it will process the code before
all others.

```js
module: {
  rules: [{
    test: /\.js$/,
    use: ['babel-loader', 'webpack-conditional-loader']
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
`DEVELOPMENT`, removing unnecessary code from your production bundle.

The same technique can be used to prevent loading packages in the production bundle.

```js
// #if process.env.NODE_ENV !== 'BUILD'
import reduxLogger from 'redux-logger'
// #endif
```

You can pass variables as options to the loader:

```js
// webpack.config.js
module: {
  rules: [{
    test: /\.js$/,
    use: [
      'babel-loader',
      {
        loader: 'webpack-conditional-loader',
        options: {
          isReady: true
        }
    ]
  }]
}
```
```js
// myFile.js
// #if isReady
console.log(`I'm ready!`)
// #endif

```

## Credits
- [GCC C conditional documentation](https://gcc.gnu.org/onlinedocs/gcc-3.0.2/cpp_4.html)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
