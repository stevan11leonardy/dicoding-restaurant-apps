Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing one liked restaurant', ({ I }) => {
   I.seeElement('restaurant-card');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favourite');

  I.seeElement({ shadow: ['restaurant-card:nth-child(1)', '.card', '.learn-more'] })
  I.click({ shadow: ['restaurant-card:nth-child(1)', '.card', '.learn-more'] });

  I.seeElement('fetch-loading');

  I.seeElement('.liked-button');
  I.click('.liked-button');

  I.amOnPage('/#/favourite');
  I.see('No restaurant exist');
});
