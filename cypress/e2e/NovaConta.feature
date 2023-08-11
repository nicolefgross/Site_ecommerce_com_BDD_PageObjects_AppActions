Feature: Navegar na página do ecommerce
    Scenario Outline: Criação de uma conta
    Given I visit EBAC Store
    When I register an email "<email>" and passaword "<senha>" correctly
    Then my account page should be visible

    Examples:
        | email | senha | 
        | abet@btu.com | asd |
        | bbtq@ccf.com | 123 |
        | aawt@bdc.com | 458 |
        | twet@cdf.com | 895 |
