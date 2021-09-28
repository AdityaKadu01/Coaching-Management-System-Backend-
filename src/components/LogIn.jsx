import React, { Component } from 'react';

class LogIn extends Component {

constructor(props) {
    super(props);
    
    this.studentLogin=this.studentLogin.bind(this);
    this.adminLogin=this.adminLogin.bind(this);
}

studentLogin(){
    this.props.history.push('/www.cms.com/student');
}

adminLogin(){
    this.props.history.push('/allstudents');
}

    render() {
        return (
            <div>
                <h2>LogIn Page</h2>     

                <br>
                </br>
                <br></br>
                <button className="btn btn-success" onClick={this.studentLogin}>Student Login</button>
                <button className="btn btn-success" onClick={this.adminLogin} style={{ marginLeft: "10px" }}>Admin Login</button>
            </div>
        );
    }
}

export default LogIn;       