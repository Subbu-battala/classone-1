import { render } from "@testing-library/react";
import React, { Component } from "react";

const s = 200
const ns200 = "ns200 is a fastest bike in 200cc bikes"
const subbu = false
const array = ['subbu','sunil','arjun','shiva','karna']
const object = {
    id: 2,
    name: "subbu bolthe",
    email: "subbarayudu@gmail.com"
}

const Ex9 =(props) => {
    return(
        <div>
            <h1>s valu = {s} </h1>
            <hr />
            <h1>ns200 value= {ns200} </h1>
            <hr />
            <h1>subbu boolean value = {subbu ? "true" : "false"}</h1>
            <hr />
            <ol>
                {
                    array.map((item,index) => {
                        <li key={index}>{index}{item}</li>
                    })
                }
            </ol>
            <hr />
            <h1>object id= {object.id}</h1>
            <h1>object name={object.name}</h1>
            <h1>object email={object.email}</h1>
            
        </div>
    )
}


export default Ex9