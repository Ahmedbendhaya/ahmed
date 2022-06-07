package LoginStepDef;

import org.openqa.selenium.WebDriver;

import Login.LoginPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ResetpasswordStepDef {
	WebDriver driver= null;
	LoginPage login = new LoginPage();

	@When("Click on reset password button")
	public void click_on_reset_password_button() {
		login.launch(driver);
		login.Reset();
	}

	@When("tap my <mail>")
	public void tap_my_mail() {
		
	}

	@When("click Valider")
	public void click_Valider() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("mail must receive a reset mail")
	public void mail_must_receive_a_reset_mail() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
}
