@allFunctionalities @regression
Feature: All functionalities

    # fails in staging due to the following line of code this.currentInput += '6'
  @smokeTest
  Scenario: Verifying numbers work
    Given The user is on the Calculator app
    Then The user verifies all numbers work on the calculator

  Scenario: Typing multiple zeros
    Given The user is on the Calculator app
    When The user performs the following operation "0000000"
    Then The user verifies the result is "0"

  Scenario: Typing multiple zeros before a number
    Given The user is on the Calculator app
    When The user performs the following operation "00000007"
    Then The user verifies the result is "7"

    # Fails in staging due to decimals getting truncated
  Scenario: Verifying decimal point works in an operation
    Given The user is on the Calculator app
    When The user performs the following operation "2.1 + 2"
    Then The user verifies the result is "4.1"

  Scenario: Verifying subtraction
    Given The user is on the Calculator app
    When The user performs the following operation "3 - 1"
    Then The user verifies the result is "2"

  Scenario: Verifying addition
    Given The user is on the Calculator app
    When The user performs the following operation "3 + 1"
    Then The user verifies the result is "4"

  Scenario: Verifying Division
    Given The user is on the Calculator app
    When The user performs the following operation "10 / 2"
    Then The user verifies the result is "5"

    # fails in staging due to the following code tempResult = tempResult * -1; line 123
  Scenario: Verifying Division of a negative number by a positive number
    Given The user is on the Calculator app
    When The user performs the following operation "-4 / 2"
    Then The user verifies the result is "-2"

    # fails in staging due to tempResult += 2; being added in code line 115
  Scenario: Clicking multiplication sign multiple times
    Given The user is on the Calculator app
    When The user performs the following operation "2 × 3"
    Then The user verifies the result is "6"

    # fails in prod
    # #fails in staging
  Scenario: Subtracting two negative integers
    Given The user is on the Calculator app
    When The user performs the following operation "-9 - -4"
    Then The user verifies the result is "-5"
