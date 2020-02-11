import axios from 'axios';

export function getProjectDetails () {
  return function (dispatch) {
    axios.get('src/mock_data/project_get_data.json')
    .then((response) => {
      dispatch ({
        type: 'GET_PROJECT_DATA_FULLFILLED',
        payload: response.data
      })
    })
    .catch( (err) => {
      console.log('error while fetching project_get_data');
    })
  }
}
