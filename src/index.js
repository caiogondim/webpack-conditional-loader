function searchBlocks(sourceByLine) {
  const blocks = []
  let current = 0
  const startBlock = /\/\/\ #if.*/
  const endBlock = /\/\/\ #endif.*/

  while (current < sourceByLine.length) {
    if (startBlock.test(sourceByLine[current])) {
      blocks[current] = {
        type: 'begin'
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

    current +=1
  }

  return blocks
}

function commentCodeInsideBlocks(sourceByLine, blocks) {
  let currentLine = 0
  let currentBlock
  let action = ''
  let sourceByLineTransformed = sourceByLine.slice()

  while (currentLine < sourceByLine.length) {
    currentBlock = blocks[currentLine]

    if (currentBlock && currentBlock.type === 'begin') {
      action = 'comment'
      currentLine += 1
      continue
    }

    if (currentBlock && currentBlock.type === 'end') {
      action = ''
      currentLine += 1
      continue
    }

    if (action === 'comment') {
      sourceByLineTransformed[currentLine] = commentLine(sourceByLine[currentLine])
    }

    currentLine += 1
  }

  return sourceByLineTransformed
}

function commentLine(line) {
  return `// ${line}`
}

module.exports = function(source) {
  try {
    const sourceByLine = source.split('\n')
    const blocks = searchBlocks(sourceByLine)
    // const truthyBlocks = getTruthyBlocks()
    const transformedSource = commentCodeInsideBlocks(sourceByLine, blocks)
    return transformedSource.join('\n')
  } catch (error) {
    console.error(error)
    throw error
  }
}
