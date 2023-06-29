import React from 'react'

const name = 'kranthi'
const mobile = 75765675
const names = ['kranthi','kumar','chinthalapalli']
const details = {
    name:'kranthi',
    id:123,
    mobile:6558687
}

const Ex6 = function (props) {

    return (
    <div>
        <h1>react const local functional component</h1>
        <h2>name = {name}</h2>
        <h3>mobile = {mobile}</h3>
        <hr/>
         <div>
            <ul>
                {
                    names.map((item,index) => {
                        return (
                            <li key={index}>{index} {item}</li>
                        )
                    })
                }
            </ul>
         </div>
         <hr/>
         <h1>name = {details.name}</h1>
         <h1>id = {details.id}</h1>
         <h1>mobile = {details.mobile}</h1>
    </div>
    )
}
export default Ex6