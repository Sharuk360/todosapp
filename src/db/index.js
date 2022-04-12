const { connect } = require("mongoose");

const uri = "mongodb+srv://sharuk_3000:heRVMspZNPO9GK8M@cluster0.u69mm.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)