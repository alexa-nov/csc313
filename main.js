import {Feature, Map, Overlay, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {ScaleLine, defaults as defaultControls} from 'ol/control.js';
import {useGeographic} from 'ol/proj.js';

//useGeographic();

const place = [-122.321777,37.569685];
const place2 = [-121.492310, 38.574927];
const place3 = [-121.652985, 37.131595];

const point1 = new Point(place);
const point2  = new Point(place2);
const point3  = new Point(place3);

const colors = ['red', 'blue', 'green'];
const points = [point1, point2, point3];


const map = new Map({
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: place,
    zoom: 2,
  }),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point1)],
      }),
      style: {
        'circle-radius': 9,
        'circle-fill-color': 'red',
      },
    }),
    new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point2)],
      }),
      style: {
        'circle-radius': 9,
        'circle-fill-color': 'blue',
      },
    }),
    new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point3)],
      }),
      style: {
        'circle-radius': 9,
        'circle-fill-color': 'green',
      },
    }),
  ],
});
