import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { extractGroupResults } from '../utils/utils.js';
import Header from '../components/Header.js';
import { Spin, Collapse, Descriptions } from 'antd';
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount () {
    var delayInMilliseconds = 2000; //2 second
    const This = this;
    setTimeout(function() {
      This.setState({ loading: false});
    }, delayInMilliseconds);
    // // Make API Call to fetch alerts using groups call
    // const url = "/api/nutanix/v3/groups";
    // const query = {
    //     "entity_type":"task",
    //     "group_attributes":[],
    //     "group_member_count":40,
    //     "group_member_offset":0,
    //     "group_member_sort_attribute":"_created_timestamp_usecs_",
    //     "group_member_sort_order":"DESCENDING",
    //     "group_member_attributes":[
    //       {"attribute":"display_name"}, {"attribute":"percentage_complete"},
    //       {"attribute":"message"},{"attribute":"_created_timestamp_usecs_"},
    //       {"attribute":"entity_list"},{"attribute":"status"}
    //     ]
    // };
    // axios.post(url,query, {
    //   auth: {
    //       username: this.props.username,
    //       password: this.props.password
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    //   this.props.dispatch ({
    //     type: 'SET_TASKS_DETAILS',
    //     response: extractGroupResults(response.data)
    //   });
    //   this.setState({ loading: false });
    // })
    // .catch((error) => {
    //   // TO DO : Show the message on UI
    //   alert(error);
    //   this.setState({ loading: false });
    // });
  }

  render () {
    const { tasks } = this.props.tasks;
    const { Panel } = Collapse;
    return (
      <Spin size="large" spinning={this.state.loading}>
        <div>
          <Header/>
          <Collapse accordion expandIconPosition='right'>
            { tasks.map(function(task,index){
              // TO DO : compute the alert title
              const title = task.display_name;
              let status = "-";
              // Compute task status
              if (task.status === "kSucceeded") {
                status = "Succeeded";
              } else if (task.status === "kRunning"){
                status = "Running";
              }
              return (
              <Panel header={ title } key={index}>
                <Descriptions
                  bordered
                  column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                  <Descriptions.Item label="Percentage Completed">{ task.percentage_complete }</Descriptions.Item>
                  <Descriptions.Item label="Status">{ status }</Descriptions.Item>
                  {/* <Descriptions.Item label="Created Time">{ alert._created_timestamp_usecs_}</Descriptions.Item> */}
                  {/* <Descriptions.Item label="Last occured Time">{ alert.last_occurred_timestamp_usecs}</Descriptions.Item> */}
                </Descriptions>
              </Panel>
              );
            })}
          </Collapse>
        </div>
      </Spin>
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