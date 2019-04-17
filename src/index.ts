import { MapView } from './components/MapView';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	components: {
		MapMarker: MapView.Marker,
		MapView,
	},
	description: '',
	key: 'plugin-mapView',
	name: 'plugin-mapView',
	version: '1.0.0',
});
