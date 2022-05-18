import axios from 'axios';

const getData = () => axios.create({
  baseURL: 'https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  headers: { 'Content-type': 'application/json' },
}).get();

export default getData;
