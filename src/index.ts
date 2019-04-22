import { MapView } from './components/MapView';
import { createPlugin, BootOptions, BlueBase } from '@bluebase/core';

declare var window: any;
declare var document: any;

export default createPlugin({
	description: 'Add maps to BlueBase projects!',
	key: 'plugin-mapview',
	name: 'plugin-mapview',
	version: '1.0.0',

	components: {
		MapMarker: MapView.Marker,
		MapView,
	},

	defaultConfigs: {
		'plugin.mapview.api-key': null
	},

	filters: {
		'bluebase.boot.end': (bo: BootOptions, _ctx: any, BB: BlueBase) => {

			if (!!window && !!document) {
				const apiKey = BB.Configs.getValue('plugin.mapview.api-key');
				BB.Configs.setValue('plugin.mapview.api-loaded', false);

				window.googleMapsOnLoad = () => {
					BB.Configs.setValue('plugin.mapview.api-loaded', true);
				};

				if(!apiKey) {
					BB.Logger.error('Google Maps API key is required in MapView plugin.');
				}

				// window.onload = () => {
				const s = document.createElement('script');
				s.type = 'text/javascript';
				s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&3.exp&callback=googleMapsOnLoad`;
				document.body.appendChild(s);
				// };
			}

			return bo;
		}
	}
});
