import React from 'react';
import { connect } from 'react-redux';

export class MilestoneForm extends React.Component {

  handleSubmit() {

  };

  render() {
    return (
      <div className={/milestone-form/}>MILESTONE FORM
        <form>
          <input type="text" />
          <input type="file" />
          <input type="date" />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(MilestoneForm);
