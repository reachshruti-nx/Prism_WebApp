import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { extractGroupResults } from '../utils/utils.js';
import Header from '../components/Header.js';
import { Spin, Collapse, Descriptions } from 'antd';
class Alerts extends React.Component {

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
    // Make API Call to fetch alerts using groups call
    // const url = "/api/nutanix/v3/groups";
    // const query = {
    //     "entity_type":"alert",
    //     "group_attributes":[],
    //     "group_member_count":40,
    //     "group_member_offset":0,
    //     "group_member_sort_attribute":"_created_timestamp_usecs_",
    //     "group_member_sort_order":"DESCENDING",
    //     "group_member_attributes":[
    //       {"attribute":"title"}, {"attribute":"source_entity_name"},
    //       {"attribute":"primary_impact_type"},{"attribute":"severity"},
    //       {"attribute":"status"},{"attribute":"_created_timestamp_usecs_"},
    //       {"attribute":"last_occurred_timestamp_usecs"},
    //       {"attribute":"default_message"},{"attribute":"param_name_list"},
    //       {"attribute":"param_value_list"},{"attribute":"auto_resolved"},
    //       {"attribute":"acknowledged"},{"attribute":"acknowledging_user"},
    //       {"attribute":"acknowledged_timestamp_usecs"},{"attribute":"resolved"},
    //       {"attribute":"resolving_user"},{"attribute":"resolved_timestamp_usecs"},
    //       {"attribute":"impact_type"}],
    //     "filter_criteria":"severity==critical;resolved==false"};
    // axios.post(url,query, {
    //   auth: {
    //       username: this.props.username,
    //       password: this.props.password
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    //   this.props.dispatch ({
    //     type: 'SET_ALERTS_DETAILS',
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
    const { alerts } = this.props.alerts;
    const { Panel } = Collapse;
    return (
      <Spin size="large" spinning={this.state.loading}>
        <div>
          <Header/>
          <div class="alerts-tasks-container">
          <Collapse accordion expandIconPosition='right'>
            { alerts.map(function(alert,index){
              // TO DO : compute the alert title
              const title = alert.title;
              return (
              <Panel header={ title } key={index}>
                <Descriptions
                  bordered
                  column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                  <Descriptions.Item label="Impact Type">{ alert.impact_type }</Descriptions.Item>
                  <Descriptions.Item label="Source Entity">{ alert.source_entity_name }</Descriptions.Item>
                  {/* <Descriptions.Item label="Created Time">{ alert._created_timestamp_usecs_}</Descriptions.Item> */}
                  {/* <Descriptions.Item label="Last occured Time">{ alert.last_occurred_timestamp_usecs}</Descriptions.Item> */}
                </Descriptions>
              </Panel>
              );
            })}
          </Collapse>
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