-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2021 at 11:50 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `NAME` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `BIRTHDATE` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `GENDER` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`NAME`, `EMAIL`, `BIRTHDATE`, `PASSWORD`, `GENDER`) VALUES
('Mishal', 'mishal@gmail.com', '19/06/1996', 'mish@#$%', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `occupation` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`username`, `email`, `phone`, `occupation`) VALUES
('Kawsar Hamid', 'kawsar111@gmail.com', '01919888777', 'Student'),
('Fahmida Rashid', 'fahmida222@gmail.com', '01876543212', 'Teacher'),
('Parag Gosh', 'parag333@gmail.com', '01712233445', 'Worker'),
('Natasha Sabiha', 'sabiha555@gmail.com', '01414455663', 'Student'),
('Ariyan Jahangir', 'jahangir444@gmail.com', '01991887734', 'Worker');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(12) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `address` varchar(150) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `firstname`, `lastname`, `address`, `contact`) VALUES
(1, 'Kauwa', 'Hamin', 'Chadpur', '0191188776'),
(2, 'Turin', 'Fahmi', 'Rajshahi', '0178333398'),
(4, 'Fardin', 'Shadhin', 'Sherpur', '0198888'),
(6, 'Ariyan', 'Khan', 'Bashudhara', '01712233441'),
(16, 'Natasha', 'Sabiha', 'Chittagong', '018888888888'),
(17, 'Khaled', 'Ahmed', 'Uttara', '019777777777'),
(18, 'Naila', 'Nabila', 'Mirpur', '017122223333');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
