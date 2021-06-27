import React, { Component } from 'react'

class FoodForm extends Component {
    state = {
        name: "",
        calories: "",
        image: "",
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const food = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
        };

        this.props.callbackFn(food);
    };

    render() {
        return (

            <div className='form1'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className="is-pulled-centered" htmlFor="name">Name</label><br />
                        <input className="input is-info is-small"
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.handleChange}
                            value={this.state.name}

                        />
                    </div>
                    <div>
                        <label className="is-pulled-centered" htmlFor="image">Image</label><br />
                        <input className="input is-info is-small"
                            type="text"
                            name="image"
                            id="image"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div>
                    <div>
                        <label className="is-pulled-centered" htmlFor="calories">Calories</label><br />
                        <input className="input is-info is-small"
                            type="text"
                            name="calories"
                            id="calories"
                            onChange={this.handleChange}
                            value={this.state.calories}
                        />
                    </div>
                    <br />
                    <button className="button is-info is-pulled-centered">Submit</button>
                </form>
            </div>
        );
    }


}

export default FoodForm;