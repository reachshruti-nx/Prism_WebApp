// Libraries
import Immutable from 'immutable';

const initialState = {
  alerts: [
    {
      "id": "373de93b-c795-406c-9362-0d3a351bb250",
      "entity_id": "373de93b-c795-406c-9362-0d3a351bb250",
      "title": "{operation_type} failed for the Recovery Plan {recovery_plan_name}",
      "source_entity_name": "test_rp_yuvraj",
      "primary_impact_type": "Availability",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581403807232845",
      "last_occurred_timestamp_usecs": "1581403807232845",
      "default_message": "The {operation_type} for the recovery plan {recovery_plan_name} could not be started due to errors in validation.",
      "param_name_list": "recovery_plan_uuid",
      "param_value_list": "02308d67-e5cd-4365-a4d0-1a308bb6e5d9",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "Availability"
    },
    {
      "id": "dc370014-8c57-47e4-a1cb-db4708065fd9",
      "entity_id": "dc370014-8c57-47e4-a1cb-db4708065fd9",
      "title": "{operation_type} failed for the Recovery Plan {recovery_plan_name}",
      "source_entity_name": "test_rp_yuvraj",
      "primary_impact_type": "Availability",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581403537516148",
      "last_occurred_timestamp_usecs": "1581403537516148",
      "default_message": "The {operation_type} for the recovery plan {recovery_plan_name} could not be started due to errors in validation.",
      "param_name_list": "recovery_plan_uuid",
      "param_value_list": "02308d67-e5cd-4365-a4d0-1a308bb6e5d9",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "Availability"
    },
    {
      "id": "45808bd0-4cb9-42b4-8d0d-0dece985f535",
      "entity_id": "45808bd0-4cb9-42b4-8d0d-0dece985f535",
      "title": "{operation_type} failed for the Recovery Plan {recovery_plan_name}",
      "source_entity_name": "test_rp_yuvraj",
      "primary_impact_type": "Availability",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581403456050161",
      "last_occurred_timestamp_usecs": "1581403456050161",
      "default_message": "The {operation_type} for the recovery plan {recovery_plan_name} could not be started due to errors in validation.",
      "param_name_list": "recovery_plan_uuid",
      "param_value_list": "02308d67-e5cd-4365-a4d0-1a308bb6e5d9",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "Availability"
    },
    {
      "id": "3f1b59ff-b23b-4392-b92d-30423e34edbd",
      "entity_id": "3f1b59ff-b23b-4392-b92d-30423e34edbd",
      "title": "Firmware version of SM863 or SM863a drives is old on {ip_address}..",
      "source_entity_name": "trisul-2",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581075748802489",
      "last_occurred_timestamp_usecs": "1581334949088345",
      "default_message": "{dev_type} drive {dev_name} on host {ip_address} has the following problems: {err_msg}",
      "param_name_list": "dev_type",
      "param_value_list": "SM863a",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "a5714ecf-7324-4931-aa0d-43fa164e6f68",
      "entity_id": "a5714ecf-7324-4931-aa0d-43fa164e6f68",
      "title": "{fan_id} Speed Low on {ip_address}",
      "source_entity_name": "worf-3",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069853344858",
      "last_occurred_timestamp_usecs": "1581536353878237",
      "default_message": "{fan_id} has stopped or its speed is low on Controller VM {ip_address}.",
      "param_name_list": "service_vm_external_ip",
      "param_value_list": "10.45.134.201",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "57277dd7-5bf2-4d42-b6ed-edfa5bc1674b",
      "entity_id": "57277dd7-5bf2-4d42-b6ed-edfa5bc1674b",
      "title": "{fan_id} Speed Low on {ip_address}",
      "source_entity_name": "worf-3",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069853308327",
      "last_occurred_timestamp_usecs": "1581536353828418",
      "default_message": "{fan_id} has stopped or its speed is low on Controller VM {ip_address}.",
      "param_name_list": "service_vm_external_ip",
      "param_value_list": "10.45.134.201",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "5d96d750-d85a-4862-a4af-ef1092038d0a",
      "entity_id": "5d96d750-d85a-4862-a4af-ef1092038d0a",
      "title": "Firmware version of SM863 or SM863a drives is old on {ip_address}..",
      "source_entity_name": "worf-3",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069531553034",
      "last_occurred_timestamp_usecs": "1581328732116717",
      "default_message": "{dev_type} drive {dev_name} on host {ip_address} has the following problems: {err_msg}",
      "param_name_list": "dev_type",
      "param_value_list": "SM863a",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "aa4046c4-ace0-40b8-a4cd-29a34f856730",
      "entity_id": "aa4046c4-ace0-40b8-a4cd-29a34f856730",
      "title": "Storage Container Replication Factor Low",
      "source_entity_name": "SelfServiceContainer",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069527710133",
      "last_occurred_timestamp_usecs": "1581533926862841",
      "default_message": "Replication factor of {container_region} on Storage Container {container_name} is set to 1.",
      "param_name_list": "container_id",
      "param_value_list": "156",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "83ce30a4-189f-41f1-97f0-7780b44b5aa7",
      "entity_id": "83ce30a4-189f-41f1-97f0-7780b44b5aa7",
      "title": "Storage Container Replication Factor Low",
      "source_entity_name": "NutanixManagementShare",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069527546543",
      "last_occurred_timestamp_usecs": "1581533926630898",
      "default_message": "Replication factor of {container_region} on Storage Container {container_name} is set to 1.",
      "param_name_list": "container_id",
      "param_value_list": "6",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "4aa82905-ea5d-4a23-b92e-266bff3832a6",
      "entity_id": "4aa82905-ea5d-4a23-b92e-266bff3832a6",
      "title": "Storage Container Replication Factor Low",
      "source_entity_name": "default-container-37064",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1581069527479288",
      "last_occurred_timestamp_usecs": "1581533926603591",
      "default_message": "Replication factor of {container_region} on Storage Container {container_name} is set to 1.",
      "param_name_list": "container_id",
      "param_value_list": "5",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "f8d2742d-957c-4f84-8f21-20478f680689",
      "entity_id": "f8d2742d-957c-4f84-8f21-20478f680689",
      "title": "Storage Container Replication Factor Low",
      "source_entity_name": "SelfServiceContainer",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1580888002461389",
      "last_occurred_timestamp_usecs": "1581534049265573",
      "default_message": "Replication factor of {container_region} on Storage Container {container_name} is set to 1.",
      "param_name_list": "container_id",
      "param_value_list": "156",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    },
    {
      "id": "a9bb8dcb-f097-40b6-a1b0-397df22dbe83",
      "entity_id": "a9bb8dcb-f097-40b6-a1b0-397df22dbe83",
      "title": "Storage Container Replication Factor Low",
      "source_entity_name": "NutanixManagementShare",
      "primary_impact_type": "SystemIndicator",
      "severity": "critical",
      "_created_timestamp_usecs_": "1580888002432194",
      "last_occurred_timestamp_usecs": "1581534049246106",
      "default_message": "Replication factor of {container_region} on Storage Container {container_name} is set to 1.",
      "param_name_list": "container_id",
      "param_value_list": "5",
      "auto_resolved": "false",
      "acknowledged": "false",
      "resolved": "false",
      "impact_type": "SystemIndicator"
    }
  ]
};

/**
 * Receives an action to update state
 * @param {object} state - initial state.
 * @param {object} action - action type.
 * @returns {object} - updated state.
 */
export default function reducer (state = initialState, action) {
  let modifiedState = Immutable.fromJS(state);
  switch (action.type) {
    case 'SET_ALERTS_DETAILS':
    modifiedState = modifiedState
        .setIn(['alerts'], action.response)
      break;
    default: break;
  }

  return modifiedState.toJSON();
}