# Front-Analytics

## Objectives

You can analyse your project styles (.scss) evolution between commits using a Metabase dashboard.

## How we do that

We use Docker (docker-compose) to compose a set of containers:

| Container     | Objective                                        |
| ------------- | ----------------------------------------------   |
| Postgres      | Save analytics data                              |
| Metabase      | Show analytics charts                            |
| Dockerfile    | Nodejs prepared container to execute index.ts.   |


## About index.ts

This script go through all git commits and save all that have at least 1 change on any .scss file.


You need to specify *BASE_DIR* env to able Dockerfile copy repository folder.

## Environment variables

- **BASE_DIR** => Git repository dir