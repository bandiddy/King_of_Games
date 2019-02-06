DROP DATABASE IF EXISTS gameking_db;
CREATE DATABASE gameking_db;

CREATE TABLE score(
    user_id VARCHAR(20) NOT NULL,
    snake INTEGER(255) NOT NULL,
    asteroids INTEGER(255) NOT NULL,
    racecar INTEGER(255) NOT NULL,
);