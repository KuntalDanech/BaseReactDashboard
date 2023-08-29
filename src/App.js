import "@assets/css/style.css";
import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Routes = React.lazy(() => import('./Routes'));
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>
          <Loader
            type="Circles"
            style={style}
            alignItems="center"
            color="#00A273"
            height={100}
            width={100}
          />
        </div>}>
          <Switch>
            <Route render={(props) => <Routes  {...props} />} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;