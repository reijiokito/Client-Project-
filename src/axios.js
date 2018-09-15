import Axios from 'axios';
import config from './config';

export default Axios.create({
  baseURL : config.rootPath,
  withCredentials : true

}); 