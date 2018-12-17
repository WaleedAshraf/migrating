'use strict'

const execSync = require('child_process').execSync
const direction = process.argv[2] // [up/down]
const orm = process.argv[3] // [sequelize|knex]
const database = process.argv[5] ? process.argv[4] : 'pg' // pg | mysql2
const connection = process.argv[5] ? process.argv[5] : process.argv[4] // [postgres://user:password@host/database_name]
let ormPackage = orm == 'sequelize' ? 'sequelize-cli' : orm

const runCommand = command => {
  console.log(`running command:`, command)
  execSync(command, {stdio: 'inherit'})
}

runCommand(`npm install ${database}`)

if (orm == 'sequelize') {
  runCommand(`npm install ${orm}`)
  runCommand(`npm install ${ormPackage}`)
  if (direction == 'up') runCommand(`node_modules/.bin/sequelize db:migrate --url ${connection}`)
  else if (direction == 'down') runCommand(`node_modules/.bin/sequelize db:migrate:undo --url ${connection}`)
} else if (orm == 'knex') {
  runCommand(`npm install ${orm}`)
  if (direction == 'up') runCommand(`node_modules/.bin/knex migrate:latest --client=pg --connection='${connection}' --migrations-directory=./migrations`)
  else if (direction == 'down') runCommand(`node_modules/.bin/knex migrate:rollback --client=pg --connection='${connection}' --migrations-directory=./migrations`)
}
