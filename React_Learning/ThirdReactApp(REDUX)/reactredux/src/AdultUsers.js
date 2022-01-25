import React, { Component } from 'react';
import { connect } from "react-redux";

export class AdultUsers extends Component {
  render() {
    var allUsers = this.props.users;
    if(allUsers != undefined)
    {
        var FilteredUsers = allUsers.filter(item => item.Age > 18);
        if(FilteredUsers.length > 0)
        {
            var userstoShow = FilteredUsers.map((user) => (
                <tr key={user.ID}>
                  <td>{user.ID}</td>
                  <td>{user.Name}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Age}</td>
                </tr>
              ));
        }
    }
    

    return <div>
 <div>
        <h2>Adult users:</h2>
        <table border="1">
          <tbody>{userstoShow}</tbody>
        </table>
      </div>
        
    </div>;
  }
}


const mapStateToProps = (state) => {
    return {
      users: state.users,
    };
  };
  

export default  connect(mapStateToProps)(AdultUsers);
