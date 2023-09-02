-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.11.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour automatebdd
DROP DATABASE IF EXISTS `automatebdd`;
CREATE DATABASE IF NOT EXISTS `automatebdd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `automatebdd`;

-- Listage de la structure de la table automatebdd. key
DROP TABLE IF EXISTS `key`;
CREATE TABLE IF NOT EXISTS `key` (
  `idKey` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(50) NOT NULL,
  `available` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idKey`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.key : ~5 rows (environ)
DELETE FROM `key`;
/*!40000 ALTER TABLE `key` DISABLE KEYS */;
INSERT INTO `key` (`idKey`, `location`, `available`) VALUES
	(11, 'Paris', 1),
	(12, 'Lyon', 0),
	(13, 'Marseille', 1),
	(14, 'Toulouse', 1),
	(15, 'Bordeaux', 1);
/*!40000 ALTER TABLE `key` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. car
DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
  `idCar` int(11) NOT NULL AUTO_INCREMENT,
  `Immatriculation` varchar(7) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Marque` varchar(50) DEFAULT NULL,
  `Modele` varchar(50) DEFAULT NULL,
  `Couleur` varchar(50) DEFAULT NULL,
  `Nombre de Portes` int(11) NOT NULL DEFAULT 0,
  `Disponibilité` tinyint(4) NOT NULL DEFAULT 0,
  `Nombre de Km` int(11) NOT NULL DEFAULT 0,
  `key` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCar`),
  KEY `FK_car_key` (`key`),
  CONSTRAINT `FK_car_key` FOREIGN KEY (`key`) REFERENCES `key` (`idKey`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.car : ~5 rows (environ)
DELETE FROM `car`;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`idCar`, `Immatriculation`, `Type`, `Marque`, `Modele`, `Couleur`, `Nombre de Portes`, `Disponibilité`, `Nombre de Km`, `key`) VALUES
	(16, 'ABC123', 'Berline', 'Renault', 'Clio', 'Rouge', 5, 1, 10000, 11),
	(17, 'DEF456', 'SUV', 'Peugeot', '3008', 'Blanc', 5, 0, 5000, 12),
	(18, 'GHI789', 'Berline', 'Citroen', 'C4', 'Bleu', 5, 1, 8000, 13),
	(19, 'JKL012', 'Citadine', 'Toyota', 'Yaris', 'Vert', 3, 1, 7000, 14),
	(20, 'MNO345', 'SUV', 'Nissan', 'Qashqai', 'Gris', 5, 1, 6000, 15);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `registration_number` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `mail` varchar(100) NOT NULL DEFAULT '0',
  `tel` varchar(10) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` enum('user','responsable') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`registration_number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.user : ~11 rows (environ)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`registration_number`, `name`, `first_name`, `mail`, `tel`, `password`, `role`) VALUES
	(11, 'Dubois', 'Pierre', 'pierre.dubois@mail.com', '1234567890', 'password', 'responsable'),
	(12, 'Leroy', 'Marie', 'marie.leroy@mail.com', '9876543210', 'password', 'user'),
	(13, 'Moreau', 'Jean', 'jean.moreau@mail.com', '2345678901', 'password', 'user'),
	(14, 'Roy', 'Julie', 'julie.roy@mail.com', '3456789012', 'pass123', 'responsable'),
	(15, 'Lavoie', 'David', 'david.lavoie@mail.com', '4567890123', 'pass123', 'user'),
	(16, 'Gauthier', 'Sophie', 'sophie.gauthier@mail.com', '5678901234', 'pass123', 'user'),
	(17, 'Martinez', 'Alexandre', 'alexandre.martinez@mail.com', '6789012345', 'pass123', 'responsable'),
	(18, 'Tremblay', 'Émilie', 'emilie.tremblay@mail.com', '7890123456', 'pass123', 'user'),
	(19, 'Smith', 'Michael', 'michael.smith@mail.com', '8901234567', 'pass123', 'responsable'),
	(20, 'Johnson', 'Jessica', 'jessica.johnson@mail.com', '9012345678', 'pass123', 'user'),
	(21, 'Chen', 'David', 'david.chen@mail.com', '0123456789', 'pass123', 'responsable');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;



-- Listage de la structure de la table automatebdd. site
DROP TABLE IF EXISTS `site`;
CREATE TABLE IF NOT EXISTS `site` (
  `idSite` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `departement` int(3) NOT NULL DEFAULT 0,
  `postal_code` int(5) NOT NULL DEFAULT 0,
  `idResponsable` int(11) NOT NULL,
  PRIMARY KEY (`idSite`),
  KEY `FK_site_user` (`idResponsable`),
  CONSTRAINT `FK_site_user` FOREIGN KEY (`idResponsable`) REFERENCES `user` (`registration_number`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.site : ~5 rows (environ)
DELETE FROM `site`;
/*!40000 ALTER TABLE `site` DISABLE KEYS */;
INSERT INTO `site` (`idSite`, `name`, `address`, `city`, `departement`, `postal_code`, `idResponsable`) VALUES
	(1, 'Site A', '123 Rue du Site A', 'Paris', 75, 75000, 11),
	(2, 'Site B', '456 Rue du Site B', 'Lyon', 69, 69000, 17),
	(3, 'Site C', '789 Rue du Site C', 'Marseille', 13, 13000, 19),
	(4, 'Site D', '101 Rue du Site D', 'Toulouse', 31, 31000, 14),
	(5, 'Site E', '202 Rue du Site E', 'Bordeaux', 33, 33000, 21);
