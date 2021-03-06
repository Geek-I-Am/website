const process = require('process')

const { query, Client } = require('faunadb')
const collection = require('./collection')
const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async function (event) {
    const { id } = event
    console.log(`Function 'read' invoked. Read id: ${id}`)
    return client
        .query(query.Get(query.Ref(query.Collection(collection.name), id)))
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}
