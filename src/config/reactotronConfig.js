import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const trom = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  console.tron = trom;

  trom.clear();
}
