import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import React from 'react';
import FoodForm from './FoodForm';
import Search from './Search'



class App extends React.Component {
  state = {
    foods: foods,
    searchValue: "",
  };


  handleForm = () => {
    const foodForm = document.getElementById("foodForm");
    foodForm.classList.toggle("hidden");
  }

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });

    this.handleForm();
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  render() {

    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="title is-1 is is-pulled-left">IronNutrition</h1>

        <Search
          value={this.state.searchValue}
          callbackFn={this.handleSearchValue}
        />

        <div>
          <br />
          <button className="button is-info" onClick={this.handleForm}>Add New Food</button>
          <div id="foodForm" className="hidden" >
            <br />
            <FoodForm callbackFn={this.handleAddFood} />
          </div>
        </div>


        {filteredFoods.map((food) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

