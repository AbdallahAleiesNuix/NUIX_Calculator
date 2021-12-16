package nuix.calc.utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverUtils {

    public static WebDriver driver;

    // Instantiates driver if null, otherwise will return current driver.
    public static WebDriver getDriver() {
        if (driver == null) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }
        return driver;
    }

    // Closes driver and sets reference to null.
    public static void closeDriver() {
        if (driver!=null) {
            driver.quit();
            driver = null;
        }
    }



}
