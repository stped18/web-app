import React, { Component } from 'react';
import './App.css';
import axios from "axios"


class App extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/item/all").then(response => {
            console.log(response)
            this.setState = {
                item: response.data
            }
        }).catch(error => {
            console.log(error.message)
        })
    }
    render() {
        return ( <div>
            <h1> List of Items </h1>
</div>);
        }

    }

    export default App;