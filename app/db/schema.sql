DROP DATABASE  IF EXISTS friend_db;

CREATE DATABASE friend_db;

USE friend_db;

CREATE TABLE question (
	id INT NOT NULL AUTO_INCREMENT,
	question VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);



CREATE TABLE respond (
	id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	question_id INT NOT NULL,
	likes INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES question(id)
);

add time:
ALTER TABLE respond ADD d TIMESTAMP;