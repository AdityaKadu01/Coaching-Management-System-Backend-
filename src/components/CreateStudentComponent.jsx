import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stud_Fname: '',
            stud_Lname: '',
            stud_Email: '',
            stud_Mobileno: '',
            stud_Password: '',
            address: {
                houseNo: '',
                street: '',
                city: '',
                state: '',
                pincode: ''
            }
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeHouseNoHandler = this.changeHouseNoHandler.bind(this);
        this.changeStreetNameHandler = this.changeStreetNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changePinCodeHandler = this.changePinCodeHandler.bind(this);

        this.saveStudent = this.saveStudent.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({ stud_Fname: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ stud_Lname: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ stud_Email: event.target.value });
    }
    changeMobileNoHandler = (event) =>{
        this.setState({ stud_Mobileno: event.target.value })
    }
    changePasswordHandler = (event) =>{
        this.setState({ stud_Password: event.target.value })
    }
    // changeAddressHandler = (event) =>{
    //     this.setState({ address:{houseNo: event.target.value, street: event.target.value, city: event.target.value }})
    // }
    changeHouseNoHandler = (event) =>{
        this.setState({ address:{...this.state.address,houseNo: event.target.value} })
    }
    changeStreetNameHandler = (event) =>{
        this.setState({ address:{...this.state.address,street: event.target.value} })
    }
    changeCityHandler = (event) =>{
        this.setState({ address:{...this.state.address,city: event.target.value} })
    }
    changeStateHandler = (event) =>{
        this.setState({ address:{...this.state.address,state: event.target.value} })
    }
    changePinCodeHandler = (event) =>{
        this.setState({ address:{...this.state.address,pincode: event.target.value} })
    }

    saveStudent=(s)=>{
        s.preventDefault();
        let student = {stud_Fname: this.state.stud_Fname, stud_Lname: this.state.stud_Lname,stud_Email: this.state.stud_Email,
             stud_Mobileno: this.state.stud_Mobileno, stud_Password: this.state.stud_Password, address: { houseNo: this.state.address.houseNo,
             street: this.state.address.street, city: this.state.address.city, state: this.state.address.state, pincode: this.state.address.pincode }};
        console.log('student =>' + JSON.stringify(student));

        StudentService.addStudent(student).then(res => {
            this.props.history.push('/allstudents');
        });
    }

    cancel(){
        this.props.history.push('/allstudents');  {/*this function will route to allstudents*/}
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    <legend className="mb-0 mt-3">Basic Details</legend>
                                    <div className="row row-cols-1">
                                        <div className="col my-2">  {/**input field for Student First name*/}
                                            <label htmlFor="fname">First name:</label>
                                            <input type="text" placeholder="First Name" id="fname" className="form-control"
                                                name="stud_Fname" value={this.state.stud_Fname} onChange={this.changeFirstNameHandler} required />
                                        </div>
                                        <div className="col my-2">  {/**input field for Student Last Name */}
                                            <label htmlFor="lname">Last name:</label>
                                            <input type="text" placeholder="Last Name" id="lname" className="form-control"
                                                name="stud_Lname" value={this.state.stud_Lname} onChange={this.changeLastNameHandler} required />
                                        </div>
                                        {/* <div class="col my-2">
                                <label htmlFor="gender">Gender:</label><br/>
                                <input type="radio" id="html" name="gender" value="Male"/>
                                <label for="male">Male</label><br/>
                                <input type="radio" id="female" name="gender" value="Female"/>
                                <label for="female">Female</label><br/>
                                <input type="radio" id="other" name="gender" value="Other"/>
                                <label for="other">Other</label><br/>
                            </div> */}
                                        <div className="col my-2">
                                            <label htmlFor="email">Email-id:</label>
                                            <input type="email" placeholder="E-mail" id="email" className="form-control"
                                                name="stud_Email" value={this.state.stud_Email} onChange={this.changeEmailHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="number">Contact number:</label>
                                            <input type="number" placeholder="Mobile Number" id="number" className="form-control" 
                                             name="stud_Mobileno" value={this.state.stud_Mobileno} onChange={this.changeMobileNoHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" placeholder="Password" id="password" className="form-control" 
                                            name="stud_Password" value={this.state.stud_Password} onChange={this.changePasswordHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="confirm password">Confirm password:</label>
                                            <input type="confirm password" placeholder="Confirm password" id="confirm password" className="form-control" required/>
                                        </div>
                                    </div>
                                    <legend className="mb-0 mt-3">Address Details</legend>
                                    <div className="row row-cols-1">
                                        <div className="col my-2">
                                            <label htmlFor="housenumber">House Number:</label>
                                            <input type="number" placeholder="House Number" id="housenumber" className="form-control" 
                                            name="houseNo" value={this.state.address.houseNo} onChange={this.changeHouseNoHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="streetname">Street Name:</label>
                                            <input type="text" placeholder="Street Name" id="streetname" className="form-control" 
                                             name="street" value={this.state.address.street} onChange={this.changeStreetNameHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="city">City:</label>
                                            <input type="text" placeholder="City" id="city" className="form-control" 
                                            name="city" value={this.state.address.city} onChange={this.changeCityHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="state">State:</label>
                                            <input type="text" placeholder="State" ref="" id="state" className="form-control" 
                                             name="state" value={this.state.address.state} onChange={this.changeStateHandler} required />
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="pin">PIN Code:</label>
                                            <input type="number" placeholder="PIN Code" id="pin" className="form-control" 
                                            name="pincode" value={this.state.address.pincode} onChange={this.changePinCodeHandler} required />
                                        </div>
                                    </div>
                                    {/* <legend class="mb-0 mt-3">Academic Details</legend>
                                    <div class="row row-cols-1">
                                        <div class="col my-2">
                                            <label htmlFor="10thpercentage">10th percentage:</label>
                                            <input type="number" placeholder="10th percentage" ref="" id="10thpercentage" class="form-control"  />
                                        </div>
                                        <div class="col my-2">
                                            <label htmlFor="passingyear">Passing year:</label>
                                            <input type="number" placeholder="Passing year" ref="" id="passingyear" class="form-control"  />
                                        </div>
                                        <div class="col my-2">
                                            <label for="choose course">Enroll to:</label><br />
                                            <select id="class" name="class" placeholder="Enroll to" ref="" id="enrollto" class="form-control" >
                                                <option value="11thPCM">11th PCM</option>
                                                <option value="11thPCB">11th PCB</option>
                                                <option value="12thPCM">12th PCM</option>
                                                <option value="12thPCB">12th PCB</option>
                                            </select>
                                        </div>

                                    </div> */}
                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CreateStudentComponent;