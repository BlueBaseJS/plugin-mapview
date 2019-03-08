import * as React from 'react';
import MapView from '@blueeast/react-native-web-maps';


export interface Region {
	latitude: number
	longitude: number
	latitudeDelta: number
	longitudeDelta: number
}
export interface MarkerProperties {
	coordinate?: any,
	title?: string,
	description?: string,
	draggable?: boolean,
	onDragStart?: (value: { coordinate: any, position: any }) => void;
	onDrag?: (value: { coordinate: any, position: any }) => void;
	onDragEnd?: (value: { coordinate: any, position: any }) => void;
	[key: string]: any,
}
export interface MapProperties {

	style?: object,
	region?: { latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number; },
	initialRegion?: { latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number; },
	onRegionChange?: (region: Region) => void,
	onRegionChangeComplete?: (region: Region) => void,
	[key: string]: any,
}

const MapMarker: React.StatelessComponent<MarkerProperties> = (props) => {
	const { coordinate, onDragChange, onDragEnd, draggable, ...others } = props;
	return (

		<MapView.Marker
			{...others}
			draggable={draggable}
			onDragChange={onDragChange}
			onDragEnd={onDragEnd}
			coordinate={coordinate}
		/>
	);
};
MapMarker.defaultProps = {
	coordinate: { latitude: 0, longitude: 0 },
	title: '',
};

const GMap: React.StatelessComponent<MapProperties> = (props) => {
	const { region, style, initialRegion, onRegionChange, onRegionChangeComplete, ...others } = props;
	return (
		<MapView
			{...others}
			style={style}
			region={region}
			onRegionChangeComplete={onRegionChangeComplete}
			initialRegion={initialRegion}
			onRegionChange={onRegionChange}
		/>
	);
};
GMap.defaultProps = {
	region: { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 },
};
export { GMap, MapMarker };