import * as React from 'react';

export default class HighlightItemBase extends React.Component {
  render() {
    return (
      <div className="highlight-item">
        {this.props.children}
      </div>
    );
  }
}
