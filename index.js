import './style.css';
import { Map } from 'leaflet';

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
const map = new Map('map');
map.on('zoom', (evt) => {
  amap.setZoom(evt.target.getZoom());
});

map.on('move', (evt) => {
  const pt = evt.target.getCenter();
  amap.setZoomAndCenter(evt.target.getZoom(), [pt.lng, pt.lat]);
});

map.setView([39.909186, 116.397411], 10);
