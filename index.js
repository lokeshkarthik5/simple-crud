const express =  require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/products',productRoute)


app.get('/',(req,res) => {
    res.send("Hello from Node")
})


mongoose.connect('mongodb+srv://admin:eWH7IHwXe2B7456a@api.amiab64.mongodb.net/Node-Api?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected!')
    app.listen(3000,()=>{
        console.log('Server is running on port 3000')
    })
});
