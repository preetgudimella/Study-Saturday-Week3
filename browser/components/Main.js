
// final
// SingleStudent:
//    - this.state.selectedStudent.id is referencing the primary id
//    - <SingleStudent student={this.state.selectedStudent} /> is referncing props.student in SingleStudent in SingleStudent.js
// StudentList:
//    - Everything from the return portion of the StudentList child component is being brought in here
//    - students={this.state.students} - rendering this from Main.js
//    - selectStudent={this.selectStudent} - rendering <td onClick={() => props.selectStudent(student)}>Details</td> in StudentList, which utilizes the selectStudent method in Main.js
//    - ??? How do I know to write this code like this? What does it mean? How do I know to put this here?

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
    this.getStudents = this.getStudents.bind(this)
  }



  componentDidMount() {                                                                   // Ensuring that you get the intended info before rendering
    this.getStudents();
  }



  async getStudents() {
                                                                                          // 1)  app.js (required student.js)
                                                                                              //  app.use('/student', Student)
                                                                                          // 2) student.js in routes folder
                                                                                              // router.get('/', function(req, res, next) {
                                                                                              //   Student.findAll().then(students => res.json(students));                               // Getting all the students
                                                                                              // });
                                                                                          // 3) Main.js
                                                                                              // Axios.get('/student')
    console.log('Fetching all students')
    try {
      const res = await axios.get('/student');                                       // Fetching data
      this.setState({
        students: res.data
      });
    } catch (err) {
      console.error(err);
    }
  }



  selectStudent(student) {
    return this.setState({
      selectedStudent: student                                                        // student refers to the student that is mapped over in the child component StudentList in StudentList.js
    })
  }



// Removed the <tbody> and </tbody> tags since they are already in StudentList.js
  render() {
    console.log('This is the state in Main', this.state);
    return (

      <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
        <h1>Students</h1>

        <table>

          <thead>
            <tr>
              <th>Full Name</th>
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



//   async getStudents() {
//                                                                                           // 1)  app.js (required student.js)
//                                                                                               //  app.use('/student', Student)
//                                                                                           // 2) student.js in routes folder
//                                                                                               // router.get('/', function(req, res, next) {
//                                                                                               //   Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                               // });
//                                                                                           // 3) Main.js
//                                                                                               // Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const res = await axios.get('/student');                                       // Fetching data
//       this.setState({
//         students: res.data
//       });
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
//     console.log('This is the state in Main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
//         <h1>Students</h1>

//         <table>

//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <StudentList students={this.state.students} selectStudent={this.selectStudent} />

//         </table>

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



//   async getStudents() {
//                                                                                           // 1)  app.js (required student.js)
//                                                                                               //  app.use('/student', Student)
//                                                                                           // 2) student.js in routes folder
//                                                                                               // router.get('/', function(req, res, next) {
//                                                                                               //   Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                               // });
//                                                                                           // 3) Main.js
//                                                                                               // Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const res = await axios.get('/student');                                       // Fetching data
//       this.setState({
//         students: res.data
//       });
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
//     console.log('This is the state in Main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
//         <h1>Students</h1>

//         <table>

//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//         </table>

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
//       students: [],
//       selectedStudent: {}
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//   }



//   componentDidMount() {                                                                  // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {
//                                                                                           // 1)  app.js (required student.js)
//                                                                                               //  app.use('/student', Student)
//                                                                                           // 2) student.js in routes folder
//                                                                                               // router.get('/', function(req, res, next) {
//                                                                                               //   Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                               // });
//                                                                                           // 3) Main.js
//                                                                                               // Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const res = await axios.get('/student');                                       // Fetching data
//       this.setState({
//         students: res.data                                                                    // data vs { data } above
//       })
//     } catch (err) {
//       console.error(err);                                                                 // ??? include next(err)? - no since exclusive to express
//     }
//   }



//  selectStudent(student) {
//    return this.setState({
//      selectedStudent: student
//    })
//  }



//   render() {
//     console.log('This is the state in Main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
//         <h1>Students</h1>

//         <table>
          
//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <tbody>
//             {this.state.students.map(student => {                                        {/*  Since getStudents has obtained all the student data from the back-end, Mapping t*/}
//               return (
//                 <tr key={student.id}>
//                   <td>{student.fullName}</td>                                            {/*  Student model has a fullName property  */}
//                   <td>Click on Details</td>
//                 </tr>
//               );
//             })}
//           </tbody>

//         </table>

//       </div>
//     );
//   }



// export default Main;
