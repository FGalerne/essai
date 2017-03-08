
let express = require('express')
let app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
  response.render('pages/index', {test: 'ca marche ou pas'})
})

app.listen(8000)
