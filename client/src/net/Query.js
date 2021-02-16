import Rest from './Rest';
import store from '../store';
import Actions from '../store/actions/lotteries';
import server from './server.json';

export async function execute() {
  const jsonArr = await Rest.GET(`${server.https.apiBaseUrl}/lottery`);
  const { dispatch } = store;
  const data = jsonArr.map((o, id) => {
    return { ...o, id, closing: Date.parse(o.closing) };
  });
  dispatch(Actions.refresh(data));
}
