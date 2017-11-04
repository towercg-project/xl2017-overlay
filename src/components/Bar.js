import * as React from 'react';

import HighlightSection from './HighlightSection';
import LogoSection from './LogoSection';
import MainSection from './MainSection';

export default class Bar extends React.Component {
  render() {
    return (
      <div id="BAR">
        <LogoSection />
        <MainSection />
        <HighlightSection />
      </div>
    );
  }
}
