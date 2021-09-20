import axios from 'axios';

const Student_API_BASE_URL = "http://localhost:8080/api/v1/allstudents" //all student data are send as response on this url

class StudentService{

    getStudents(){          // function to recieve response for all students data from DB 
        return axios.get(Student_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(Student_API_BASE_URL,student);
    }
}

export default new StudentService()