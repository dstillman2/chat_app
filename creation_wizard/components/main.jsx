import React from 'react';
import { connect } from 'react-redux';

function MainRegion(props) {
  return (
    <div
      id="main"
      key="main"
    >
      <div className="region">
        Region
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  sidebarWidth: state.sidebar.width,

  main: state.main,
});

export default connect(mapStateToProps)(MainRegion);
