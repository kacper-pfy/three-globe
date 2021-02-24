import { Object3D, Vector2 } from 'three';

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;

interface ConfigOptions {
  waitForGlobeReady?: boolean;
  animateIn?: boolean;
}

declare class ThreeGlobeGeneric<ChainableInstance> extends Object3D {
  constructor(configOptions?: ConfigOptions);

  // Globe layer
  globeImageUrl(): string | null;
  globeImageUrl(url: string): ChainableInstance;
  showGlobe(): boolean;
  showGlobe(show: boolean): ChainableInstance;
  showAtmosphere(): boolean;
  showAtmosphere(show: boolean): ChainableInstance;

  // Points layer
  pointsData(): object[];
  pointsData(data: object[]): ChainableInstance;
  pointLat(): ObjAccessor<number>;
  pointLat(latitudeAccessor: ObjAccessor<number>): ChainableInstance;
  pointLng(): ObjAccessor<number>;
  pointLng(longitudeAccessor: ObjAccessor<number>): ChainableInstance;
  pointColor(): ObjAccessor<string>;
  pointColor(colorAccessor: ObjAccessor<string>): ChainableInstance;
  pointAltitude(): ObjAccessor<number>;
  pointAltitude(altitudeAccessor: ObjAccessor<number>): ChainableInstance;
  pointRadius(): ObjAccessor<number>;
  pointRadius(radiusAccessor: ObjAccessor<number>): ChainableInstance;
  pointResolution(): number;
  pointResolution(resolution: number): ChainableInstance;
  pointsMerge(): boolean;
  pointsMerge(merge: boolean): ChainableInstance;
  pointsTransitionDuration(): number;
  pointsTransitionDuration(durationMs: number): ChainableInstance;

  // Arcs layer
  arcsData(): object[];
  arcsData(data: object[]): ChainableInstance;
  arcStartLat(): ObjAccessor<number>;
  arcStartLat(latitudeAccessor: ObjAccessor<number>): ChainableInstance;
  arcEndLat(): ObjAccessor<number>;
  arcEndLat(latitudeAccessor: ObjAccessor<number>): ChainableInstance;
  arcStartLng(): ObjAccessor<number>;
  arcStartLng(longitudeAccessor: ObjAccessor<number>): ChainableInstance;
  arcEndLng(): ObjAccessor<number>;
  arcEndLng(longitudeAccessor: ObjAccessor<number>): ChainableInstance;
  arcColor(): ObjAccessor<string | string[]>;
  arcColor(colorsAccessor: ObjAccessor<string | string[]>): ChainableInstance;
  arcAltitude(): ObjAccessor<number | null>;
  arcAltitude(altitudeAccessor: ObjAccessor<number| null>): ChainableInstance;
  arcAltitudeAutoScale(): ObjAccessor<number>;
  arcAltitudeAutoScale(scaleAccessor: ObjAccessor<number>): ChainableInstance;
  arcStroke(): ObjAccessor<number | null>;
  arcStroke(strokeWidthAccessor: ObjAccessor<number | null>): ChainableInstance;
  arcCurveResolution(): number;
  arcCurveResolution(resolution: number): ChainableInstance;
  arcCircularResolution(): number;
  arcCircularResolution(resolution: number): ChainableInstance;
  arcDashLength(): ObjAccessor<number>;
  arcDashLength(dashLengthAccessor: ObjAccessor<number>): ChainableInstance;
  arcDashGap(): ObjAccessor<number>;
  arcDashGap(dashGapAccessor: ObjAccessor<number>): ChainableInstance;
  arcDashInitialGap(): ObjAccessor<number>;
  arcDashInitialGap(dashGapAccessor: ObjAccessor<number>): ChainableInstance;
  arcDashAnimateTime(): ObjAccessor<number>;
  arcDashAnimateTime(durationMsAccessor: ObjAccessor<number>): ChainableInstance;
  arcsTransitionDuration(): number;
  arcsTransitionDuration(durationMs: number): ChainableInstance;

  // Utility
  getCoords(lat: number, lng: number, altitude?: number): { x: number, y: number, z: number };
  toGeoCoords(coords: { x: number, y: number, z: number }): { lat: number, lng: number, altitude: number };

  // Render options
  rendererSize(): Vector2;
  rendererSize(size: Vector2): ChainableInstance;
}

declare class ThreeGlobe extends ThreeGlobeGeneric<ThreeGlobe> {}

export default ThreeGlobe;
export { ConfigOptions, ThreeGlobeGeneric };
