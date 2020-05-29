import ReactOnRails from 'react-on-rails';
import 'bootstrap/dist/css/bootstrap.min.css';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
