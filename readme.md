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

## How to use it (get started)

* Clone any repository into /repo folder

  ```E.g: git clone xxxxxxxx repo```

* make up

* wait for all dependencies

* Open Metabase in your browser: http://localhost:3030