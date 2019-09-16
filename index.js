const fs = require('fs')
const createObjectFromCsv = require('./parser')

fs.readdir('./csvs', (err, files) => {
  if (err) {
    console.log(err);
  }
  
  for (const csv of files) {
    createObjectFromCsv(`./csvs/${csv}`)
  }
})
