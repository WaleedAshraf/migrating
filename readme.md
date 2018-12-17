# Migrating
Common migrator for Sequelize | Knex ... more coming.

It will run latest migration OR will rollback last migration.

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
