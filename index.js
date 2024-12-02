import { registerRootComponent } from 'expo';
import Navigation from './Navigation.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => Home);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Navigation);
