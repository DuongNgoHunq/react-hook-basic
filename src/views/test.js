import React from "react";

class Test extends React.Component{
    expr = "t";
    handleSolution =(expr)=> {
        if(expr === "t")
        alert("true")
    }
    render(){
        return(
           <div onClick={()=>this.handleSolution("f")}>
               hello world from test
           </div> 
        )
    }
}

export default Test; 