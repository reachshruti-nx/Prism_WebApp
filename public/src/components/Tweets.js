import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import classNames from 'classnames';

import * as userActions from '../actions/userActions';

import * as tweetsActions from '../actions/tweetsActions'

@connect( (store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  };
})


export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(userActions.fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(tweetsActions.fetchTweets());
  }

  render() {
    const styleHead = {
      backgroundColor: 'rgb(66, 66, 68)',
      padding:'10px',
      textAlign: 'center'
    }

    const styleUser = {
      padding:'10px'
    }

    const styleTweets = {
      color: 'blue',
      padding:'10px',
      backgroundColor: '#efefef'
    }

    const {user, tweets} = this.props;
    console.log(this.props);
    if(!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }
    const mappedTweets = tweets.map( (tweet) => <li key={tweet.id}>{tweet.text}</li> );
    return (
      <div>
        <img src="/images/thunderstorm.png" />
        <div style={styleHead}>
          <h4>Redux In Action</h4>
        </div>
        <div style={styleUser}>
         <h5>Hello! {user.name}</h5>
         <h6>Here are your tweets....</h6>
        </div>
        <ul style={styleTweets}>
          {mappedTweets}
        </ul>
        <Link to='/'>Visit First Page</Link>
        <Link to='/two'>Visit Two</Link>
        <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
      </div>
    );
  }
}