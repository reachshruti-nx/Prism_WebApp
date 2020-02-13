import React from 'react';
import { Button } from 'antd';
// import axios from 'axios';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
// import { extractGroupResults } from '../utils/utils.js';
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginDisabled: false
    };
  }

  login = () => {
    this.setState({ loginDisabled:true });
    var delayInMilliseconds = 2000; //2 second
    setTimeout(function() {
      hashHistory.push("/dashboard");
    }, delayInMilliseconds);
    // const username=document.getElementById('username').value;
    // const password=document.getElementById('password').value;
    // this.props.dispatch ({
    //   type: 'SET_LOGIN_DETAILS',
    //   username,
    //   password
    // });
    // const url = "/api/nutanix/v3/groups";
    // const query = {
    //   "entity_type":"cluster",
    //   "filter_criteria":"include_pc==true",
    //   "group_member_attributes":
    //     [{"attribute":"name"},
    //      {"attribute":"version"},
    //      {"attribute":"is_available"},
    //      {"attribute":"service_list"},
    //      {"attribute":"full_version"},
    //      {"attribute":"external_ip_address"},
    //      {"attribute":"hypervisor_types"},
    //      {"attribute":"enabled_feature_list"},
    //      {"attribute":"management_server_list"},
    //      {"attribute":"gpu_driver_version"},
    //      {"attribute":"timezone"},
    //      {"attribute":"redundancy_factor"},{"attribute":"cluster_arch"},
    //      {"attribute":"ncc_version"},
    //      {"attribute":"fully_qualified_domain_name"},
    //      {"attribute":"capacity.bully_vm_num"},
    //      {"attribute":"capacity.constrained_vm_num"},
    //      {"attribute":"capacity.dead_vm_num"},
    //      {"attribute":"capacity.overprovisioned_vm_num"}]};
    // axios.post(url,query, {
    //   auth: {
    //       username: username,
    //       password: password
    //   }
    // })
    // .then((response) => {
    //   this.props.dispatch ({
    //     type: 'SET_CLUSTER_DETAILS',
    //     response: extractGroupResults(response.data)
    //   });
    //   hashHistory.push("/dashboard");
    // })
    // .catch((error) => {
    //   // TO DO : Show the message on UI
    //   alert(error);
    // });
  }

  render () {
    return (
      <div class="login-container">
        <div style={{ "textAlign": "center", "marginBottom": "50px" }}>
          <img src="/images/prism.png" alt="Nutanix Logo" />
        </div>

        <div class="field">
          <input id="username" type="input" class="" placeholder="Username" name="username" required />
        </div>
        <div class="field">
          <input id="password" type="password" class="" placeholder="Password" name="password" required />
        </div>
        <div class="field">
          <Button
            class="login-button"
            type="primary"
            disabled= {this.state.loginDisabled}
            onClick={() => this.login()}>
            Sign In
          </Button>
        </div>
          <div class="footer" style={{ "color":"#fff" }}>
          <h5 style={{ "color": "#fff", "fontWeight": "100" }}>
            Powered by:
          </h5>
          <div>
            <img src="/images/ntnx.png" alt="Nutanix Logo" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);