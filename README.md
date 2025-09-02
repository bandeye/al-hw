# al-hw

# Task 1: Manual Testing

|ID| Description | Steps | Expected Results | Test Data  | Prerequisite |
| - | - | - | - | - | - |
| 1 | Add to cart without logged in user on landing page | 1. Click Add on a product card of $item. | 1. User gets redirected to the Account Login page. | landingurl: $link, browser: chrome, viewport: desktop, locale: en-us, item: exact product or random | 1. Open browser $browser in viewport $viewport. 2. Open landing page $landingurl in locale $locale. 3. Accept cookies by clicking Got it.
| 2 | Add to cart with logged in user on landing page |1. Click Add on a product card of $item. 2. Fill out login form with $username and $password. |1. User gets redirected to the Account Login page. 2. Login succeeds, selected $item is added to cart with quantity 1, cart badge updated with number 1, user redirected to landing page. |landingurl: $link, browser: chrome, viewport: desktop, locale: en-us, item: exact product or random, username: $link-to-secret, password: $link-to-secret |1. Open browser $browser in viewport $viewport. 2. Open landing page $landingurl in locale $locale. 3. Accept cookies by clicking Got it.
| 3 | Add to cart with logged in user on product page |1. Click Add to Cart button of $item. 2. Fill out login form with $username and $password.|1. User gets redirected to the Account Login page. 2. Login succeeds, selected $item is added to cart with quantity 1, cart badge updated with number 1, user redirected to product page.|producturl: $link, browser: chrome, viewport: desktop, locale: en-us, item: exact product or random, username: $link-to-secret, password: $link-to-secret |1. Open browser $browser in viewport $viewport. 2. Open product page $producturl in locale $locale. 3. Accept cookies by clicking Got it.

# Clarifying questions

1. "Add to Shopping List" means "Add to Cart"?
2. 