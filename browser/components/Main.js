
// 2

import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList'
import SingleStudent from './SingleStudent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
    this.selectStudent = this.selectStudent.bind(this)
  }



  componentDidMount() {                                                                   // Ensuring that you get the intended info before rendering
    this.getStudents();
  }



  async getStudents() {                                                                   // ??? Don't need to bind an axios request function? correct?
                                                                                          // 1)  router.get('/', function(req, res, next) {
                                                                                          //     Student.findAll().then(students => res.json(students));                               // Getting all the students
                                                                                          //   });
                                                                                          // 2) app.use('/student', Student)
                                                                                          // 3) Axios.get('/student')
    console.log('Fetching all students')
    try {
      const { data } = await axios.get('/student');                                       // Fetching data
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }



  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    })
  }



// Removed the <tbody> and </tbody> tags since they are already in StudentList.js
  render() {
    console.log('this is the state in main', this.state);
    return (

      <div>                                                                                 {/*  JSX requires that we have a wrapper component ??? tag?  */}
        <h1>Students</h1>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>

          <StudentList students={this.state.students} selectStudent={this.selectStudent} />

        </table>

        {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}

      </div>
    );
  }
}

export default Main;










// 3

// import React, { Component } from 'react';
// import axios from 'axios';

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [],
//       selectedStudent: {}
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//   }



//   componentDidMount() {                                                                   // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {                                                                   // ??? Don't need to bind an axios request function? correct?
//                                                                                           // 1)  router.get('/', function(req, res, next) {
//                                                                                           //     Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                           //   });
//                                                                                           // 2) app.use('/student', Student)
//                                                                                           // 3) Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const { data } = await axios.get('/student');                                       // Fetching data
//       this.setState({ students: data });
//     } catch (err) {
//       console.error(err);
//     }
//   }



//   selectStudent(student) {
//     return this.setState({
//       selectedStudent: student
//     })
//   }



// // Removed the <tbody> and </tbody> tags since they are already in StudentList.js
//   render() {
//     console.log('this is the state in main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component ??? tag?  */}
//         <h1>Students</h1>

//         <table>

//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <StudentList students={this.state.students} selectStudent={this.selectStudent} />

//         </table>

//         {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}

//       </div>
//     );
//   }
// }

// export default Main;









// 2

// import React, { Component } from 'react';
// import axios from 'axios';

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [],
//       selectedStudent: {}
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//   }



//   componentDidMount() {                                                                   // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {                                                                   // ??? Don't need to bind an axios request function? correct?
//                                                                                           // 1)  router.get('/', function(req, res, next) {
//                                                                                           //     Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                           //   });
//                                                                                           // 2) app.use('/student', Student)
//                                                                                           // 3) Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const { data } = await axios.get('/student');                                       // Fetching data
//       this.setState({ students: data });
//     } catch (err) {
//       console.error(err);
//     }
//   }



//   selectStudent(student) {
//     return this.setState({
//       selectedStudent: student
//     })
//   }



// // Removed the <tbody> and </tbody> tags since they are already in StudentList.js
//   render() {
//     console.log('this is the state in main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component ??? tag?  */}
//         <h1>Students</h1>

//         <table>

//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//         </table>

//         {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}

//       </div>
//     );
//   }
// }

// export default Main;










// 1

// import React, { Component } from 'react';
// import axios from 'axios';

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: []
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//   }



//   componentDidMount() {                                                                  // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {                                                                   // ??? Don't need to bind an axios request function? correct?
//                                                                                           // 1)  router.get('/', function(req, res, next) {
//                                                                                           //     Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                           //   });
//                                                                                           // 2) app.use('/student', Student)
//                                                                                           // 3) Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const { data } = await axios.get('/student');                                       // Fetching data
//       this.setState({ students: data });
//     } catch (err) {
//       console.error(err);
//     }
//   }



// selectStudent(student) {
//   return this.setState({
//     selectedStudent: student
//   })
// }



//   render() {
//     console.log('this is the state in main', this.state);
//     return (

//       <div>                                                                              {/*  JSX requires that we have a wrapper component ??? tag?  */}
//         <h1>Students</h1>

//         <table>
          
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <tbody>
//             {this.state.students.map(student => {                                        {/*  Since getStudents has obtained all the student data from the back-end, Mapping t*/}
//               return (
//                 <tr key={student.id}>
//                   <td>{student.fullName}</td>
//                 </tr>
//               );
//             })}
//           </tbody>

//         </table>

//       </div>
//     );
//   }



// export default Main;
