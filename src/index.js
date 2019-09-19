/* eslint-disable no-eval */
const os = require('os');

function getPredicate (line) {
  return /\/\/ #if (.*)/.exec(line)[1]
}

function searchBlocks (sourceByLine) {
  const blocks = []
  let current = 0
  const startBlock = /\/\/ #if .*/
  const endBlock = /\/\/ #endif$/

  while (current < sourceByLine.length) {
    if (startBlock.test(sourceByLine[current])) {
      blocks[current] = {
        type: 'begin',
        predicate: getPredicate(sourceByLine[current])
      }

      current += 1
      continue
    }

    if (endBlock.test(sourceByLine[current])) {
      blocks[current] = {
        type: 'end'
      }

      current += 1
      continue
    }

    current += 1
  }

  return blocks
}

function getTruthyBlocks (blocks) {
  const truthyBlocks = blocks.slice()
  let i = 0
  let action = ''

  while (i < truthyBlocks.length) {
    if (truthyBlocks[i] && truthyBlocks[i].type === 'begin') {
      if (eval(truthyBlocks[i].predicate)) {
        truthyBlocks[i] = undefined
        action = 'deleteNextEndBlock'
      }
    }

    if (truthyBlocks[i] && truthyBlocks[i].type === 'end' && action === 'deleteNextEndBlock') {
      truthyBlocks[i] = undefined
      action = ''
    }

    i += 1
  }

  return truthyBlocks
}

function commentCodeInsideBlocks (sourceByLine, blocks) {
  let currentBlock
  let i = 0
  let action = ''
  let sourceByLineTransformed = sourceByLine.slice()

  while (i < sourceByLine.length) {
    currentBlock = blocks[i]

    if (currentBlock && currentBlock.type === 'begin') {
      action = 'commentLine'
      i += 1
      continue
    }

    if (currentBlock && currentBlock.type === 'end') {
      action = ''
      i += 1
      continue
    }

    if (action === 'commentLine') {
      sourceByLineTransformed[i] = commentLine(sourceByLine[i])
    }

    i += 1
  }

  return sourceByLineTransformed
}

function commentLine (line) {
  return `// ${line}`
}

function getEOL(text) {
    const m = text.match(/\r\n|\n/g);
    const u = m && m.filter(a => a === '\n').length;
    const w = m && m.length - u;
    if (u === w) {
        return os.EOL; // use the OS default
    }
    return u > w ? '\n' : '\r\n';
}

module.exports = function (source) {
  try {
    const sourceByLine = source.split(getEOL(source))
    const blocks = searchBlocks(sourceByLine)
    const truthyBlocks = getTruthyBlocks(blocks)
    const transformedSource = commentCodeInsideBlocks(sourceByLine, truthyBlocks)

    return transformedSource.join('\n')
  } catch (error) {
    console.error(error)
    throw error
  }
}
