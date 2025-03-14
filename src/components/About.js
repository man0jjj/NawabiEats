import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    componentDidMount() {
        console.log("About Component Mounted");
    }

    render() {
        return (
            <div className="p-6 m-6 text-center bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                <UserClass name="Manoj" location="Hyderabad" contact="manoj@gmail.com" />
            </div>
        );
    }
}

export default About;
