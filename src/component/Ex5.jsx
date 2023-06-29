import React from 'react'


const x =123
const title = 'welcome to react'
const isView = false
const users = ['kranthi', 'krishna','umesh','balu']
const emp = {
    id : 123,
    name: 'kranthi',
    email: 'rcbkranthi@gmail.com'
}

const Ex5 = (props) => {
    return (
        <div>
        <h1>variables And data binding in react</h1>
        <h4> x= {x}</h4>
         <h3>boolean= {isView ? 'say True' : 'say False'}</h3>
         <hr />
         <div>
            {isView ? <h1>True</h1> : <h1>False</h1>}
         </div>
         <hr/>
         <ul>
            {
                users.map((item,index) => {
                    return (
                        <li key={index}>{index} {item}</li>
                    )
                })
            }
         </ul>
         <hr/>

         <h3>emp id  = {emp.id}</h3>
         <h3>emp name  = {emp.name}</h3>
         <h3>emp email  = {emp.email}</h3>

    </div>
        
    )
}
export default Ex5