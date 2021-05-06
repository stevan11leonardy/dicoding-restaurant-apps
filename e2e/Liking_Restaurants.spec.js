const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('No restaurant exist');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurant exist');

  I.amOnPage('/');

  I.seeElement('fetch-loading');

  I.seeElement({ shadow: ['restaurant-card:nth-child(1)', '.card', '.learn-more'] })

  const firstRestaurantName = await I.grabTextFrom({ shadow: ['restaurant-card:nth-child(1)', '.card', '.card-body', '.title'] });

  I.click({ shadow: ['restaurant-card:nth-child(1)', '.card', '.learn-more'] });

  I.seeElement('fetch-loading');

  I.seeElement('.like-button');
  I.click('.like-button');

  I.amOnPage('/#/favourite');
  I.seeElement({ shadow: ['restaurant-card', '.card', '.learn-more'] })
  const likedRestaurantName = await I.grabTextFrom({ shadow: ['restaurant-card:nth-child(1)', '.card', '.card-body', '.title'] })

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
