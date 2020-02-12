  /* Util functions */
  import {
    get as _get,
  } from 'lodash';
  
  // Flattens group results for entities
  export function extractGroupResults(gr) {
    let ret = [];
    if (gr.group_results && gr.group_results.length && gr.group_results[0].entity_results) {
      ret = gr.group_results[0].entity_results.map(e => {
        const eHash = {
          id: e.entity_id,
          entity_id: e.entity_id
        };
        if (_get(e, 'data')) {
          e.data.forEach(ed => {
            eHash[ed.name] = _get(ed, ['values', '0', 'values', '0']);
          });
        }
        return eHash;
      });
    }
    return ret;
  }