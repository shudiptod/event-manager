-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: event_manager
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `start_at` datetime DEFAULT NULL,
  `end_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Demo Event','2022-11-05 06:59:01','2022-11-10 06:59:01'),(8,'Bangla Seminar','2022-11-07 06:59:01','2022-11-10 06:59:01'),(9,'IELTS Seminar','2022-11-07 06:59:01','2022-11-10 06:59:01'),(11,'Demo Event 2','2023-11-07 00:59:01','2023-11-30 00:59:01'),(12,'Demo Event 3','2023-11-07 00:59:01','2023-11-30 00:59:01'),(13,'Demo Event 4','2023-11-07 00:59:01','2023-11-30 00:59:01'),(14,'Demo Event 5','2023-11-07 00:59:01','2023-11-30 00:59:01'),(15,'Demo Event 6','2023-11-07 00:59:01','2023-11-30 00:59:01');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `workshop_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2baf1f924253b0c50a636f33e6f` (`workshop_id`),
  CONSTRAINT `FK_2baf1f924253b0c50a636f33e6f` FOREIGN KEY (`workshop_id`) REFERENCES `workshops` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'Shudipto','shudiptod@gmail.com',2),(2,'Ahsan','ahsan@gmail.com',2),(3,'Aziz','az@gmail.com',4),(5,'Zubaid','az@gmail.com',2),(6,'Zubaida','awz@gmail.com',2),(7,'Zia','zia@gmail.com',2),(8,'Ken','adams@gmail.com',2),(9,'Demo user','demo@mail.com',11),(10,'Demo user','demo@mail.com',12),(11,'Demo user','demo@mail.com',13),(12,'Demo user','demo@mail.com',10),(13,'New User','new@mail.com',3);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workshops`
--

DROP TABLE IF EXISTS `workshops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workshops` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `start_at` datetime DEFAULT NULL,
  `end_at` datetime DEFAULT NULL,
  `event_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_272ca9a9ec75ad552d815ce9fee` (`event_id`),
  CONSTRAINT `FK_272ca9a9ec75ad552d815ce9fee` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workshops`
--

LOCK TABLES `workshops` WRITE;
/*!40000 ALTER TABLE `workshops` DISABLE KEYS */;
INSERT INTO `workshops` VALUES (2,'IELTS Listening Workshop','An important part of your IELTS writing mark includes idea organization, easy-to-understand language, and standard writing conventions. Your writing needs to be clearly written and follow a certain style. More specifically, you need well-written paragraphs to get a higher IELTS mark.','2022-11-07 06:59:01','2022-11-10 06:59:01',9),(3,'Bangla Shahitto','Bangla amader matrivasha','2022-11-08 00:59:01','2022-11-08 01:59:01',8),(4,'Bangla Shahitto Advanced','Bangla amader matrivasha','2022-11-08 00:59:01','2022-11-08 01:59:01',8),(5,'BBA Advanced','DEMO BBA Workshop','2022-12-08 00:59:01','2022-12-08 01:59:01',8),(6,'Demo Workshop 1','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',11),(7,'Demo Workshop 12','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',11),(8,'Demo Workshop 2','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',11),(9,'Demo Workshop 3','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',12),(10,'Demo Workshop 31','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',12),(11,'Demo Workshop 32','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',12),(12,'Demo Workshop 33','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',12),(13,'Demo Workshop 4','This is a demo workshop','2023-11-08 00:59:01','2023-11-09 00:59:01',13);
/*!40000 ALTER TABLE `workshops` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20 18:40:26
