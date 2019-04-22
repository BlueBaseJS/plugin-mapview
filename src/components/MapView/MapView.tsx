import { BlueBase, BlueBaseContext } from '@bluebase/core';
import MV from 'react-native-web-maps';
import React from 'react';
import { StatefulComponent } from '@bluebase/components';


interface MapViewState {
	loaded: boolean;
}

export class MapView extends React.PureComponent<any, MapViewState> {

	static contextType = BlueBaseContext;
	static Marker = MV.Marker;

	readonly state = {
		loaded: false,
	};

	private subscriptionId?: string;

	componentWillMount() {
		const BB: BlueBase = this.context;

		const loaded = BB.Configs.getValue('plugin.mapview.api-loaded');

		this.setState({ loaded });

		if(loaded !== true) {
			this.subscriptionId = BB.Configs.subscribe('plugin.mapview.api-loaded', (_loaded) => {
				if (_loaded === true) {
					this.setState({ loaded: true });
					BB.Configs.unsubscribe('plugin.mapview.api-loaded', this.subscriptionId as string);
					this.subscriptionId = undefined;
				}
			});
		}
	}

	componentWillUnmount() {
		const BB: BlueBase = this.context;

		if(this.subscriptionId) {
			BB.Configs.unsubscribe('plugin.mapview.api-loaded', this.subscriptionId);
			this.subscriptionId = undefined;
		}
	}

	render() {

		return (
			<StatefulComponent loading={!this.state.loaded} isEmpty={() => false}>
				<MV {...this.props} />
			</StatefulComponent>
		);
	}
}