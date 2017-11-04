import * as React from 'react';

import MainItemBase from './MainItemBase';

export default class MainTextItem extends React.Component {
  render() {
    const {title, value} = this.props;

    return (
      <MainItemBase>
        <div className="title">{title}</div>
        <div className="value">{value}</div>
      </MainItemBase>
    );
  }
}
