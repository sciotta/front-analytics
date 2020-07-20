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

This script go through a GIT repository cloned on ``/repo`` folder and check all git commit then persist in a relational database (postgres) all commits that have at least 1 change on any ``.scss`` file. Thereafter you can make any kind of analysis using metabase docker container (mapped to localhost:3030).

## How to use it (get started)

* Clone any repository into /repo folder

  ``E.g: git clone xxxxxxxx repo``

* ``make up``

* wait for all dependencies and script execution

* Open Metabase in your browser: http://localhost:3030

* In your first run, you`ll need to setup Metabase. Use these settings to link with postgres database:

  * **Host name**: fs_postgres
  * **Database name**: FRONTDB
  * **User name**: postgres
  * **Password**: postgres

## Hot to stop and delete containers

To stop and remove composed containers just run ``make down``

## TODO list

- Create envs for all settings;
- Make some tests;
- Fix docker images versions;