import React, { Component } from "react";
import Axios from "axios";
import styles from "./styleSheet.module.css";
import HandleFilter from "./HandleFilter";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      input: "",
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount() {
    Axios.get(
      "https://randomuser.me/api/?inc=name,location,picture&results=10"
    ).then((res) => {
      const slicedList = res.data.results.slice(0);
      this.setState({ users: slicedList });
      console.log(this.state.users);
    });
  }

  filterHandler = (e) => {
    this.setState({ input: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <HandleFilter filterHandler={this.filterHandler} />
        <div className={styles.container}>
          {this.state.users.length > 0 &&
            this.state.users
              .filter(
                (user) =>
                  this.state.input === "" ||
                  user.name.first.toLowerCase().includes(this.state.input)
              )
              .map((user) => {
                const { name, picture, location } = user;
                return (
                  <div className={styles.card}>
                    <h1>
                      {name.first} {name.last}
                    </h1>
                    <img className={styles.img} src={picture.medium} />
                    <p>
                      `{location.street.number} {location.street.name}{" "}
                      {location.city} {location.state}
                      {location.postcode}`
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
export default User;
