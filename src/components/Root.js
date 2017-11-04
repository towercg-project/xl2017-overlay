import * as React from 'react';

import { Client as TowerCGClient } from '@towercg/client';

import * as Toolbox from './toolbox';
import TowerCGClientProvider from './TowerCGClientProvider';

import Bar from './Bar';

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const {apiUrl} = this.props;

    const fixedApiUrl = apiUrl.replace("<this_host>", window.location.hostname);

    console.log("connecting to API: ", fixedApiUrl);
    const client = new TowerCGClient(fixedApiUrl, {
      logPackets: false
    });
    this.setState({ client });

    client.eventBus.on('towercg-client.connected', () => {
      this.setState({ connected: true });
    });
    client.eventBus.on('towercg-client.reconnected', () => {
      this.setState({ connected: true });
    });
    client.eventBus.on('towercg-client.disconnected', () => {
      this.setState({ connected: false });
    });

    client.connect();
  }

  render() {
    return (
      <TowerCGClientProvider towercg={this.state.client}>
        <div id="OVERLAY_ROOT">
          <Bar />
        </div>
      </TowerCGClientProvider>
    );
  }
}
