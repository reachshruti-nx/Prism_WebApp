import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { extractGroupResults } from '../utils/utils.js';
import Header from '../components/Header.js';
import { Spin, Card } from 'antd';
class Alerts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount () {
    // Make API Call to fetch alerts using groups call
    const url = "/api/nutanix/v3/groups";
    const query = {
        "entity_type":"alert",
        "group_attributes":[],
        "group_member_count":40,
        "group_member_offset":0,
        "group_member_sort_attribute":"_created_timestamp_usecs_",
        "group_member_sort_order":"DESCENDING",
        "group_member_attributes":[
          {"attribute":"title"}, {"attribute":"source_entity_name"},
          {"attribute":"primary_impact_type"},{"attribute":"severity"},
          {"attribute":"status"},{"attribute":"_created_timestamp_usecs_"},
          {"attribute":"last_occurred_timestamp_usecs"},{"attribute":"cluster"},
          {"attribute":"default_message"},{"attribute":"param_name_list"},
          {"attribute":"param_value_list"},{"attribute":"auto_resolved"},
          {"attribute":"acknowledged"},{"attribute":"acknowledging_user"},
          {"attribute":"acknowledged_timestamp_usecs"},{"attribute":"resolved"},
          {"attribute":"resolving_user"},{"attribute":"resolved_timestamp_usecs"},
          {"attribute":"source_entity_uuid"},{"attribute":"source_entity_type"},
          {"attribute":"impact_type"}],
        "filter_criteria":"severity==critical;resolved==false"};
    axios.post(url,query, {
      auth: {
          username: this.props.username,
          password: this.props.password
      }
    })
    .then((response) => {
      console.log(response);
      this.props.dispatch ({
        type: 'SET_ALERTS_DETAILS',
        response: extractGroupResults(response.data)
      });
      this.setState({ loading: false });
    })
    .catch((error) => {
      // TO DO : Show the message on UI
      alert(error);
      this.setState({ loading: false });
    });
  }

  render () {
    const { alerts } = this.props.alerts;
    return (
      <Spin size="large" spinning={this.state.loading}>
        <div>
          <Header/>
          <div class="alerts-tasks-container">
            { alerts.map(function(alert){
              // TO DO : compute the alert title
              const title = alert.title;
              return (
                <Card size="small">
                  <p>{ title }</p>
                  {/* TO DO */}
                  <a href="#">Click to know more</a>
              </Card>);
            })}
          </div>
        </div>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => {
  const loginDetails = state.loginReducer;
  const alertDetails = state.alertsReducer;
  return {
    username: loginDetails.username,
    password: loginDetails.password,
    alerts: alertDetails
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);