import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

        this.addStudent= this.addStudent.bind(this);  {/*bind funtion will bind the addStudent funtion*/}
        this.editStudent= this.editStudent.bind(this);
        this.deleteStudent= this.deleteStudent.bind(this);
        this.viewStudent=this.viewStudent.bind(this);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {        {/*/recieved response data will set in the student array using state */}
            this.setState({ students: res.data });
        })
    }

    addStudent(){
        this.props.history.push('/add-student/_add');  {/*this function will route addstudent component */}
    }

    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    deleteStudent(id){
        StudentService.deleteStudentById(id).then(res =>{
            this.setState({students: this.state.students.filter(student => student.stud_id !== id)})
        })
    }

    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students' List</h2>
                <div className="row">
                    <div className="col-12" id="add">
                    <div className="row">
                        <div className="col-2">
                    <button id="addbutton" className="btn btn-primary" onClick={this.addStudent}>Add Student</button> {/* button will call addStudent() using constructor*/}
                    </div>
                    <div id="filltertitle" className="col-1"><b>Filter By:</b></div>
                    <div className="col-2 ">
                        <div id="fillterbutton" class="form-group bg-light">
                            <select class="form-control" name="gender" id="" required>
                                <option disabled selected value>select option</option>
                                <option>Course</option>
                            </select>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student ID</th>
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
                                            <td>{student.stud_id}</td>
                                            <td>{student.stud_Fname}</td>
                                            <td>{student.stud_Lname}</td>
                                            <td>{student.stud_Email}</td>
                                            <td>{student.stud_Mobileno}</td>
                                            <td>{student.stud_Password}</td>
                                            <td>{'House No. ' + student.address.houseNo + ', ' + student.address.street + ', ' + student.address.city + ', ' + student.address.state + ', ' + student.address.pincode}</td>
                                            <td>
                                                <button className="btn btn-info" onClick = {()=>this.editStudent(student.stud_id)}>Update</button> 
                                                <button style={{marginLeft: "9px"}} className="btn btn-danger" onClick={()=>this.deleteStudent(student.stud_id)}>Delete</button>
                                                <button style={{marginTop: "9px", marginLeft: "25px"}} className="btn btn-secondary" onClick={()=>this.viewStudent(student.stud_id)}>View Profile</button>
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