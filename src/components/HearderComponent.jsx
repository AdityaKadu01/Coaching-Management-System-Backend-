import React, { Component } from 'react';

class HearderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-warning">
                    <div className="homelink text-dark"><a href="http://localhost:8080/cdm/home" className="navbar-brand"> Coaching Management System</a></div>    

                    </nav>
                </header>
            </div>
        );
    }
}

export default HearderComponent;