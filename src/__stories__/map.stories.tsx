

import { getComponent } from '@bluebase/core';
import React from 'react';

import storiesOf from '@blueeast/bluerain-storybook-addon';

const MapView = getComponent('MapView');
const MapMarker = getComponent('MapMarker');

const region =
{
  latitude: 31.3892751,
  latitudeDelta: 0.015,
  longitude: 74.1502481,
  longitudeDelta: 0.0121
};
const okaraRegion = {
  latitude: 30.8138,
  longitude: 73.4534
}
const onDragEnd = (e: any) => {
  console.log('onDragEnd', e);
};
const onDragStart = (e: any) => {
  console.log('onDragStart', e);
};
const onRegionChange = (e: any) => {
  console.log('onRegionChange', e);
};
const onRegionChangeComplete = (onRegionChangeComplete: any) => {
  console.log('onRegionChangeComplete', onRegionChangeComplete);
};
const onDragChange = (onDragChange: any) => {
  console.log('onDragChange', onDragChange);
};

storiesOf('Map', module)
  .add('Map', () => (
    <MapView
      region={region}
      style={{ height: 400 }}
      onRegionChange={onRegionChange}
      onRegionChangeComplete={onRegionChangeComplete}
    >
      <MapMarker
        onDragEnd={onDragEnd}
        onDragChange={onDragChange}
        onDragStart={onDragStart}
        draggable={true}
        coordinate={{ latitude: 31.3892751, longitude: 74.1502481 }}
      />
    </MapView>
  )
  ).add('Map without Marker', () =>
    <MapView
      region={region}
      style={{ height: 400 }}
      onRegionChange={onRegionChange}
      onRegionChangeComplete={onRegionChangeComplete}
    >
      {/* <MapMarker
        onDragEnd={onDragEnd}
        onDragChange={onDragChange}
        onDragStart={onDragStart}
        draggable={true}
        coordinate={{ latitude: 31.3892751, longitude: 74.1502481 }}
      /> */}
    </MapView>
  ).add('Map on Okara Region', () =>
    <MapView
      region={okaraRegion}
      style={{ height: 400 }}
      onRegionChange={onRegionChange}
      onRegionChangeComplete={onRegionChangeComplete}
    >
      <MapMarker
        onDragEnd={onDragEnd}
        onDragChange={onDragChange}
        onDragStart={onDragStart}
        draggable={true}
        coordinate={{ latitude: okaraRegion.latitude, longitude: okaraRegion.longitude }}
      />
    </MapView>
  );
