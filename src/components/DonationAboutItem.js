import * as React from 'react';

import HighlightItemBase from './HighlightItemBase';

export default class DonationAboutItem extends React.Component {
  render() {
    const {title, value} = this.props;
    const formattedValue = parseFloat(value).toLocaleString('en-US', {
      minimumIntegerDigits: 1,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return (
      <HighlightItemBase>
        <div className="donation-title">{title}</div>
        <div className="donation-value">${formattedValue}</div>
      </HighlightItemBase>
    );
  }
}
