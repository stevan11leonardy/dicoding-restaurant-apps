import CONFIG from '../../globals/config';

class RestaurantCard extends HTMLElement {
  connectedCallback() {
    const restaurantCardTemplate = `
      <style>
        .card {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 300px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .location {
          position: absolute;
          top: 15px;
          left: 0;
          background-color: var(--primary);
          color: white;
          padding: .5rem 1rem;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          font-size: 12px;
        }

        .card-image {
          width: 100%;
          min-height: 150px;
          max-height: 150px;
          background-color: #e7c1c1;
          overflow: hidden;
          display: flex;
          background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
          background-size: 600px;
          animation: shine-avatar 1.6s infinite linear;
        }

        .card-image > img {
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .card-body {
          padding: 1rem;
          background-color: white;
          overflow: hidden;
        }

        .rating {
          font-weight: bold;
          font-size: 12px;
          margin-bottom: .5rem;
        }

        .title {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: .5rem;
        }

        .caption {
          font-size: 12px;
          max-width: 66ch;
          text-align: justify;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .learn-more {
          background-color: #ff6701;
          color: white;
          cursor: pointer;
          padding: 1rem;
          margin-left: auto;
          transition: .3s ease;
          text-decoration: none;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        .learn-more:focus, .learn-more:hover {
          background-color: #f39c61;
          transition: .3s ease;
        }

        @keyframes shine-avatar {
          0% {
            background-position: calc(-120px + 52px + 16px);
          }          
          100% {
            background-position: calc(190px + 52px + 16px);
          }
        }
      </style>
      <div class="card">
        <div class="location">
          <slot name="location">-</slot>
        </div>
        <div class="card-image">
          <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL}small/${this.getAttribute('pic')}" crossorigin="anonymous" alt="${this.getAttribute('name')}-pic"/>
        </div>
        <div class="card-body">
          <div class="rating">Rating: <slot name="rating">-</slot></div>
          <div class="title">${this.getAttribute('name')}</div>
          <div class="caption"><slot name="description">-</slot></div>
        </div>
        <a href="/#/detail/${this.getAttribute('data-id')}" class="learn-more" tabindex="0">
          Learn more
        </a>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = restaurantCardTemplate;
  }
}

window.customElements.define('restaurant-card', RestaurantCard);
