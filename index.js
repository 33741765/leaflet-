// Import stylesheets
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
  keyboardEnable: false,
  scrollWheel: false,
  expandZoomRange: true,
  zooms: [1, 20],
  mapStyle: 'normal',
  features: ['road', 'point', 'bg'],
  viewMode: '2D',
});
// 创建leaflet Map
const map = new Map('map');
