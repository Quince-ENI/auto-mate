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

-- Listage de la structure de la table automatebdd. clef
CREATE TABLE IF NOT EXISTS `clef` (
  `idClef` int(11) NOT NULL AUTO_INCREMENT,
  `Lieu` varchar(50) NOT NULL,
  `Disponibilité` tinyint(4) NOT NULL DEFAULT 0,
  `idImmat` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idClef`),
  KEY `FK_clef_voiture` (`idImmat`),
  CONSTRAINT `FK_clef_voiture` FOREIGN KEY (`idImmat`) REFERENCES `voiture` (`Immatriculation`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table automatebdd. responsable
CREATE TABLE IF NOT EXISTS `responsable` (
  `idResponsable` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL DEFAULT '',
  `Prenom` varchar(50) NOT NULL DEFAULT '',
  `Email` varchar(100) NOT NULL DEFAULT '',
  `Telephone` int(10) NOT NULL DEFAULT 0,
  `Password` varchar(15) NOT NULL DEFAULT '0',
  `Site` int(11) DEFAULT NULL,
  PRIMARY KEY (`idResponsable`),
  KEY `FK_responsable_site` (`Site`),
  CONSTRAINT `FK_responsable_site` FOREIGN KEY (`Site`) REFERENCES `site` (`idSite`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table automatebdd. site
CREATE TABLE IF NOT EXISTS `site` (
  `idSite` int(11) NOT NULL AUTO_INCREMENT,
  `Libelle` varchar(255) NOT NULL DEFAULT '',
  `Adresse` varchar(255) NOT NULL DEFAULT '',
  `Ville` varchar(255) NOT NULL DEFAULT '',
  `Departement` int(3) NOT NULL DEFAULT 0,
  `Code Postal` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idSite`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table automatebdd. trajet
CREATE TABLE IF NOT EXISTS `trajet` (
  `idTrajet` int(11) NOT NULL AUTO_INCREMENT,
  `Ville depart` varchar(50) NOT NULL DEFAULT '',
  `Ville arrivée` varchar(50) NOT NULL DEFAULT '',
  `Heure départ` datetime DEFAULT NULL,
  `Heure arrivée` datetime DEFAULT NULL,
  `Places restantes` int(11) NOT NULL DEFAULT 0,
  `Covoiturage` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idTrajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table automatebdd. utilisateur
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Matricule` int(7) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL DEFAULT '0',
  `Prenom` varchar(50) NOT NULL DEFAULT '0',
  `Email` varchar(100) NOT NULL DEFAULT '0',
  `Telephone` int(10) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Voiture` varchar(50) DEFAULT NULL,
  `Trajet` int(11) DEFAULT NULL,
  PRIMARY KEY (`Matricule`),
  KEY `FK_utilisateur_voiture` (`Voiture`),
  KEY `FK_utilisateur_trajet` (`Trajet`),
  CONSTRAINT `FK_utilisateur_trajet` FOREIGN KEY (`Trajet`) REFERENCES `trajet` (`idTrajet`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_utilisateur_voiture` FOREIGN KEY (`Voiture`) REFERENCES `voiture` (`Immatriculation`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table automatebdd. voiture
CREATE TABLE IF NOT EXISTS `voiture` (
  `Immatriculation` varchar(7) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Marque` varchar(50) DEFAULT NULL,
  `Modele` varchar(50) DEFAULT NULL,
  `Couleur` varchar(50) DEFAULT NULL,
  `Nombre de Portes` int(11) NOT NULL DEFAULT 0,
  `Disponibilité` tinyint(4) NOT NULL DEFAULT 0,
  `Nombre de Km` int(11) NOT NULL DEFAULT 0,
  `Trajet` int(11) DEFAULT NULL,
  `Clef` int(11) DEFAULT NULL,
  PRIMARY KEY (`Immatriculation`),
  KEY `FK_voiture_trajet` (`Trajet`),
  KEY `FK_voiture_clef` (`Clef`),
  CONSTRAINT `FK_voiture_clef` FOREIGN KEY (`Clef`) REFERENCES `clef` (`idClef`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_voiture_trajet` FOREIGN KEY (`Trajet`) REFERENCES `trajet` (`idTrajet`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
