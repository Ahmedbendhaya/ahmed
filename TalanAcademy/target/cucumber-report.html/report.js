$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Vérifier la fonctionnalité de connexion TALAN ACADEMY",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to TA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "We have access to TA",
  "keyword": "Given "
});
formatter.step({
  "name": "i click on the login button",
  "keyword": "When "
});
formatter.step({
  "name": "tap my \u003cmail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on SE CONNECTER",
  "keyword": "And "
});
formatter.step({
  "name": "my account must be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mail",
        "password"
      ]
    },
    {
      "cells": [
        "ahmed-baha-eddine.ben-dhaya@talan.com",
        "22080023Ahm@d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to TA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "We have access to TA",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "i click on the login button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "tap my ahmed-baha-eddine.ben-dhaya@talan.com and 22080023Ahm@d",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on SE CONNECTER",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "my account must be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});