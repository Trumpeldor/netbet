import Rest from './Rest';
import store from '../store';
import Actions from '../store/actions/ads';
import server from './server.json';

const getUrl = () => {
  return `${server.https.apiBaseUrl}/ads`;
}

export async function execute(request) {
  const jsonArr = await Rest.GET(getUrl(request));
  const { dispatch } = store;
  const data = jsonArr.map(o => [
  ]);
  dispatch(Actions.refresh(data));
}
