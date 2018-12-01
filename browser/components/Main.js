
import React from 'react';
import Axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []                      // Likely have an array of objects, which each represent a student
    }
  }



  /*

  1)
    router.get('/', function(req, res, next) {
      Student.findAll().then(students => res.json(students));       // Getting all the students
    });
  
  2)
    app.use('/student', Student)

  3)
    Axios.get('/student')

  */
  async getStudents() {                           // ??? Don't need to bind an axios request function? correct?
    try {
      const res = await Axios.get('/student')
      this.setState(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {                           // Ensuring that you get the intended info before rendering
    this.getStudents()
  }

  render() {                                      // Rendering a table of students | w/ one column (student's name)
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
                {this.state.students.map(student => {
                  return (
                    <tr key={student.id}>
                      <td>{student.fullName}</td>
                    </tr>
                  )
                })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Main;
