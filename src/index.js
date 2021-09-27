import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import swConfig from './swConfig';
import { RecoilRoot } from 'recoil';
import Loader from 'react-loader-spinner';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={
        <Loader
          className="d-flex justify-content-center align-items-center vh-100"
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        />
      }>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
  serviceWorkerRegistration.register(swConfig)
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    const waitingServiceWorker = registration.waiting

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", event => {
        if (event.target.state === "activated") {
          window.location.reload()
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  }
});
