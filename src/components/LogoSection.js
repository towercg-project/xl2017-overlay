import * as React from 'react';
import * as Interval from 'react-interval';

import Carousel from 'nuka-carousel';

const MAX_STANS = 1;

export default class LogoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { stan: 0 };
  }

  render() {
    return (
      <div id="LOGO_SECTION">
        <Carousel
            autoplay={true}
            autoplayInterval={20000}
            decorators={[]}
            wrapAround={true}
            vertical={true}
            initialSlideHeight={96}
            easing="easeInCubic"
            speed={1000}>
          <div className="logo-entry">
            <img src="/images/tc.jpg" style={{
              width: "88px",
              borderRadius: "50%"
            }} />
          </div>
          <div className="logo-entry">
            <img src="/images/cic.png" style={{
              width: "110px",
              marginTop: "8px"
            }} />
          </div>
          <div className="logo-entry">
            <img src={`/images/gwj-${this.state.stan}.png`} style={{
              width: "110px",
              marginTop: "4px"
            }} />
          </div>
        </Carousel>
      </div>
    )
  }
}
