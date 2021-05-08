const assert = require('assert');

Feature('Add Review to a Restaurant');

const timestamp = new Date().toISOString();
const ROBOT_NAME = 'Bot Reviewer';
const ROBOT_REVIEW = `Review ini diberikan oleh robot pada ${timestamp}`;

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add review in a restaurant', async ({ I }) => {
  I.seeElement({ shadow: ['restaurant-card:nth-child(2)', '.card', '.learn-more'] })
  const clickedRestaurantName = await I.grabTextFrom({ shadow: ['restaurant-card:nth-child(2)', '.card', '.card-body', '.title'] });

  I.click({ shadow: ['restaurant-card:nth-child(2)', '.card', '.learn-more'] });

  const restaurantName = await I.grabTextFrom('.detail__restaurant-name')
  assert.strictEqual(clickedRestaurantName, restaurantName);

  I.see('Add New Review');

  I.fillField('#reviewer-name', ROBOT_NAME);
  I.fillField('#review', ROBOT_REVIEW);

  I.see('Add Review', '.add-review-button');
  I.click('.add-review-button');

  I.seeInPopup('success to add review');
  I.acceptPopup();

  I.seeElement('restaurant-review-item');
  const reviewer = await I.grabTextFrom({ shadow: ['restaurant-review-item:nth-last-child(1) > p:nth-child(1)'] });
  const review = await I.grabTextFrom({ shadow: ['restaurant-review-item:nth-last-child(1) > p:nth-child(3)'] });

  assert.strictEqual(reviewer, ROBOT_NAME);
  assert.strictEqual(review, ROBOT_REVIEW);
});
