import React from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginDisabled: false
    };
  }

  login = () => {
    this.setState({ loginDisabled:true });
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const url = "/api/nutanix/v3/groups";
    const query = {
      "entity_type":"cluster",
      "filter_criteria":"include_pc==true",
      "group_member_attributes":
        [{"attribute":"name"},
         {"attribute":"version"},
         {"attribute":"is_available"},
         {"attribute":"service_list"},
         {"attribute":"full_version"},
         {"attribute":"external_ip_address"},
         {"attribute":"hypervisor_types"},
         {"attribute":"enabled_feature_list"},
         {"attribute":"management_server_list"},
         {"attribute":"gpu_driver_version"},
         {"attribute":"timezone"},
         {"attribute":"redundancy_factor"},{"attribute":"cluster_arch"},
         {"attribute":"ncc_version"},
         {"attribute":"fully_qualified_domain_name"},
         {"attribute":"capacity.bully_vm_num"},
         {"attribute":"capacity.constrained_vm_num"},
         {"attribute":"capacity.dead_vm_num"},
         {"attribute":"capacity.overprovisioned_vm_num"}]};
    axios.post(url,query, {
      auth: {
          username: username,
          password: password
      }
    })
    .then((response) => {
      console.log("I am in success");
      console.log(response);
    })
    .catch((error) => {
      // TO DO : Show the message on UI
      alert(error);
    });
  }

  render () {
    return (
      <div class="login-container">
        <div class="login-description">
          Use your Nutanix username and password to log in to Prism
        </div>
        <Input id="pcip" placeholder="Enter PC IP" />
        <Input id="username" placeholder="Enter username" />
        <Input id="password" placeholder="Enter password" />
        <div>
          <Button 
            class="login-button"
            type="primary"
            disabled= {this.state.loginDisabled}
            onClick={() => this.login()}>
            Sign In
          </Button>
        </div>
      </div>
    );
  }
}