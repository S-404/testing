const axios = require('axios')
const mapArrayToString = require('../mapArrayToString/mapArrayToString')

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const postIds = response.data.map(item => item.id)
        return mapArrayToString(postIds)
    } catch (e) {

    }
}

module.exports = getData