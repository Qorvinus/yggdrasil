import React from 'react';
import { connect } from 'react-redux';

import Milestone from './Milestone';

export class Feed extends React.Component {

  render() {
    return (
      <div className={/feed/}>FEEEEEEEEEEEEEEEEEED
        <Milestone />
      </div>
    );
  };
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Milestone);
