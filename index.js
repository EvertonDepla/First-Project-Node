const express = require('express')
const port = 3000

const app = express()
app.use(express.json())

app.get('/users', (request, response) => {
    
    const{name, age} = request.body
    console.log(request.body)

    return response.json({ name, age})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})