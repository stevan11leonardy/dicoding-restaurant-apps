const assert = require('assert');

Feature('Liking Resturants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('No restaurant exist');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurant exist');

  I.amOnPage('/');

  I.seeElement({ shadow: ['restaurant-card', '.card', '.learn-more'] })

  const firstRestaurantName = await I.grabTextFrom({ shadow: ['restaurant-card:nth-child(1)', '.card', '.card-body', '.title'] });
  console.log(firstRestaurantName);

  I.click({ shadow: ['restaurant-card:nth-child(1)', '.card', '.learn-more'] });

  I.seeElement('.like-button');
  I.click('.like-button');

  I.amOnPage('/#/favourite');
  I.seeElement({ shadow: ['restaurant-card', '.card', '.learn-more'] })
  const likedRestaurantName = await I.grabTextFrom({ shadow: ['restaurant-card:nth-child(1)', '.card', '.card-body', '.title'] })

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
