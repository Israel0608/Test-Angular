-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 01, 2024 at 04:52 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `events`
--
CREATE DATABASE IF NOT EXISTS `events` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `events`;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `eventId` int(11) NOT NULL,
  `typeId` int(11) NOT NULL,
  `startEvent` datetime NOT NULL,
  `description` varchar(200) NOT NULL,
  `address` varchar(300) NOT NULL,
  `coming` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`eventId`, `typeId`, `startEvent`, `description`, `address`, `coming`) VALUES
(1, 2, '2024-04-09 17:00:00', 'Amazing Birthday', 'kaplan 40 holon', 0),
(2, 3, '2024-05-17 18:00:00', 'Amazing Marriage', 'Kaplan 40 Tel Aviv', 0),
(3, 1, '2024-02-01 23:00:00', 'Amazing party', 'Sokolov 80 Tel Aviv', 0);

-- --------------------------------------------------------

--
-- Table structure for table `eventsType`
--

CREATE TABLE `eventsType` (
  `typeId` int(11) NOT NULL,
  `typeName` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventsType`
--

INSERT INTO `eventsType` (`typeId`, `typeName`) VALUES
(1, 'party'),
(2, 'Birthday'),
(3, 'Marriage');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`eventId`),
  ADD KEY `typeId` (`typeId`);

--
-- Indexes for table `eventsType`
--
ALTER TABLE `eventsType`
  ADD PRIMARY KEY (`typeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `eventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `eventsType`
--
ALTER TABLE `eventsType`
  MODIFY `typeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `eventsType` (`typeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
