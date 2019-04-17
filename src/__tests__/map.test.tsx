// import React from 'react';
// import { getComponent } from '@bluebase/core';
import 'jest';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlueBase } from '@bluebase/core';
// import { MapView } from '../components/MapView';
// import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../src/index';
// import renderer from 'react-test-renderer';

// const MapView = getComponent('MapView');
// const MapMarker = getComponent('MapMarker');

configure({ adapter: new Adapter() });
// const region =
// {
//     latitude: 31.3892751,
//     latitudeDelta: 0.015,
//     longitude: 74.1502481,
//     longitudeDelta: 0.0121
// };

test('Plugin should be correctly registered', async () => {
    const BB = new BlueBase();
    await BB.Plugins.register(Plugin);

    expect(BB.Plugins.has('plugin-mapView')).toBeTruthy();
});
// test('Map Region', () => {

//     const wrapper = mount(
//         <BlueBaseApp plugins={[MapView]}>

//             <MapView
//                 region={region}
//                 style={{ height: 400 }}
//                 onRegionChange={() => { }}
//                 onRegionChangeComplete={() => { }}
//             >
//                 <MapMarker
//                     onDragEnd={() => { }}
//                     onDragChange={() => { }}
//                     onDragStart={() => { }}
//                     draggable={true}
//                     coordinate={{ latitude: 31.3892751, longitude: 74.1502481 }}
//                 />
//             </MapView>

//         </BlueBaseApp>
//     );

//     await waitForElement(wrapper, Avatar);

//     console.log(wrapper.find("MapView"));

//     expect(wrapper.props().region).toEqual({})
// });