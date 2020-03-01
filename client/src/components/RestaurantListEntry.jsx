import React from 'react';

const RestaurantListEntry = ({ restaurant, index, deleteRestaurant }) => (
  <div className="entry">
    <div className="name">{restaurant.restaurant_name}</div>
    <div className="rating">
      {restaurant.rating}/5⭐️
      <span className="delete" onClick={() => deleteRestaurant(index)}>
        x
      </span>
    </div>
  </div>
);

export default RestaurantListEntry;
