import React, { Component } from "react";
import { connect } from "react-redux";

export class AllUsers extends Component {
  render() {
    var userstoShow = this.props.users.map((user) => (
      <tr key={user.ID}>
        <td>{user.ID}</td>
        <td>{user.Name}</td>
        <td>{user.LastName}</td>
        <td>{user.Age}</td>
      </tr>
    ));
    return (
      <div>
        <h2>All users:</h2>
        <table border="1">
          <tbody>{userstoShow}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(AllUsers);
