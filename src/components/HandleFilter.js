import React, { Component } from "react";
import styles from "./styleSheet.module.css";

export class HandleFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          className={styles.inputMargin}
          type="text"
          value={this.props.input}
          onChange={this.props.filterHandler}
        />
      </div>
    );
  }
}

export default HandleFilter;
