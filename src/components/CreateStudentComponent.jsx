import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stud_id: this.props.match.params.id,
            stud_Fname: '',
            stud_Lname: '',
            stud_Email: '',
            stud_Mobileno: '',
            stud_Password: '',
            stud_10thper: '',
            stud_passyear: '',
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
        this.change10thperHandler = this.change10thperHandler.bind(this);
        this.changePassyearHandler = this.changePassyearHandler.bind(this);

        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {

        if (this.state.stud_id === '_add' || this.state.stud_id === '_register' ) {
            return
        } else {
            StudentService.getStudentById(this.state.stud_id).then((res) => {
                let student = res.data;
                this.setState({
                    stud_Fname: student.stud_Fname,
                    stud_Lname: student.stud_Lname,
                    stud_Email: student.stud_Email,
                    stud_Mobileno: student.stud_Mobileno,
                    stud_Password: student.stud_Password,
                    stud_10thper: student.stud_10thper,
                    stud_passyear: student.stud_passyear,
                    address: {
                        houseNo: student.address.houseNo,
                        street: student.address.street,
                        city: student.address.city,
                        state: student.address.state,
                        pincode: student.address.pincode
                    }
                });
            });
        }

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
    changeMobileNoHandler = (event) => {
        this.setState({ stud_Mobileno: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ stud_Password: event.target.value })
    }
    // changeAddressHandler = (event) =>{
    //     this.setState({ address:{houseNo: event.target.value, street: event.target.value, city: event.target.value }})
    // }
    changeHouseNoHandler = (event) => {
        this.setState({ address: { ...this.state.address, houseNo: event.target.value } })
    }
    changeStreetNameHandler = (event) => {
        this.setState({ address: { ...this.state.address, street: event.target.value } })
    }
    changeCityHandler = (event) => {
        this.setState({ address: { ...this.state.address, city: event.target.value } })
    }
    changeStateHandler = (event) => {
        this.setState({ address: { ...this.state.address, state: event.target.value } })
    }
    changePinCodeHandler = (event) => {
        this.setState({ address: { ...this.state.address, pincode: event.target.value } })
    }
    change10thperHandler = (event) => {
        this.setState({ stud_10thper: event.target.value })
    }
    changePassyearHandler = (event) => {
        this.setState({ stud_passyear: event.target.value })
    }


    saveOrUpdateStudent = (s) => {
        s.preventDefault();
        let student = {
            stud_Fname: this.state.stud_Fname, stud_Lname: this.state.stud_Lname, stud_Email: this.state.stud_Email,
            stud_Mobileno: this.state.stud_Mobileno, stud_Password: this.state.stud_Password, stud_10thper: this.state.stud_10thper, stud_passyear: this.state.stud_passyear, address: {
                houseNo: this.state.address.houseNo,
                street: this.state.address.street, city: this.state.address.city, state: this.state.address.state, pincode: this.state.address.pincode
            }
        };
        console.log('student =>' + JSON.stringify(student));

        if (this.state.stud_id === '_add') {
            StudentService.addStudent(student).then(res => {
                this.props.history.push('/allstudents');
            });
        } else if (this.state.stud_id === '_register' ) {
            StudentService.addStudent(student).then(res => {
                this.props.history.push('/www.cms.com/');
            });
        }else {
            StudentService.updateStudent(student, this.state.stud_id).then(res => {
                this.props.history.push('/allstudents');
            });
        }

    }

    cancel() {
        if (this.state.stud_id === '_register') {
            this.props.history.push('/www.cms.com/'); {/*this function will route to allstudents*/ }
            }
        else {
        this.props.history.push('/allstudents'); {/*this function will route to allstudents*/ }
        }
    }

    getTitle() {
        if (this.state.stud_id === '_add') {
            return <h3 className="text-center">Add Student</h3>
        }
        else if(this.state.stud_id === '_register'){
            return <h3 className="text-center">Registration Form</h3>
        } else {
            return <h3 className="text-center">Update Student</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div id="card" className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                <button id ="back" className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Back</button>
                                    <legend className="mb-0 mt-3">Basic Details</legend>
                                    <div className="row row-cols-1">
                                        <div className="col my-2">  {/**input field for Student First name*/}
                                            <label htmlFor="fname">First name: <sup><b>*</b></sup></label>
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
                                            <input type="password" placeholder="Confirm password" id="confirm password" className="form-control" required />
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
                                    <legend class="mb-0 mt-3">Academic Details</legend>
                                    <div class="row row-cols-1">
                                        <div class="col my-2">
                                            <label htmlFor="10thpercentage">10th percentage:</label>
                                            <input type="number" placeholder="10th percentage" id="10thpercentage" class="form-control"
                                                name="stud_10thper" value={this.state.stud_10thper} onChange={this.change10thperHandler} min="0" maxLength="100" required />
                                        </div>
                                        <div class="col my-2">
                                            <label htmlFor="passingyear">Date of Passing:</label>
                                            <input type="number" placeholder="Passing year" ref="" id="passingyear" class="form-control"
                                                name="stud_passyear" value={this.state.stud_passyear} onChange={this.changePassyearHandler} required />
                                        </div>
                                        <div class="col my-2">
                                            <label for="choose course">Enroll to:</label><br />
                                            <select id="class" name="class" placeholder="Enroll to" ref="" id="enrollto" class="form-control" >
                                                <option disabled selected value> ---Select Course--- </option>
                                                <option value="11pcm">11th PCM</option>
                                                <option value="11pcb">11th PCB</option>
                                                <option value="12pcm">12th PCM</option>
                                                <option value="12pcb">12th PCB</option>
                                            </select>
                                        </div>

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
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