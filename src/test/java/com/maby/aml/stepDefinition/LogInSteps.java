package com.maby.aml.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LogInSteps {
    WebDriver driver;

    @Given("^user on login page$")
    public void userOnLoginPage() {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Define WebDriver to use chrome brows
        driver = new ChromeDriver();
        //maximize browser window
        driver.manage().window().maximize();
        //launch ecommerce website
        driver.get("http://demo-m2.bird.eu/");
        //click on signin
        driver.findElement(By.linkText("Sign In")).click();

    }

    @When("^user enters \"([^\"]*)\"$")
    public void userEnters(String Email) throws Throwable {
        driver.findElement(By.id("email")).sendKeys(Email);
    }

    @And("^user enters there \"([^\"]*)\"$")
    public void userEntersThere(String Password) throws Throwable {
        driver.findElement(By.id("pass")).sendKeys(Password);
    }

    @And("^user clicks to login$")
    public void userClicksToLogin() {
        driver.findElement(By.cssSelector("#send2 > span")).click();
    }

    @Then("^then user account page is displayed$")
    public void thenUserAccountPageIsDisplayed() {
        driver.close();
        driver.quit();
    }


}
