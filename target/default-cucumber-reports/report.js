$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/nuix/calc/features/All_functionalities.feature");
formatter.feature({
  "name": "All functionalities",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Verifying numbers work",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies all numbers work on the calculator",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_all_numbers_work_on_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Typing multiple zeros",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"0000000\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Typing multiple zeros before a number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"00000007\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying decimal point works in an operation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"2.1 + 2\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"4.1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying subtraction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"3 - 1\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying addition",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"3 + 1\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Division",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"10 / 2\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Division of a negative number by a positive number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"-4 / 2\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"-2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicking multiplication sign multiple times",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"2 × 3\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtracting two negative integers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@allFunctionalities"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the Calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_is_on_the_Calculator_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user performs the following operation \"-9 - -4\"",
  "keyword": "When "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_performs_the_following_operation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies the result is \"-5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: \nResult verification failed.\nExpected result: -5\nActual result: -13\n expected:\u003c-[5]\u003e but was:\u003c-[13]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat nuix.calc.pages.CalculatorPage.verifyResult(CalculatorPage.java:210)\n\tat nuix.calc.stepDefinitions.Calculator_StepDefinition.the_user_verifies_the_result_is(Calculator_StepDefinition.java:40)\n\tat ✽.The user verifies the result is \"-5\"(file:///Users/abdallah/Desktop/Nuix_Calculator/src/test/resources/nuix/calc/features/All_functionalities.feature:58)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});