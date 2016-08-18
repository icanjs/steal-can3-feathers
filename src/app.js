import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import $ from 'jquery';
import appTemplate from './index.stache';
import reload from 'live-reload';

const AppViewModel = DefineMap.extend({
  route: "string",
  message: {
    value: 'Example steal-can-feathers app',
    serialize: false
  },
  title: {
    value: 'example-app',
    serialize: false
  }
});
const appState = new AppViewModel();

route.map(appState);

function render() {
	$('#app').html(appTemplate(appState));
}

// Enable hot module swap
reload(function(){
	render();
  appState.set(appState.get());
});

render();
