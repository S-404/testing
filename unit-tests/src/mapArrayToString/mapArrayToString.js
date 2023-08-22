const mapArrayToString = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(item => String(item))
}

module.exports = mapArrayToString