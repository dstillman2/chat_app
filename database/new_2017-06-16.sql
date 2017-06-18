# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: new
# Generation Time: 2017-06-16 15:20:12 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table account_id
# ------------------------------------------------------------

DROP TABLE IF EXISTS `account_id`;

CREATE TABLE `account_id` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `account_id` WRITE;
/*!40000 ALTER TABLE `account_id` DISABLE KEYS */;

INSERT INTO `account_id` (`id`)
VALUES
	(1);

/*!40000 ALTER TABLE `account_id` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `config`;

CREATE TABLE `config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) DEFAULT NULL,
  `uuid` varchar(45) DEFAULT NULL,
  `config` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;

INSERT INTO `config` (`id`, `account_id`, `uuid`, `config`)
VALUES
	(1,1,'d0c5781a-dc4d-456c-a75c-e526cff95935','{\"initialNode\":1,\"isDraggable\":true,\"hasCircularTabbing\":true,\"minWidth\":350,\"minHeight\":400,\"title\":\"Chat with us\",\"theme\":\"test-theme\",\"nodes\":{\"1\":{\"type\":\"survey\",\"width\":350,\"height\":470,\"content\":[{\"id\":\"aieojvxz\",\"type\":\"breadcrumbs\",\"links\":[{\"name\":\"Home\",\"linkTo\":2},{\"name\":\"Existing \",\"linkTo\":1},{\"name\":\"Mobile\",\"linkTo\":1}]},{\"id\":\"a3ifjao2\",\"type\":\"heading\",\"textNode\":\"Please enter the information below:\"},{\"id\":\"3nfsjkaef\",\"type\":\"form\",\"fields\":[{\"id\":\"k3oalwkd\",\"type\":\"textbox\",\"label\":\"First Name\",\"placeholder\":\"ex. Mary\",\"validate\":true},{\"id\":\"k3oalwks\",\"type\":\"textbox\",\"label\":\"Last Name\",\"placeholder\":\"ex. Ann\",\"validate\":true}]},{\"id\":\"oaseofia\",\"type\":\"button\",\"text\":\"Chat Now\",\"linkToNode\":2}]},\"2\":{\"type\":\"chat\",\"width\":400,\"height\":470,\"content\":[]}}}');

/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_id
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_id`;

CREATE TABLE `user_id` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
