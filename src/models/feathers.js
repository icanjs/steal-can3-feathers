import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import io from 'socket.io-client';
// import rest from 'feathers-rest/client';
// import jQuery from 'jquery';
// import auth from 'feathers-authentication/client';
// import decode from 'jwt-decode';
import rxjs from 'rxjs';
import rx from 'feathers-reactive';

const host = 'http://localhost:3030';
const socket = io(host, {
  transports: ['websocket'],
  forceReconnect: true
});
const app = feathers()
  .configure(rx(rxjs, {
    idField: '_id'
  }))
  .configure(hooks())
  .configure(socketio(socket));
  // .configure(rest(host).jquery(jQuery));
  // .configure(auth({
  //   storage: window.localStorage
  // }));

// app.getSession = function(){
//   let token = app.get('token'),
//     session;
//
//   if (token) {
//     session = decode(token);
//   }
//   return session;
// };

export default app;
