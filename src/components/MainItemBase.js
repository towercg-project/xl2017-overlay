import * as React from 'react';

export default class MainItemBase extends React.Component {
  render() {
    return (
      <div className="main-item">
        {this.props.children}
      </div>
    );
  }
}
