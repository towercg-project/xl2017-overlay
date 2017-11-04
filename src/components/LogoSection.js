import * as React from 'react';

import Carousel from 'nuka-carousel';

export default class LogoSection extends React.Component {
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
            <img src="/images/gb.png" style={{
              width: "110px",
              marginTop: "4px"
            }} />
          </div>
        </Carousel>
      </div>
    )
  }
}
