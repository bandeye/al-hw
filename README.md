# al-hw

# Task 1: Manual Testing

## Test Case Creation

|ID| Title | Steps | Expected Results | Test Data  | Prerequisite |
| - | - | - | - | - | - |
| 1 | Add to cart without logged in user on landing page | 1. Click Add on a product card of $item. | 1. User gets redirected to the Account Login page. | landingurl: $link, browser: chrome, viewport: desktop, locale: en-us, item: exact product or random | 1. Open browser $browser in viewport $viewport. 2. Open landing page $landingurl in locale $locale. 3. Accept cookies by clicking Got it.
| 2 | Add to cart with logged in user on landing page |1. Click Add on a product card of $item. 2. Fill out login form with $username and $password. |1. User gets redirected to the Account Login page. 2. Login succeeds, selected $item is added to cart with quantity 1, cart badge updated with number 1, user redirected to landing page. |landingurl: $link, browser: firefox, viewport: tablet, locale: hu-hu, item: exact product or random, username: $link-to-secret, password: $link-to-secret |1. Open browser $browser in viewport $viewport. 2. Open landing page $landingurl in locale $locale. 3. Accept cookies by clicking Got it.
| 3 | Add to cart with logged in user on product page |1. Click Add to Cart button of $item. 2. Fill out login form with $username and $password.|1. User gets redirected to the Account Login page. 2. Login succeeds, selected $item is added to cart with quantity 1, cart badge updated with number 1, user redirected to product page.|producturl: $link, browser: safari, viewport: mobile, locale: ko-kr, item: exact product or random, username: $link-to-secret, password: $link-to-secret |1. Open browser $browser in viewport $viewport. 2. Open product page $producturl in locale $locale. 3. Accept cookies by clicking Got it.

## Bug reporting

|ID| Title | Description | Severity | Priority  | Attachments | 
| - | - | - | - | - | - |
| 1 | [$tier] Add to cart possible without logging in | On tier/host/box $tier I was able to add to cart an item $item without logging in which should be not possible. Expected result: when I click add to cart on the landing or product page I should be redirected to the login page. | Blocker | Urgent | screenshot(s) |

# Task 2: Frontend Testing

# Task 3: API Testing

# Bonus questions

## Docker

Basically it offers a functionality to build an image/virtual-machine with only the necessary tools installed and preconfigured to have it working just out of the box.

In my experience what I've used so far as a docker container is a selenoid image acting like a selenium hub and when it got a request it would create new containers of images depending on what is the request ( chrome, firefox, etc. ) and those new images would act like selenium nodes. After execution the nodes would be removed.

Another usage I've had is to use playwright containers acting like browsers and it would enable remote execution for me.

From an automated testing environment perspective what I could imagine is that an image would contain for example for Java based UI test automatin projects the following: java, maven, eclipse/vscode, browsers.

## JUnit + Selenium

JUnit hooks would be useful to have consistent test cases written in Selenium.

```
WebDriver driver; // webdrivermanager or remotedriver can be used

@BeforeEach
public void setUp() {
    driver = new ChromeDriver();
}

@AfterEach
public void tearDown() {
    driver.quit();
}

@Test
public void deleteTaskTest() {
    DeletePage deletePage = new DeletePage(); // POM created with necessary locators
    deletePage.visit();
    deletePage.deleteFirstTask();
}
```

## CI Integration

The fundamental element is to be able to execute test cases via command line locally. This would enable us to mimic the same on an agent, it should be just configured via a UI or typically a yml file which can be stored in the codebase repository.

For example in Jenkins it is possible to setup the access for a git repo in a job, which would mean that before every job run it would pull the latest changes.

Also, with trigger options in Jenkins it is possible to configure which action should initiate the job to run, for example code changes ( commit, pull request, etc. ) and even it is possible to schedule to execute the job on a regular basis, e.g. nightly test executions.

# Clarifying questions

1. "Add to Shopping List" means "Add to Cart"?
2. 