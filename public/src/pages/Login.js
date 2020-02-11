import React from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';

export default class Layout extends React.Component {

  login = () => {
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const url = "/api/nutanix/v3/groups";
    const query = {
      "entity_type":"recovery_plan",
      "group_member_attributes":[{"attribute":"name"},{"attribute":"source"}]};
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
    .catch(() => {
      console.log("I am in error");
    });
    console.log('In click');
  }

  render () {
    return (
      <div class="login-container">
        <Input id="pcip" placeholder="Enter PC IP" />
        <Input id="username" placeholder="Enter username" />
        <Input id="password" placeholder="Enter password" />
        <div>
          <Button 
            class="login-button"
            type="primary"
            onClick={() => this.login()}>
            Sign In
          </Button>
        </div>
      </div>
    );
  }
}