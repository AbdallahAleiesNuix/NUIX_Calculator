package nuix.calc.pages;

import nuix.calc.utils.WebDriverUtils;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CalculatorPage extends WebDriverUtils {


    public CalculatorPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='add']")
    public WebElement addition_button;

    @FindBy(xpath = "//input[@id='subtract']")
    public WebElement subtraction_button;

    @FindBy(xpath = "//input[@value='C']")
    public WebElement clear_button;

    @FindBy(xpath = "//input[@id='divide']")
    public WebElement division_button;

    @FindBy(xpath = "//input[@id='multiply']")
    public WebElement multiplication_button;

    @FindBy(xpath = "//div[@id='display']")
    public WebElement result;

    @FindBy(xpath = "//input[@value='=']")
    public WebElement equal_button;

    @FindBy(xpath = "//input[@value='.']")
    public WebElement decimalPoinr_button;

    @FindBy(xpath = "//input[@value='0']")
    public WebElement zero_button;

    @FindBy(xpath = "//input[@value='1']")
    public WebElement one_button;

    @FindBy(xpath = "//input[@value='2']")
    public WebElement two_button;

    @FindBy(xpath = "//input[@value='3']")
    public WebElement three_button;

    @FindBy(xpath = "//input[@value='4']")
    public WebElement four_button;

    @FindBy(xpath = "//input[@value='5']")
    public WebElement five_button;

    @FindBy(xpath = "//input[@value='6']")
    public WebElement six_button;

    @FindBy(xpath = "//input[@value='7']")
    public WebElement seven_button;

    @FindBy(xpath = "//input[@value='8']")
    public WebElement eight_button;

    @FindBy(xpath = "//input[@value='9']")
    public WebElement nine_button;

    // Clicks Add button
    public void clickAddition() {
        addition_button.click();
    }

    // Click Minus button
    public void clicksubtraction() {
        subtraction_button.click();
    }

    // Click Multiply button
    public void clickMultiplication() {
        multiplication_button.click();
    }

    // Click Divide button
    public void clickDivision() {
        division_button.click();
    }

    // Click Decimal point
    public void clickDecimalPoint() {
        decimalPoinr_button.click();
    }

    // Clicks Clear button
    public void clickClear() {
        clear_button.click();
    }

    // Clicks a number
    public void clickNum(int num) {
        switch (num) {
            case 0:
                zero_button.click();
                break;

            case 1:
                one_button.click();
                break;

            case 2:
                two_button.click();
                break;

            case 3:
                three_button.click();
                break;

            case 4:
                four_button.click();
                break;

            case 5:
                five_button.click();
                break;

            case 6:
                six_button.click();
                break;

            case 7:
                seven_button.click();
                break;

            case 8:
                eight_button.click();
                break;

            case 9:
                nine_button.click();
                break;

            default:
                System.out.println("Method only accepts a valid number from 0 to 9");
                System.exit(0);
                break;
        }
    }

    // Clicks an Arithmetic operation
    public void clickArithmeticOperation(String operation) {
        switch (operation) {
            case ".":
                clickDecimalPoint();
                break;

            case "-":
                clicksubtraction();
                break;

            case "+":
                clickAddition();
                break;

            case "×":
                clickMultiplication();
                break;

            case "/":
                clickDivision();
                break;

            case "C":
                clickClear();
                break;
        }
    }

    // Perform a math operation
    public void performOp(String operation) {
        String[] op = operation.split(" ");
        for (int i = 0; i < op.length; i++) {
            String[] tempNum = op[i].split("");
            if (tempNum.length > 1) {
                for (int j = 0; j < tempNum.length; j++) {
                    char temp = tempNum[j].charAt(0);
                    if (Character.isDigit(temp)) {
                        clickNum(Integer.parseInt(tempNum[j]));
                    } else {
                        clickArithmeticOperation(tempNum[j]);
                    }
                }
            } else {
                char temp = tempNum[0].charAt(0);
                if (Character.isDigit(temp)) {
                    clickNum(Integer.parseInt(tempNum[0]));
                } else {
                    clickArithmeticOperation(tempNum[0]);
                }
            }

        }
        equal_button.click();
    }


    // Verify displayed result
    public void verifyResult(String expectedResult) {
        String actualResult = result.getText();
        Assert.assertEquals("\nResult verification failed.\nExpected result: " + expectedResult + "\nActual result: " + actualResult + "\n", expectedResult, actualResult);
    }


    // Verify all numbers work
    public void verifyAllNumbersAreFunctional() {
        for (int i = 0; i < 10; i++) {
            clickNum(i);
            Assert.assertEquals("Number " + i + " is not functioning correctly", String.valueOf(i), result.getText());
            clear_button.click();
        }
    }


}
