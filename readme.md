[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[![NPM][npm-download-image]][npm-url]

# Migrating
Common migrator for Sequelize | Knex ... more coming.

It will run latest migration OR will rollback last migration.

### Install:
```
npm i -g migrating
```
### Usage:
```
migrating <direction> <orm> <database> <connectoin_url>

params:
- direction: up | down
- orm: knex | sequelize
- database: pg | mysql (optional, default postgres)
- connectoin_url: postgres://user:password@host/database_name
```
### Example:
```
- migrating up knex postgres://postgres:12345@localhost/postgres
- migrating down knex postgres://postgres:12345@localhost/postgres
- migrating up sequelize postgres://postgres:12345@localhost/postgres
```

[npm-image]: https://img.shields.io/npm/v/migrating.svg
[npm-url]: https://www.npmjs.com/package/migrating
[npm-download-image]: https://nodei.co/npm/migrating.png?downloads=true&downloadRank=true
[downloads-image]: https://img.shields.io/npm/dm/migrating.svg
[downloads-url]: https://www.npmjs.com/package/migrating
