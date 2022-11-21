import React from "react";

class Props extends React.Component{

    render(){
       return  <div>
        <h1>Hello {this.props.name} from {this.props.city }</h1>
        <p>{this.props.children}</p>
       </div>
      
    }
}

export default Props;