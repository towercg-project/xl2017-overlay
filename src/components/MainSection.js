import * as React from 'react';
import Carousel from 'nuka-carousel';

import MainTextItem from './MainTextItem';

import { towercgConnect } from './TowerCGClientProvider';

export class MainSection extends React.Component {
  render() {
    const {extralife} = this.props;

    const ed = extralife.users.ed;
    const donation = ed.donations.recentDonations[0];

    console.log(extralife)

    const mostRecentDonor = [
      donation.donorName || "Anonymous",
      "$" + parseFloat(donation.donationAmount).toLocaleString('en-US', {
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    ].join(" - ");

    return (
      <div id="MAIN_SECTION">
        <Carousel
            autoplay={true}
            autoplayInterval={5000}
            decorators={[]}
            wrapAround={true}
            vertical={true}
            initialSlideHeight={96}
            easing="easeInCubic"
            speed={1000}>
          <MainTextItem title="Donate now and help the kids!"
                        value="https://bit.ly/xldonate" />
          <MainTextItem title="Most recent donor"
                        value={mostRecentDonor} />
        </Carousel>
      </div>
    )
  }
}

const wrappedClass = towercgConnect(MainSection, (state, ownProps) => ({
  extralife: state.extralife
}));
export default wrappedClass;
