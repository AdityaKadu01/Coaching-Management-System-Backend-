import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudentComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            stud_id: this.props.match.params.id,
            student: {}
        }
        this.back= this.back.bind(this);
    }
    
    componentDidMount(){
        StudentService.getStudentById(this.state.stud_id).then(res => {
            this.setState({student: res.data});
        })
    }

    back(){
        this.props.history.push('/allstudents');
    }

    render() {
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                    <h3 className= "text-center">Student Profile</h3>
                    <div className ="card-body">
                    <div className = "row">
                    <div className= "col-4">
                        <label>Student ID Number: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.stud_id}</div>
                        </div>
                        </div>    
                    <div className = "row">
                        <div className= "col-4">
                        <label>First Name: </label>
                        </div>
                        <div className = "col-8">
                        <div>{this.state.student.stud_Fname}</div>
                        </div>
                    </div>    
                    <div className = "row">
                    <div className= "col-4">
                        <label>Last Name: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.stud_Lname}</div>
                        </div>
                        </div>    
                        <div className = "row">
                    <div className= "col-4">
                        <label>Email ID: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.stud_Email}</div>
                        </div>
                        </div> 
                        <div className = "row">
                    <div className= "col-4">
                        <label>Contact Number: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.stud_Mobileno}</div>
                        </div>
                        </div>    
                        <div className = "row">
                    <div className= "col-4">
                        <label>Password: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.stud_Password}</div>
                        </div>
                        </div>    
                        <div className = "row">
                    <div className= "col-4">
                        <label>Address: </label>
                        </div>
                        <div className= "col-8">
                        <div>{this.state.student.address ? "House No." + this.state.student.address.houseNo:""}, {this.state.student.address ? this.state.student.address.street:""}, {this.state.student.address ? this.state.student.address.city:""}, {this.state.student.address ? this.state.student.address.state:""}, {this.state.student.address ? this.state.student.address.pincode:""}</div>
                        </div>
                        </div>       
                    </div>   
                    <button className="btn btn-danger col-2 mb-2" onClick={this.back} style={{marginLeft:"10px"}}>Back</button>
                </div>       
            </div>
        );
    }
}

export default ViewStudentComponent;