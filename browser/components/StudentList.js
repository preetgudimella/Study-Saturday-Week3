
// final
// Since getStudents has obtained all the student data from the back-end, Mapping the students array
// What's happening in the <td onClick tag: ???
// Student model has an id property (primary Id)
// Student model has a fullName property

import React from 'react';


const StudentList = props => {
  console.log('Here are props in StudentList', props);
  return (

    <tbody>
      {props.students.map(student => {                                            {/*  Since getStudents has obtained all the student data from the back-end, mapping the students array  */}
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td onClick={() => props.selectStudent(student)}>Details</td>
            <td>Click on Details</td>
          </tr>
        );
      })}
    </tbody>

  )
}



export default StudentList;









// 2

// import React from 'react';


// const StudentList = props => {
//   console.log('Here are props in StudentList', props);
//   return (

//     <tbody>
//       {this.state.students.map(student => {
//         return (
//           <tr key={student.id}>
//             <td>{student.fullName}</td>
//             <td>Click on Details</td>
//           </tr>
//         );
//       })}
//     </tbody>

//   )
// }



// export default StudentList;










// 1

// import React from 'react';



// const StudentList = props => {
//   console.log('Here are props in StudentList', props);
//   return (

//   )
// }



// export default StudentList;
