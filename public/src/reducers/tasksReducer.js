// Libraries
import Immutable from 'immutable';

const initialState = {
  tasks: [
    {
      "id": "e9a71b3c-adbe-4848-a968-6b8cead89009",
      "entity_id": "e9a71b3c-adbe-4848-a968-6b8cead89009",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581534522571257",
      "entity_list": "kRecoveryPoint:eaJYz9ftSFynyXZmVCcSIg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "45e03694-87bd-4002-bc30-967ff81cea68",
      "entity_id": "45e03694-87bd-4002-bc30-967ff81cea68",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581534522564232",
      "entity_list": "kRecoveryPoint:ASb750l6RPaJsrDy2TMPPQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "e0137fb6-a6e7-4672-9c77-62e9058eab85",
      "entity_id": "e0137fb6-a6e7-4672-9c77-62e9058eab85",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581534522556472",
      "entity_list": "kRecoveryPoint:PUEjM/TrQvizGxla1TlTKg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "177b4b9e-f518-46e7-a7ab-61607a5752bd",
      "entity_id": "177b4b9e-f518-46e7-a7ab-61607a5752bd",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581534522549174",
      "entity_list": "kRecoveryPoint:kyA2QUxzQWyPJW6KmZIXJA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "f1b55f0e-29a9-4e1c-bb4a-dd1fd9306461",
      "entity_id": "f1b55f0e-29a9-4e1c-bb4a-dd1fd9306461",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581534521685663",
      "entity_list": "kVM:FtHP7Ju+RX+cZUmK5eaeZg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "9adda9b0-73c9-4a43-8b85-cec253f3bb7e",
      "entity_id": "9adda9b0-73c9-4a43-8b85-cec253f3bb7e",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581534521669272",
      "entity_list": "kVM:622j/RFmQ0awYjMiTDjyPA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "beb89ce5-584f-4338-b29e-950f546e7267",
      "entity_id": "beb89ce5-584f-4338-b29e-950f546e7267",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581534521652239",
      "entity_list": "kVM:HYl9SkBFT8mdBTmGoqk2FA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "97892010-850c-44bb-b55c-ae906cbc0947",
      "entity_id": "97892010-850c-44bb-b55c-ae906cbc0947",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581534521637765",
      "entity_list": "kVM:Kzn2S9mvRaKqGwnepc6KlQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "9bdbff9a-fb71-414b-b7fb-e1bd3fb7130a",
      "entity_id": "9bdbff9a-fb71-414b-b7fb-e1bd3fb7130a",
      "_created_timestamp_usecs_": "1581534133119746",
      "entity_list": "kAlert:wLA3wxUfRNOFJ6t3Phjy7g==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "37746242-8cbb-4b26-b594-6d6490edf2f4",
      "entity_id": "37746242-8cbb-4b26-b594-6d6490edf2f4",
      "_created_timestamp_usecs_": "1581534133102201",
      "entity_list": "kAlert:wLA3wxUfRNOFJ6t3Phjy7g==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "8c8f1819-77fe-46fc-9dd0-172f705ea528",
      "entity_id": "8c8f1819-77fe-46fc-9dd0-172f705ea528",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581533792016468",
      "entity_list": "kRecoveryPoint:rlkXhwMDScG/pG1FNThDYw==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "db4e678b-4c56-475c-9b46-c7ba64c5dfe4",
      "entity_id": "db4e678b-4c56-475c-9b46-c7ba64c5dfe4",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581533792002617",
      "entity_list": "kRecoveryPoint:BT6CwlAdSzeJGJfT2zrT6w==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "d9863f8e-6ea6-4867-bdc8-902b371ef435",
      "entity_id": "d9863f8e-6ea6-4867-bdc8-902b371ef435",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581533791990572",
      "entity_list": "kRecoveryPoint:2UvTCexDQJ+cife9EJGWQA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "e05eae25-6103-4595-a03a-e7d00417d42d",
      "entity_id": "e05eae25-6103-4595-a03a-e7d00417d42d",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581533791061558",
      "entity_list": "kVM:cRoOx4BLQbSHSY/TP10ClQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "6da1b798-75c2-45d3-b3dd-105da0ff57dc",
      "entity_id": "6da1b798-75c2-45d3-b3dd-105da0ff57dc",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581533791048314",
      "entity_list": "kVM:hUzrz7/OR3ObCFBWh+7CVA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "3cfa4a03-8eb7-4f5d-a538-f0d42e657e5c",
      "entity_id": "3cfa4a03-8eb7-4f5d-a538-f0d42e657e5c",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581533791035679",
      "entity_list": "kVM:OE5Z1wiDRqCFfMsgFMh2ow==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "247366ae-70b0-4598-8970-4f4882953758",
      "entity_id": "247366ae-70b0-4598-8970-4f4882953758",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581533581832221",
      "entity_list": "kRecoveryPoint:ih23FlLmRe6E4gLnJrc3AA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "c96c167f-1a6c-4734-9035-99c39ed21564",
      "entity_id": "c96c167f-1a6c-4734-9035-99c39ed21564",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581533580867567",
      "entity_list": "kVM:uQPEMOz3Tyy8BiFx7NGcfg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "9aaf2f85-82a3-4fea-8118-04c8ad49b379",
      "entity_id": "9aaf2f85-82a3-4fea-8118-04c8ad49b379",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581533579813687",
      "entity_list": "kRecoveryPoint:M09ZclXoQrqBhf9/wUuXxw==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "7ad0dd97-5245-4e39-81d3-7bd457d83c43",
      "entity_id": "7ad0dd97-5245-4e39-81d3-7bd457d83c43",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581533578885730",
      "entity_list": "kVM:P5W4BhcwQsuuMBCxTOjkLA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "c3df6b64-f9fc-460a-8973-fc927748ddbf",
      "entity_id": "c3df6b64-f9fc-460a-8973-fc927748ddbf",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581530191355314",
      "entity_list": "kRecoveryPoint:NNwsetj/SMiKAesqzMnrVA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "55aabe82-8041-4019-8156-aa9bf2baf844",
      "entity_id": "55aabe82-8041-4019-8156-aa9bf2baf844",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581530191340286",
      "entity_list": "kRecoveryPoint:ElDtWL/UR0qv1/9Y2XCkDA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "9e4f3480-66e0-4ddc-9556-bc1d6cc3e917",
      "entity_id": "9e4f3480-66e0-4ddc-9556-bc1d6cc3e917",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581530191327148",
      "entity_list": "kRecoveryPoint:KW/Xe4+kRwC1HzCTAC+16g==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "dfaa2d7b-b900-4c97-a336-35747eb51681",
      "entity_id": "dfaa2d7b-b900-4c97-a336-35747eb51681",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581530190405482",
      "entity_list": "kVM:hUzrz7/OR3ObCFBWh+7CVA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "72d1b951-14a4-491b-8799-538302d86f3f",
      "entity_id": "72d1b951-14a4-491b-8799-538302d86f3f",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581530190387782",
      "entity_list": "kVM:cRoOx4BLQbSHSY/TP10ClQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "5cb9ce6d-89a4-4adb-ae60-19ab5f439400",
      "entity_id": "5cb9ce6d-89a4-4adb-ae60-19ab5f439400",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581530190371689",
      "entity_list": "kVM:OE5Z1wiDRqCFfMsgFMh2ow==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "4c51f73f-4791-4dbe-914d-3d7f8632b2fd",
      "entity_id": "4c51f73f-4791-4dbe-914d-3d7f8632b2fd",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581529981359167",
      "entity_list": "kRecoveryPoint:yrFjfEIeQMOAW0hudPAoxg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "e29c8ce7-ad30-45e2-8a27-169adb253584",
      "entity_id": "e29c8ce7-ad30-45e2-8a27-169adb253584",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581529980380795",
      "entity_list": "kVM:uQPEMOz3Tyy8BiFx7NGcfg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "4da39e8a-3f32-4d49-9205-ad0bff9a9388",
      "entity_id": "4da39e8a-3f32-4d49-9205-ad0bff9a9388",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581529979327650",
      "entity_list": "kRecoveryPoint:QNBZ02QBS+anQwqjhHJv4w==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "b388ace7-3812-41ba-a8c8-4cf4f3a16afc",
      "entity_id": "b388ace7-3812-41ba-a8c8-4cf4f3a16afc",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581529978415835",
      "entity_list": "kVM:P5W4BhcwQsuuMBCxTOjkLA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "b10831ce-70e4-4c5e-8fab-4d3219765c08",
      "entity_id": "b10831ce-70e4-4c5e-8fab-4d3219765c08",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581527322193937",
      "entity_list": "kRecoveryPoint:8NYlxejjR4+xh1OOJT23QQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "f20f7887-619a-4f49-adc5-c35c47eb9646",
      "entity_id": "f20f7887-619a-4f49-adc5-c35c47eb9646",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581527322185982",
      "entity_list": "kRecoveryPoint:wxT44DbzQrKAs6A8KYQAvQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "d30c343d-fda8-439b-9dd9-f2fa75acd373",
      "entity_id": "d30c343d-fda8-439b-9dd9-f2fa75acd373",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581527322177518",
      "entity_list": "kRecoveryPoint:I811BmbhRue8Uds5fyAvIg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "1acef2a2-2ede-4cd1-a4e3-c7bcce85dea0",
      "entity_id": "1acef2a2-2ede-4cd1-a4e3-c7bcce85dea0",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581527322158432",
      "entity_list": "kRecoveryPoint:CfO/ljKdRz2kMlY9cmwSgg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "9d8f3640-15c5-43f0-a323-b2be5e899d47",
      "entity_id": "9d8f3640-15c5-43f0-a323-b2be5e899d47",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581527321299969",
      "entity_list": "kVM:622j/RFmQ0awYjMiTDjyPA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "f1464efc-edb3-463b-8c5f-d2d9818c2467",
      "entity_id": "f1464efc-edb3-463b-8c5f-d2d9818c2467",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581527321279167",
      "entity_list": "kVM:Kzn2S9mvRaKqGwnepc6KlQ==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "57423975-b01f-4966-998a-42e443ccc046",
      "entity_id": "57423975-b01f-4966-998a-42e443ccc046",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581527321270966",
      "entity_list": "kVM:FtHP7Ju+RX+cZUmK5eaeZg==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "b28c6ad6-2402-431f-9fc1-c7f6f661ea8b",
      "entity_id": "b28c6ad6-2402-431f-9fc1-c7f6f661ea8b",
      "display_name": "Replicate Snapshot",
      "_created_timestamp_usecs_": "1581527321259107",
      "entity_list": "kVM:HYl9SkBFT8mdBTmGoqk2FA==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "a0f6f5aa-698f-46bd-928c-6aad454d8bba",
      "entity_id": "a0f6f5aa-698f-46bd-928c-6aad454d8bba",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581526591449223",
      "entity_list": "kRecoveryPoint:etagZBm9SeGJq3eij3Co7g==",
      "status": "kSucceeded",
      "percentage_complete": "100"
    },
    {
      "id": "029d1683-3e83-4ed0-9f53-9eaca9189233",
      "entity_id": "029d1683-3e83-4ed0-9f53-9eaca9189233",
      "display_name": "ReceiveSnapshot",
      "_created_timestamp_usecs_": "1581526591436317",
      "entity_list": "kRecoveryPoint:+eqqPtkQRuyWWCdSwyCU+w==",
      "status": "kSucceeded",
      "percentage_complete": "100"
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
    case 'SET_TASKS_DETAILS':
    modifiedState = modifiedState
        .setIn(['tasks'], action.response)
      break;
    default: break;
  }

  return modifiedState.toJSON();
}