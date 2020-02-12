import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { extractGroupResults } from '../utils/utils.js';

class Tasks extends React.Component {

  componentWillMount () {
    // Make API Call to fetch alerts using groups call
    const url = "/api/nutanix/v3/groups";
    const query = {
        "entity_type":"task",
        "group_attributes":[],
        "group_member_count":40,
        "group_member_offset":0,
        "group_member_sort_attribute":"_created_timestamp_usecs_",
        "group_member_sort_order":"DESCENDING",
        "group_member_attributes":[
          {"attribute":"display_name"}, {"attribute":"percentage_complete"},
          {"attribute":"message"},{"attribute":"_created_timestamp_usecs_"},
          {"attribute":"entity_list"}
        ]
    };
    axios.post(url,query, {
      auth: {
          username: this.props.username,
          password: this.props.password
      }
    })
    .then((response) => {
      console.log(response);
      this.props.dispatch ({
        type: 'SET_TASKS_DETAILS',
        response: extractGroupResults(response.data)
      });
    })
    .catch((error) => {
      // TO DO : Show the message on UI
      alert(error);
    });
  }

  render () {
    const { tasks } = this.props.tasks;
    return (
      <div class="alerts-container">
        { tasks.map(function(task, index){
          return <li key={ index }>{task.display_name}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const loginDetails = state.loginReducer;
  const taskDetails = state.tasksReducer;
  return {
    username: loginDetails.username,
    password: loginDetails.password,
    tasks: taskDetails
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);