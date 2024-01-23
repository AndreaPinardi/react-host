import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";


const RemoteComponent = lazy(() =>
  import("remote/nextjs-remote-page").catch(() => {
    return { default: () => <>NextJs remote unavailable!</> };
  })
);

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={null}>
      <RemoteComponent />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
