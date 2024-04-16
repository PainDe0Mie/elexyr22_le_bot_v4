-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 51.83.43.233
-- Généré le : mar. 16 avr. 2024 à 15:13
-- Version du serveur : 10.8.3-MariaDB-1:10.8.3+maria~bionic
-- Version de PHP : 8.1.12-1ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `s1803_git`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `userID` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `statut` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ban`
--

CREATE TABLE `ban` (
  `guildID` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `bans`
--

CREATE TABLE `bans` (
  `userID` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `banID` varchar(255) NOT NULL,
  `guildID` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `bump`
--

CREATE TABLE `bump` (
  `guildID` varchar(255) NOT NULL,
  `statut` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `cenure`
--

CREATE TABLE `cenure` (
  `userID` varchar(255) NOT NULL,
  `statut` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `gban`
--

CREATE TABLE `gban` (
  `user` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `joins`
--

CREATE TABLE `joins` (
  `userID` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ping`
--

CREATE TABLE `ping` (
  `userID` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `pingeur`
--

CREATE TABLE `pingeur` (
  `timer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `rmd`
--

CREATE TABLE `rmd` (
  `userID` varchar(255) NOT NULL,
  `timer` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `salon`
--

CREATE TABLE `salon` (
  `guildID` varchar(255) NOT NULL,
  `statut` varchar(255) NOT NULL,
  `channelID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `logID` varchar(255) NOT NULL,
  `vocID` varchar(255) NOT NULL,
  `ticketID` varchar(255) NOT NULL,
  `roleID` varchar(255) NOT NULL,
  `roleBOT` varchar(255) NOT NULL,
  `antilien` varchar(255) NOT NULL,
  `spam` varchar(255) NOT NULL,
  `mention` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `soutien`
--

CREATE TABLE `soutien` (
  `guildID` varchar(255) NOT NULL,
  `statut` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

CREATE TABLE `ticket` (
  `guildID` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userID` varchar(255) NOT NULL,
  `xp` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `afk` varchar(255) NOT NULL,
  `voiceTime` varchar(255) NOT NULL,
  `bump` varchar(255) NOT NULL,
  `event` varchar(255) NOT NULL,
  `robot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `verif`
--

CREATE TABLE `verif` (
  `channel` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `guild` varchar(255) NOT NULL,
  `bot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `wl`
--

CREATE TABLE `wl` (
  `userID` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `mutes`
--
ALTER TABLE `mutes`
  ADD PRIMARY KEY (`muteID`);

--
-- Index pour la table `serveur`
--
ALTER TABLE `serveur`
  ADD PRIMARY KEY (`guildID`);

--
-- Index pour la table `verif`
--
ALTER TABLE `verif`
  ADD PRIMARY KEY (`guild`);

--
-- Index pour la table `warns`
--
ALTER TABLE `warns`
  ADD PRIMARY KEY (`warnID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
