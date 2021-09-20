import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

        this.addStudent= this.addStudent.bind(this);  {/*bind funtion will bind the addStudent funtion*/}
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {        {/*/recieved response data will set in the student array using state */}
            this.setState({ students: res.data });
        })
    }

    addStudent(){
        this.props.history.push('/addstudent');  {/*this function will route addstudent component */}
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students' List</h2>
                <div className="row">
                    <div className="col-2" id="add">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button> {/* button will call addStudent() using constructor*/}
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Mobile No.</th>
                                <th>Password</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.stud_id}>
                                            <td>{student.stud_Fname}</td>
                                            <td>{student.stud_Lname}</td>
                                            <td>{student.stud_Email}</td>
                                            <td>{student.stud_Mobileno}</td>
                                            <td>{student.stud_Password}</td>
                                            <td>{'House No. ' + student.address.houseNo + ', ' + student.address.street + ', ' + student.address.city + ', ' + student.address.state + ', ' + student.address.pincode}</td>
                                            <td>
                                                <button  className="btn btn-info">Update</button> <button  className="btn btn-info">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

export default ListStudentComponent;