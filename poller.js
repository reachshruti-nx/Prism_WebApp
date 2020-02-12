
var express = require('express');
var router = express.Router();
var https = require('https');

require('dotenv').config({ path: 'variables.env' });

const PC_IP = process.env.PC_IP;



const attrs ={"entity_type":"alert","grouping_attribute":"severity","group_member_count":10,"group_member_sort_order":"DESCENDING","group_member_attributes":[{"attribute":"title"},{"attribute":"default_message"},{"attribute":"severity"},{"attribute":"param_name_list"},{"attribute":"param_value_list"}],"query_name":"prism:GroupByQueryModel","filter_criteria":"resolved==false"};
const url ="https://"+PC_IP+"/api/nutanix/v3/groups";


let isWorking = false;

setInterval(() => {
  if (isWorking) {
    return;
  }
  
  isWorking = true;
  console.log('do something (example: download URL)');
  isWorking = false;
}, 1000);