/*!40000 ALTER TABLE `site` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. travel
DROP TABLE IF EXISTS `travel`;
CREATE TABLE IF NOT EXISTS `travel` (
  `idRoute` int(11) NOT NULL AUTO_INCREMENT,
  `departure_city` varchar(50) NOT NULL DEFAULT '',
  `arrival_city` varchar(50) NOT NULL DEFAULT '',
  `departure_time` datetime DEFAULT NULL,
  `arrival_time` datetime DEFAULT NULL,
  `remaining_seats` int(11) NOT NULL DEFAULT 0,
  `carpooling` tinyint(4) NOT NULL DEFAULT 0,
  `user` int(11) DEFAULT NULL,
  `idCar` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRoute`) USING BTREE,
  KEY `FK_route_user` (`user`),
  KEY `FK_route_car` (`idCar`),
  CONSTRAINT `FK_route_car` FOREIGN KEY (`idCar`) REFERENCES `car` (`idCar`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_route_user` FOREIGN KEY (`user`) REFERENCES `user` (`registration_number`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.travel : ~5 rows (environ)
DELETE FROM `travel`;
/*!40000 ALTER TABLE `travel` DISABLE KEYS */;
INSERT INTO `travel` (`idRoute`, `departure_city`, `arrival_city`, `departure_time`, `arrival_time`, `remaining_seats`, `carpooling`, `user`, `idCar`) VALUES
	(1, 'Paris', 'Lyon', '2023-07-02 10:00:00', '2023-07-02 14:00:00', 2, 1, 11, 16),
	(2, 'Lyon', 'Paris', '2023-07-02 16:00:00', '2023-07-02 20:00:00', 4, 0, 12, 17),
	(3, 'Paris', 'Marseille', '2023-07-03 09:00:00', '2023-07-03 15:00:00', 3, 1, 13, 18),
	(4, 'Toulouse', 'Bordeaux', '2023-07-04 08:00:00', '2023-07-04 12:00:00', 1, 0, 14, 19),
	(5, 'Marseille', 'Nice', '2023-07-05 10:00:00', '2023-07-05 15:00:00', 5, 1, 15, 20);
/*!40000 ALTER TABLE `travel` ENABLE KEYS */;


/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
