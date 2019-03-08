// import '../typings/index.d.ts';

import { GMap, MapMarker } from './components/Map';

import { createPlugin } from '@bluebase/core';

export default createPlugin({

	key: 'map-plugin',
	name: 'MapPlugin',

	components: {
		GMap,
		MapMarker

	}
});
