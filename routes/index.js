const express = require("express");
const routes = express.Router();
const proyectoCont = require("../controllers/proyectoControl.js");

module.exports = function () {
  routes.get("/Calculos", proyectoCont.exercise);
  return routes;
};
