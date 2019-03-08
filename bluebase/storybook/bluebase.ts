import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import DummyPlugin from './sample';
import deepmerge from 'deepmerge';
import MapPlugin from '../../src/index';

// TODO: Only for evaluation, remove this

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		// TODO: Only for evaluation, remove this
		DummyPlugin,
		MapPlugin
	],
	// config: {

	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/storybook/wallpaper.jpg'),
	// 	},
	// }
};

export default deepmerge(commonBootOptions, bootOptions);
