CREATE TABLE commits (
  id VARCHAR(100) NOT NULL,
  author VARCHAR(250) NOT NULL,
  commited_at DATE NOT NULL,
  CONSTRAINT commits_pk PRIMARY KEY (id)
);

CREATE TABLE commit_files (
  id SERIAL NOT NULL,
  commit_id VARCHAR(100) REFERENCES commits(id),
  changes INTEGER,
  name VARCHAR(250),
  CONSTRAINT commit_files_pk PRIMARY KEY (id)
);

CREATE DATABASE metabase;