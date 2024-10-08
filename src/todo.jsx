/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types

//conditional rendering
// export default function Todo({ task, isDone }) {

//     if (isDone) {
//         return (
//             <>
//                 <li> finished:{task} </li>
//             </>
//         )
//     }
//     else {
//         return (
//             <>
//                 <li> Not finished:{task} </li>
//             </>
//         )
//     }

// }

// option 2
// export default function Todo({ task, isDone }) {

//     if (isDone) {
//         return (
//             <>
//                 <li> finished:{task} </li>
//             </>
//         )
//     }
//     return (
//         <>
//             <li> finished:{task} </li>
//         </>
//     )

// }

// option 3 ternary operator

// export default function Todo({ task, isDone }) {

//     return (
//         <>
//             <li>
//                 {isDone ? 'finished' : 'not-finished'}:{task}
//             </li>
//         </>
//     )
// }


// option 4 if true then show otherwise nothing will be shown &&

// export default function Todo({ task, isDone }) {

//     return (
//         <>
//             <li>
//                 {task}{isDone && `finished}`}
//             </li>
//         </>
//     )
// }

// option 5 if fauls
// export default function Todo({ task, isDone }) {

//     return (
//         <>
//             <li>
//                 {task} {isDone || `Do it`}
//             </li>
//         </>
//     )
// }

// option 6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finish : {task}</li>
    }
    else {
        listItem = <li>work on : {task}</li>
    }

    return listItem
}

