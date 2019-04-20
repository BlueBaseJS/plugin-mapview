import { MapView } from './components/MapView';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	components: {
		MapMarker: MapView.Marker,
		MapView,
	},
	description: 'Add maps to BlueBase projects!',
	key: 'plugin-mapview',
	name: 'plugin-mapview',
	version: '1.0.0',
});
