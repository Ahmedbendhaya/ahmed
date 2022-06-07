Feature: Vérifier la fonctionnalité de connexion TALAN ACADEMY

  @tag1
  Scenario Outline: Login to TA
    Given We have access to TA
    When i click on the login button
    And tap my <mail> and <password>
    And click on SE CONNECTER
    Then my account must be displayed

    Examples: 
      | mail                                  | password      |
      | ahmed-baha-eddine.ben-dhaya@talan.com | 22080023Ahm@d |
      | ahmed-baha-eddine.ben-dhaya@talan.com | 22080023A     |
      | ajdmdlfk@hotmail.com                  | 22080023Ahm@d |
			
			@tag2
      Scenario: Reset Password
      Given We have access to TA
      When i click on the login button 
      And Click on reset password button 
      And tap my <mail>
      And click Valider
      Then mail must receive a reset mail
      