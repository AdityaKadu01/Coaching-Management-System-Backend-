import axios from 'axios';

const Student_API_BASE_URL = "http://localhost:8080/api/v1/allstudents" //all student data are send as response on this url

class StudentService{

    getStudents(){          // function to recieve response for all students data from DB 
        return axios.get(Student_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(Student_API_BASE_URL,student);
    }

    getStudentById(studentId){
        return axios.get(Student_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(Student_API_BASE_URL + '/' + studentId,student );
    }

    deleteStudentById(studentId){
        return axios.delete(Student_API_BASE_URL + '/' + studentId);
    }

    getSubjectById(studentId){
        return axios.get(Student_API_BASE_URL + '/subject/' + studentId)
    }
}

export default new StudentService()