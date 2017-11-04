import * as React from 'react';

import Carousel from 'nuka-carousel';

import DonationAboutItem from './DonationAboutItem';

import { towercgConnect } from './TowerCGClientProvider';

export class HighlightSection extends React.Component {
  render() {
    const {extralife} = this.props;

    const ed = extralife.users.ed;
    const cic = extralife.teams.cic;
    const gb = extralife.teams['giant-bomb'];

    return (
      <div id="HIGHLIGHT_SECTION">
        <Carousel
            autoplay={true}
            autoplayInterval={20000}
            decorators={[]}
            wrapAround={true}
            vertical={true}
            initialSlideHeight={96}
            easing="easeInCubic"
            speed={1000}>
          <DonationAboutItem title={ed.displayName} value={ed.totalRaisedAmount} />
          <DonationAboutItem title="CIC Extra Life" value={cic.totalRaisedAmount} />
          <DonationAboutItem title="Giant Bomb + Community" value={gb.totalRaisedAmount} />
        </Carousel>
      </div>
    );
  }
}

const wrappedClass = towercgConnect(HighlightSection, (state, ownProps) => ({
  extralife: state.extralife
}));
export default wrappedClass;
