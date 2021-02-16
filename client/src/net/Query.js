import Rest from './Rest';
import store from '../store';
import Actions from '../store/actions/ads';
import server from './server.json';

export async function execute() {
  const jsonArr = await Rest.GET(`${server.https.apiBaseUrl}/ads`);
  const { dispatch } = store;
  const data = jsonArr.map((o, id) => {
    return { ...o, id, millis: Date.parse(o.date) };
  });
  dispatch(Actions.refresh(data));
}
