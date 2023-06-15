const exress = require('express')
const PORT = process.env.PORT || 5000

const app = exress()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => console.log(`server starting http://localhost:${PORT}/`))
