/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Singer({ singer }) {
    const { name, age } = singer;
    // console.log(singer)
    return (
        <div>
            <h4>Singer: {name}</h4>
            <h4>age: {age}</h4>
        </div>
    )
}