'use strict';

import React from 'react'
import {connect} from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Dashboard is Rendering');
    return <div>
      <h3>Dashboard</h3>
    </div>
    console.log('Dashboard Rendered');
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Dashboard;