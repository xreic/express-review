import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };

    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  getRestaurants() {
    /**
     *  Axios is promise based
     *  Sending a get request to /restaurants endpoint
     *  When the promised data is given
     *  Use it to set the state
     */
    axios
      .get('/restaurants')
      .then((response) => {
        this.setState({
          restaurants: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  deleteRestaurant(index) {
    axios
      .delete(`/restaurants/${index}`)
      .then(() => this.getRestaurants())
      .catch((err) => console.error(err));
  }

  addRestaurant({ name, rating }) {
    /**
     *  For put and post requests
     *  Data being sent over is put into the second argument as an object
     */
    axios
      .post('/restaurants', {
        name,
        rating,
      })
      .then(() => {
        this.getRestaurants();
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ? (
          <RestaurantList
            restaurants={this.state.restaurants}
            deleteRestaurant={this.deleteRestaurant}
          />
        ) : (
          <div className="error">Fix your get request!</div>
        )}
        <AddRestaurantForm addRestaurant={this.addRestaurant} />
      </div>
    );
  }
}

export default App;
