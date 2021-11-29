### Project Description ###

This is an example of project based on Cypress.
The project contains:
1) API testing examples of: https://reqres.in/
2) UI testing examples of https://www.xe.com/currencyconverter/ and https://store.google.com/


Testing data is generated randomly using "chance" library or taken from appropriate fixtures.

Note: Some of API tests are failed. Failures show problems in the web-services under test.



## 1. Prerequisites
Before running test you should have NodeJS installed NodeJS on your system:
https://nodejs.org/en/download/

## 2. Running of auto-tests locally

In order to run testing script at your own machine perform the following instructions:
#### 2.1 Load the project from the GitHub
Project URL: https://github.com/in7hesky/js-cypress  
For example, you may load the project using the command line:
```
git clone git@github.com:in7hesky/js-cypress.git
```
#### 2.2 Install components
As soon as project is loaded, go to the root and perform command:
```
npm install
```
It will install all components based on package.json file into node_modules folder.
#### 2.3 As soon as components are loaded you may run testing scripts. 
##### 2.3.1 Run all tests


To run all tests in Chrome:
```
npx cypress run -b chrome
```

In order to get the report in the Cypress Dashboard you should add some more parameters:

```
npx cypress run -b chrome --record --key <key>
```
**--record** means that transfer results to the Cypress Dashboard is on. 
**--key** parameter followed by value  is used for access 
to project in the Cypress Dashboard.

So, the command above will run testing scrips in Chrome and will create the report in the Cypress 
Dashboard. 

To do the same in a headless mode (Electron) use the following command:
```
npx cypress run --record --key <key>
```

##### 2.3.2 Run single test file
Cypress provides the **Test Runner** that allows you to run testing files separately and see 
the execution process:

To open it use the following command:
```
npx cypress open
```
In the Test Runner you will see the list of testing files. You may click any of them and execution 
tests within a single it would be started in a separate window. 

#### 3. Reporting

##### 3.1 Results are loaded into the Cypress Dashboard
Link for the reporting project: https://dashboard.cypress.io/projects/17nc5n/runs
Please, log in with **your** credentials - since the project is public you will be able to see results and report 
into this project in case of running of tests at your local env with the default key.

**Extras**: You may also use `Jenkinsfile` to integrate running tests with **Jenkins**. This file is configured to run
tests in parallel by default.  
Refer to https://www.jenkins.io/doc/book/pipeline/ in case you want to find out more about `Jenkinsfile` usage.