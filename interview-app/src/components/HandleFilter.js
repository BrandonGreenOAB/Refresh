import React, { Component } from "react";

export class HandleFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.filterHandler}
        />
      </div>
    );
  }
}

export default HandleFilter;
