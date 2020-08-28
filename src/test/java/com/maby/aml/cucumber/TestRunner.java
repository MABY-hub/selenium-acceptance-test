package com.maby.aml.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature",
        glue = {"com.maby.aml.stepDefinition"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@logIn"}




)
public class TestRunner {


}
