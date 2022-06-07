package Login;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    WebDriver driver;
	String connexion = "//nav[contains(@class,'navbar-menu')]/div/ul/li[5]/a";
	private By txt_mail =By.id("inputEmail");
	private By txt_password= By.id("inputPassword");
	String btn_connect= "//button[contains(text(),'Se connecter')]";
	private By Dashboard_display= By.className("container-fluid");
	private By Dashboard_no_displayed= By.id("ResetPassword");
	String btn_reset= "//*[@id=\"ResetPassword\"]/small";
	
	public void launch (WebDriver driver) {
		this.driver=driver;
	}
	
	public void Login_information(String username, String password){	
		driver.findElement(txt_mail).sendKeys(username);
		driver.findElement(txt_password).sendKeys(password);
	}
	public void connect(){	
		driver.findElement(By.xpath(btn_connect)).click();
	}
	public void AccessLogin() {
		driver.findElement(By.xpath(connexion)).click();
}
	public void Verifyconncorrect() {
		driver.findElement(Dashboard_display).isDisplayed();
		System.out.println("Correct password");
		}
	public void VerifyconnIncorrect() {
		driver.findElement(Dashboard_no_displayed).isDisplayed();
		System.out.println("incorrect password");
		}
	
	public void Reset() {
	driver.findElement(By.xpath(btn_reset));
	}
	}
