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
CREATE DATABASE IF NOT EXISTS `automatebdd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `automatebdd`;

-- Listage de la structure de la table automatebdd. car
CREATE TABLE IF NOT EXISTS `car` (
  `idCar` int(11) NOT NULL AUTO_INCREMENT,
  `Immatriculation` varchar(7) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Marque` varchar(50) DEFAULT NULL,
  `Modele` varchar(50) DEFAULT NULL,
  `Color` varchar(50) DEFAULT NULL,
  `Doors` int(11) NOT NULL DEFAULT 0,
  `Disponibility` tinyint(4) NOT NULL DEFAULT 0,
  `kilometer` int(11) NOT NULL DEFAULT 0,
  `key` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCar`),
  KEY `FK_car_key` (`key`),
  CONSTRAINT `FK_car_key` FOREIGN KEY (`key`) REFERENCES `key` (`idKey`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.car : ~5 rows (environ)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`idCar`, `Immatriculation`, `Type`, `Marque`, `Modele`, `Color`, `Doors`, `Disponibility`, `kilometer`, `key`) VALUES
	(16, 'ABC123', 'Berline', 'Renault', 'Clio', 'Rouge', 5, 1, 10000, 11),
	(17, 'DEF456', 'SUV', 'Peugeot', '3008', 'Blanc', 5, 0, 5000, 12),
	(18, 'GHI789', 'Berline', 'Citroen', 'C4', 'Bleu', 5, 1, 8000, 13),
	(19, 'JKL012', 'Citadine', 'Toyota', 'Yaris', 'Vert', 3, 1, 7000, 14),
	(20, 'MNO345', 'SUV', 'Nissan', 'Qashqai', 'Gris', 5, 1, 6000, 15);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. key
CREATE TABLE IF NOT EXISTS `key` (
  `idKey` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(50) NOT NULL,
  `available` tinyint(4) NOT NULL DEFAULT 0,
  `car` int(11) DEFAULT NULL,
  PRIMARY KEY (`idKey`) USING BTREE,
  KEY `FK_key_car` (`car`),
  CONSTRAINT `FK_key_car` FOREIGN KEY (`car`) REFERENCES `car` (`idCar`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.key : ~5 rows (environ)
/*!40000 ALTER TABLE `key` DISABLE KEYS */;
INSERT INTO `key` (`idKey`, `location`, `available`, `car`) VALUES
	(11, 'Paris', 1, 16),
	(12, 'Lyon', 0, 17),
	(13, 'Marseille', 1, 18),
	(14, 'Toulouse', 1, 19),
	(15, 'Bordeaux', 1, 20);
/*!40000 ALTER TABLE `key` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. responsable
CREATE TABLE IF NOT EXISTS `responsable` (
  `idResponsable` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `mail` varchar(100) NOT NULL DEFAULT '',
  `tel` int(10) NOT NULL DEFAULT 0,
  `password` varchar(15) NOT NULL DEFAULT '0',
  `site` int(11) DEFAULT NULL,
  PRIMARY KEY (`idResponsable`),
  KEY `FK_responsable_site` (`site`),
  CONSTRAINT `FK_responsable_site` FOREIGN KEY (`site`) REFERENCES `site` (`idSite`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.responsable : ~5 rows (environ)
/*!40000 ALTER TABLE `responsable` DISABLE KEYS */;
INSERT INTO `responsable` (`idResponsable`, `name`, `first_name`, `mail`, `tel`, `password`, `site`) VALUES
	(1, 'Dupont', 'Jean', 'jean.dupont@mail.com', 123456789, 'password', 1),
	(2, 'Martin', 'Marie', 'marie.martin@mail.com', 987654321, 'password', 2),
	(3, 'Durand', 'Pierre', 'pierre.durand@mail.com', 654321987, 'password', 3),
	(4, 'Gagnon', 'Sophie', 'sophie.gagnon@mail.com', 123456789, 'pass123', 4),
	(5, 'Lefebvre', 'Thomas', 'thomas.lefebvre@mail.com', 987654321, 'pass123', 5);
/*!40000 ALTER TABLE `responsable` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. route
CREATE TABLE IF NOT EXISTS `route` (
  `idRoute` int(11) NOT NULL AUTO_INCREMENT,
  `departure_city` varchar(50) NOT NULL DEFAULT '',
  `arrival_city` varchar(50) NOT NULL DEFAULT '',
  `departure_time` datetime DEFAULT NULL,
  `arrival_time` datetime DEFAULT NULL,
  `remaining_seats` int(11) NOT NULL DEFAULT 0,
  `carpooling` tinyint(4) NOT NULL DEFAULT 0,
  `user` int(11) DEFAULT NULL,
  `car` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRoute`) USING BTREE,
  KEY `FK_route_user` (`user`),
  KEY `FK_route_car` (`car`),
  CONSTRAINT `FK_route_car` FOREIGN KEY (`car`) REFERENCES `car` (`idCar`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_route_user` FOREIGN KEY (`user`) REFERENCES `user` (`registration_number`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.route : ~5 rows (environ)
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` (`idRoute`, `departure_city`, `arrival_city`, `departure_time`, `arrival_time`, `remaining_seats`, `carpooling`, `user`, `car`) VALUES
	(1, 'Paris', 'Lyon', '2023-07-02 10:00:00', '2023-07-02 14:00:00', 2, 1, 11, 16),
	(2, 'Lyon', 'Paris', '2023-07-02 16:00:00', '2023-07-02 20:00:00', 4, 0, 12, 17),
	(3, 'Paris', 'Marseille', '2023-07-03 09:00:00', '2023-07-03 15:00:00', 3, 1, 13, 18),
	(4, 'Toulouse', 'Bordeaux', '2023-07-04 08:00:00', '2023-07-04 12:00:00', 1, 0, 14, 19),
	(5, 'Marseille', 'Nice', '2023-07-05 10:00:00', '2023-07-05 15:00:00', 5, 1, 15, 20);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. site
CREATE TABLE IF NOT EXISTS `site` (
  `idSite` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `departement` int(3) NOT NULL DEFAULT 0,
  `postal_code` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idSite`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.site : ~5 rows (environ)
/*!40000 ALTER TABLE `site` DISABLE KEYS */;
INSERT INTO `site` (`idSite`, `name`, `address`, `city`, `departement`, `postal_code`) VALUES
	(1, 'Site A', '123 Rue du Site A', 'Paris', 75, 75000),
	(2, 'Site B', '456 Rue du Site B', 'Lyon', 69, 69000),
	(3, 'Site C', '789 Rue du Site C', 'Marseille', 13, 13000),
	(4, 'Site D', '101 Rue du Site D', 'Toulouse', 31, 31000),
	(5, 'Site E', '202 Rue du Site E', 'Bordeaux', 33, 33000);
/*!40000 ALTER TABLE `site` ENABLE KEYS */;

-- Listage de la structure de la table automatebdd. user
CREATE TABLE IF NOT EXISTS `user` (
  `registration_number` int(7) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `mail` varchar(100) NOT NULL DEFAULT '0',
  `tel` varchar(10) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`registration_number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table automatebdd.user : ~5 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`registration_number`, `name`, `first_name`, `mail`, `tel`, `password`) VALUES
	(11, 'Dubois', 'Pierre', 'pierre.dubois@mail.com', '1234567890', 'password'),
	(12, 'Leroy', 'Marie', 'marie.leroy@mail.com', '9876543210', 'password'),
	(13, 'Moreau', 'Jean', 'jean.moreau@mail.com', '2345678901', 'password'),
	(14, 'Roy', 'Julie', 'julie.roy@mail.com', '3456789012', 'pass123'),
	(15, 'Lavoie', 'David', 'david.lavoie@mail.com', '4567890123', 'pass123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
