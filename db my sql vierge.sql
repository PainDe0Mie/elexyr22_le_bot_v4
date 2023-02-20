-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 20 fév. 2023 à 16:12
-- Version du serveur : 10.5.18-MariaDB-0+deb11u1
-- Version de PHP : 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `s4_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `kicks`
--

CREATE TABLE `kicks` (
  `userID` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `kickID` varchar(255) NOT NULL,
  `guildID` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mutes`
--

CREATE TABLE `mutes` (
  `userID` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `muteID` varchar(255) NOT NULL,
  `guildID` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `nitro`
--

CREATE TABLE `nitro` (
  `guildID` varchar(255) NOT NULL,
  `guildownerID` varchar(255) NOT NULL,
  `member` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `nsfw`
--

CREATE TABLE `nsfw` (
  `channel` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `guild` varchar(255) NOT NULL,
  `bot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `serveur`
--

CREATE TABLE `serveur` (
  `guildID` varchar(255) NOT NULL,
  `prefix` varchar(255) NOT NULL,
  `raid` varchar(255) NOT NULL,
  `welcome` varchar(255) NOT NULL,
  `welcomeID` varchar(255) NOT NULL,
  `logID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `temp`
--

CREATE TABLE `temp` (
  `sanctionID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userID` varchar(255) NOT NULL,
  `xp` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `afk` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `verif`
--

CREATE TABLE `verif` (
  `channel` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `guild` varchar(255) NOT NULL,
  `bot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `warns`
--

CREATE TABLE `warns` (
  `userID` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `warnID` varchar(255) NOT NULL,
  `guildID` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `mutes`
--
ALTER TABLE `mutes`
  ADD PRIMARY KEY (`muteID`);

--
-- Index pour la table `nsfw`
--
ALTER TABLE `nsfw`
  ADD PRIMARY KEY (`guild`);

--
-- Index pour la table `serveur`
--
ALTER TABLE `serveur`
  ADD PRIMARY KEY (`guildID`);

--
-- Index pour la table `temp`
--
ALTER TABLE `temp`
  ADD PRIMARY KEY (`sanctionID`);

--
-- Index pour la table `verif`
--
ALTER TABLE `verif`
  ADD PRIMARY KEY (`guild`);

--
-- Index pour la table `warns`
--
ALTER TABLE `warns`
  ADD PRIMARY KEY (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
