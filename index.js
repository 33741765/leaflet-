import './style.css';
import {
  Map,
  Canvas,
  Marker,
  Icon,
  CircleMarker,
  Polyline,
  Polygon,
} from 'leaflet';

// Write Javascript code!
// 创建高德Map
const amap = new AMap.Map('amap', {
  fadeOnZoom: false,
  navigationMode: 'classic',
  optimizePanAnimation: false,
  animateEnable: false,
  dragEnable: false,
  zoomEnable: false,
  resizeEnable: true,
  doubleClickZoom: false,
  scrollWhell: false,
  expandZoomRange: true,
  zooms: [1, 20],
  // mapStyle: 'normal',
  mapStyle: 'amap://styles/5dbb80fcacf7d1ee546a41e4a889095e',
  features: ['road', 'point', 'bg'],
  viewMode: '2D',
});
// 创建leaflet Map
const map = new Map('map', {
  renderer: new Canvas(),
});

map.on('zoom', (evt) => {
  amap.setZoom(evt.target.getZoom());
});

map.on('move', (evt) => {
  const pt = evt.target.getCenter();
  amap.setZoomAndCenter(evt.target.getZoom(), [pt.lng, pt.lat]);
});

map.setView([39.909186, 116.397411], 10);

// 点 图标
new Marker([39.909186, 116.397411], {
  icon: new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconAnchor: [12, 41],
  }),
}).addTo(map);

// 点 圆点
new CircleMarker([39.909186, 116.457411]).addTo(map);

//线
new Polyline([
  [39.909186, 116.457411],
  [39.999186, 116.457411],
]).addTo(map);

// 面
new Polygon([
  [39.999186, 116.507411],
  [39.999186, 116.407411],
  [40.099186, 116.407411],
  [40.099186, 116.507411],
]).addTo(map);
