import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as projectActions from '../actions/projectActions';

import { Row, Col } from 'antd';
import Responsive from 'react-responsive';
import Sider from './Sider';
import OverallStatus from './OverallStatus';

const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;

class ProjectDetailsComponent extends React.Component {

  componentWillMount () {
    console.log(this.props);
    console.log(projectActions);
    this.props.getProjectDetails();
  }

  getProjectMembers () {
    return this.props.projMembers.map( (member, i) => <li key={i}>{member}</li>);
  }

  render () {
    const { projName, projDesc, projOwner, projSponser } = this.props;
    if (!projName) {
      return (<div/>)
    }
    return (
      <div>
        <div className="proj-data-row">
          <div className="proj-data-col-left">
            Name
          </div>
          <div className="proj-data-col-right">
            { projName }
          </div>
        </div>

        <div className="proj-data-row">
          <div className="proj-data-col-left">
            Description
          </div>
          <div className="proj-data-col-right">
            { projDesc }
          </div>
        </div>

        <div className="proj-data-row">
          <div className="proj-data-col-left">
            Owner
          </div>
          <div className="proj-data-col-right">
            { projOwner }
          </div>
        </div>
        <div className="proj-data-row">
          <div className="proj-data-col-left">
            Sponser
          </div>
          <div className="proj-data-col-right">
            { projSponser }
          </div>
        </div>
        <div className="proj-data-row">
          <div className="proj-data-col-left">
            Members
          </div>
          <div className="proj-data-col-right">
            <ul>
              { this.getProjectMembers() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const projData = state.projectDetails;
  return {
    projName: projData.name,
    projDesc: projData.description,
    projOwner: projData.owner,
    projSponser: projData.sponser,
    projMembers: projData.members,
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getProjectDetails: bindActionCreators(projectActions.getProjectDetails, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsComponent);
