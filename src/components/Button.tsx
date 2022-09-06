import React from "react"

const Button = (props) => {

    return (<div style={{ margin: '16px' }}>
        <button>test from nav, I am in {props.module || "Nav"}</button>
    </div>)
}

export default Button