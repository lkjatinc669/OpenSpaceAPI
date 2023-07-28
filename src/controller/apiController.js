module.exports = {
    get : (req, res) => {
        res.json({"status":"online", "request-type":"GET"})
    },
    post : (req, res) => {
        res.json({"status":"online", "request-type":"POST"})
    },
    put : (req, res) => {
        res.json({"status":"online", "request-type":"PUT"})
    },
    delete : (req, res) => {
        res.json({"status":"online", "request-type":"DELETE"})
    }
}