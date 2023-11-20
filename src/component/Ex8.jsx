import React from "react";

const x = 200
const subbu = "subbu is a good boy"
const isView = true
const bikes = ['ns200', 'Rs200', 'R15', 'mt15']
const phones = {
    id: 123,
    name: "iphone13",
    email: "subbubattala01@gmail.com"
}



function Ex8(props){
    return(
        <div>
            <h1>x= {x}</h1>
            <hr />
            <h1>boolen value = {isView ? 'say True' : 'sayFalse'} </h1>
            <hr />
            <div>
                {isView ? <h1>True</h1>: <h1>False</h1>}
            </div>
            <hr />
            <ul>
                {
                    bikes.map((item,index) => {
                        return (
                            <li key={index}>{index}{item}</li>
                        )
                    })
                }
            </ul>
            <hr />
            <h3>emp id = {phones.id}</h3>
            <h3>emp name = {phones.name}</h3>
            <h3>emp email = {phones.email}</h3>
        </div>
    )
}

export default Ex8