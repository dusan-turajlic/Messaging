# Messanger

This is a simple POC for pub/sub communication using SSE and HATEOS REST API.
 
## FAQ
Yes I know its spelled wrong, but its on purpose because `Messenger` is already a Facebook product

## Setup 

IDK, I'm running valet and the react app is just plane react, not even laravel mix just plane `npx create-react-app`

You need:
- valet or other laravel things that work with laravel
- node >= 14
- npm >= 6
- php >= 8
- mysql or MariaDB

just remember to copy the `.env.example` and change the values accordingly
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<name-of-database-you-have-created>
DB_USERNAME=<your-db-username> <!-- usaly `root` -->
DB_PASSWORD=<your-db-password-if-you-have-one> <!-- if root you propobly don't have a password -->
```

