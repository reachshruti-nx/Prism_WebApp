// Libraries
import Immutable from 'immutable';

const initialState = {
  clusterDetails: [
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "_created_timestamp_usecs_": "1580889239649366",
      "ncc_version": "ncc-3.10.1",
      "full_version": "el7.3-release-euphrates-5.17-stable-5181b051c9105e23ae552dc7024aec38ffbfa5c1",
      "service_list": "PRISM_CENTRAL",
      "name": "Unnamed",
      "fully_qualified_domain_name": "",
      "external_ip_address": "10.40.217.88",
      "redundancy_factor": "1",
      "hypervisor_types": "kNull",
      "is_available": "true",
      "entity_id": "dd32138d-172c-49a5-9cb8-544c46821a8f",
      "version": "5.17",
      "timezone": "America/Los_Angeles",
      "id": "dd32138d-172c-49a5-9cb8-544c46821a8f",
      "cluster_arch": "X86_64"
    },
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "capacity.dead_vm_num": "0",
      "_created_timestamp_usecs_": "1580889814653657",
      "ncc_version": "ncc-3.10.0",
      "full_version": "el7.3-release-euphrates-5.17-stable-5181b051c9105e23ae552dc7024aec38ffbfa5c1",
      "service_list": "AOS",
      "name": "auto_cluster_prod_4fa62e4a8000",
      "capacity.bully_vm_num": "0",
      "fully_qualified_domain_name": "",
      "external_ip_address": "10.45.133.197",
      "redundancy_factor": "2",
      "hypervisor_types": "kKvm",
      "capacity.overprovisioned_vm_num": "0",
      "is_available": "true",
      "entity_id": "00059dce-ea75-3237-0000-0000000129b0",
      "version": "5.17",
      "timezone": "America/Los_Angeles",
      "id": "00059dce-ea75-3237-0000-0000000129b0",
      "cluster_arch": "X86_64",
      "capacity.constrained_vm_num": "0"
    },
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "capacity.dead_vm_num": "0",
      "_created_timestamp_usecs_": "1580889814760930",
      "ncc_version": "ncc-3.10.1",
      "full_version": "el7.3-release-euphrates-5.17-stable-5181b051c9105e23ae552dc7024aec38ffbfa5c1",
      "service_list": "AOS",
      "name": "auto_cluster_prod_4fa62e4a8002",
      "capacity.bully_vm_num": "0",
      "fully_qualified_domain_name": "",
      "external_ip_address": "10.45.129.220",
      "redundancy_factor": "1",
      "hypervisor_types": "kKvm",
      "capacity.overprovisioned_vm_num": "0",
      "is_available": "true",
      "entity_id": "00059dcf-0e74-b868-1e2b-ac1f6b6088a2",
      "version": "5.17",
      "timezone": "America/Los_Angeles",
      "id": "00059dcf-0e74-b868-1e2b-ac1f6b6088a2",
      "cluster_arch": "X86_64",
      "capacity.constrained_vm_num": "0"
    },
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "capacity.dead_vm_num": "0",
      "_created_timestamp_usecs_": "1580889817063016",
      "ncc_version": "ncc-3.10.1",
      "full_version": "el7.3-release-euphrates-5.17-stable-5181b051c9105e23ae552dc7024aec38ffbfa5c1",
      "service_list": "AOS",
      "name": "auto_cluster_prod_4fa62e4a7ffe",
      "capacity.bully_vm_num": "0",
      "fully_qualified_domain_name": "",
      "external_ip_address": "10.45.133.191",
      "redundancy_factor": "2",
      "hypervisor_types": "kKvm",
      "capacity.overprovisioned_vm_num": "0",
      "is_available": "true",
      "entity_id": "00059dce-e10f-6bef-0000-0000000129ad",
      "version": "5.17",
      "timezone": "America/Los_Angeles",
      "id": "00059dce-e10f-6bef-0000-0000000129ad",
      "cluster_arch": "X86_64",
      "capacity.constrained_vm_num": "0"
    },
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "capacity.dead_vm_num": "0",
      "_created_timestamp_usecs_": "1581308659384169",
      "ncc_version": "ncc-3.9.2.1",
      "full_version": "el7.3-release-euphrates-5.11.2-stable-23a09f9de2cc570dcca9ee54098025a4ed80e8a1",
      "service_list": "AOS",
      "name": "auto_cluster_prod_4fb12678cd8b",
      "capacity.bully_vm_num": "0",
      "fully_qualified_domain_name": "",
      "external_ip_address": "",
      "redundancy_factor": "1",
      "hypervisor_types": "kKvm",
      "capacity.overprovisioned_vm_num": "0",
      "is_available": "true",
      "entity_id": "00059dfa-be3e-e200-7985-ac1f6b608a5a",
      "version": "5.11.2",
      "timezone": "America/Los_Angeles",
      "id": "00059dfa-be3e-e200-7985-ac1f6b608a5a",
      "cluster_arch": "X86_64",
      "capacity.constrained_vm_num": "0"
    },
    {
      "enabled_feature_list": "PASSWORD_REMOTE_LOGIN_ENABLED",
      "capacity.dead_vm_num": "0",
      "_created_timestamp_usecs_": "1581308670535922",
      "ncc_version": "ncc-3.9.3",
      "full_version": "el7.3-release-euphrates-5.10.9-stable-7a0c244378ccf45b78039c9de2099a61a01d02d3",
      "service_list": "AOS",
      "name": "auto_cluster_prod_1a08b3f1aa3c",
      "capacity.bully_vm_num": "0",
      "fully_qualified_domain_name": "",
      "external_ip_address": "",
      "redundancy_factor": "1",
      "hypervisor_types": "kKvm",
      "capacity.overprovisioned_vm_num": "0",
      "is_available": "true",
      "entity_id": "00059df9-562d-2fd1-0000-0000000090c8",
      "version": "5.10.9",
      "timezone": "America/Los_Angeles",
      "id": "00059df9-562d-2fd1-0000-0000000090c8",
      "cluster_arch": "X86_64",
      "capacity.constrained_vm_num": "0"
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
    case 'SET_CLUSTER_DETAILS':
      modifiedState = modifiedState
          .setIn(['clusterDetails'], action.response)
        break;
    default: break;
  }

  return modifiedState.toJSON();
}