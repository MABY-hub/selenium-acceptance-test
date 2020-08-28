$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Account LogIn",
  "description": "",
  "id": "account-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "log in with a valid username and password",
  "description": "",
  "id": "account-login;log-in-with-a-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@logIn"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters there \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks to login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "then user account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "account-login;log-in-with-a-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 18,
      "id": "account-login;log-in-with-a-valid-username-and-password;;1"
    },
    {
      "cells": [
        "ade@ade.com",
        "Abcd1234"
      ],
      "line": 19,
      "id": "account-login;log-in-with-a-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "log in with a valid username and password",
  "description": "",
  "id": "account-login;log-in-with-a-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@logIn"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"ade@ade.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters there \"Abcd1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks to login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "then user account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.userOnLoginPage()"
});
formatter.result({
  "duration": 17192424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ade@ade.com",
      "offset": 13
    }
  ],
  "location": "LogInSteps.userEnters(String)"
});
formatter.result({
  "duration": 331144100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 19
    }
  ],
  "location": "LogInSteps.userEntersThere(String)"
});
formatter.result({
  "duration": 126265900,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.userClicksToLogin()"
});
formatter.result({
  "duration": 6880694700,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.thenUserAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 4745675800,
  "status": "passed"
});
});