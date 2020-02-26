import reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;

  tron.clear();
}
