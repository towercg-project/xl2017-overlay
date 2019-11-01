import * as React from 'react';
import * as ReactInterval from 'react-interval';
import Carousel from 'nuka-carousel';

import DonationAboutItem from './DonationAboutItem';

import { towercgConnect } from './TowerCGClientProvider';

export class HighlightSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {extralife} = this.props;

    const ed = extralife.users.ed;
    const cic = extralife.teams.cic;
    const gwj = extralife.teams.gwj;

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
          <DonationAboutItem title={ed.displayName} value={ed.sumDonations} />
          <DonationAboutItem title="CIC Extra Life" value={cic.sumDonations} />
          <DonationAboutItem title="Gamers With Jobs" value={gwj.sumDonations} />
        </Carousel>
      </div>
    );
  }
}

const wrappedClass = towercgConnect(HighlightSection, (state, ownProps) => ({
  extralife: state.extralife
}));
export default wrappedClass;
