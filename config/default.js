module.exports = {
    port: 3002,
    session: {
        secret: 'nodeJsBlog',
        key: 'nodeJsBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/expressBlog'
}
