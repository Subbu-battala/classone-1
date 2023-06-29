import React,{Component} from "react";

const x =123
const title = 'welcome to react'
const isView = false
const users = ['kranthi', 'krishna','umesh','balu']
const emp = {
    id : 123,
    name: 'kranthi',
    email: 'rcbkranthi@gmail.com'
}

class Ex7 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>variable and data binding in class componenet</h1>
            </div>
        )
    }
}
export default Ex7