'use strict'

const CSV = require('comma-separated-values')
const fs = require('fs')

const createObjectFromCsv = (path) => {
    return fs.createReadStream(path)
      .on('data', (row) => {
        const data =  row.toString()
        const rows = []
        const columns = []
        new CSV(data).forEach(array => {
          if (columns.length < 1) {
              array.forEach((cell, idx) => {
                  columns.push({
                      accessor: `key-${idx}`,
                      Header: cell,
                  })
              })
          } else {
              const row = {}
              array.forEach((cell, idx) => {
                  row[`key-${idx}`] = cell
              })
              rows.push(row)
          }
      })
      console.log(columns, rows)
      return { rows, columns }
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
    });
  }

  module.exports = createObjectFromCsv