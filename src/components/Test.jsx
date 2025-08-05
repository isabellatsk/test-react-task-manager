//não está sendo usado, é só pra demonstrar componente de classe
// <Test />

import React from "react";

//componente de classe - não muito utilizado
class Test extends React.Component {
  //usar state em componente classe
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
