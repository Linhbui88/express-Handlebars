const express= require('express')
const exphbs  = require('express-handlebars')
const controllers= require('./controllers')


const PORT = 3011
const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(controllers)






app.listen(PORT, () =>{console.log(`Listening to http://localhost:${PORT}`)})

