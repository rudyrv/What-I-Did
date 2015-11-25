-- MySQL Workbench Synchronization
-- Generated: 2015-11-19 12:23
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Abuelo

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER SCHEMA `acrasyst_whatidid`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `acrasyst_whatidid`.`horario` (
  `inicio` INT(11) NOT NULL,
  `fin` VARCHAR(45) NULL DEFAULT NULL,
  `lugar` VARCHAR(45) NULL DEFAULT NULL,
  `evaluacion` INT(11) NULL DEFAULT NULL,
  `frecuencia` INT(11) NULL DEFAULT NULL,
  `actividad` VARCHAR(45) NULL DEFAULT NULL,
  `usuario` VARCHAR(80) NULL DEFAULT NULL,
  PRIMARY KEY (`inicio`),
  INDEX `usuario_idx` (`usuario` ASC),
  CONSTRAINT `usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `acrasyst_whatidid`.`usuario` (`nombre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;

CREATE TABLE IF NOT EXISTS `acrasyst_whatidid`.`usuario` (
  `nombre` VARCHAR(80) NOT NULL,
  `clave` VARCHAR(30) NULL DEFAULT NULL,
  `correo` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`nombre`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
