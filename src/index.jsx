import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GithubSummary extends PureComponent {
  render() {
    return (
      <div/>
    )
  }
}

GithubSummary.propTypes = {
  username: PropTypes.string.isRequired
};

export default GithubSummary;
