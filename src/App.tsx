import { Provider } from "react-redux";
import "./App.css";
import Router from "./config/router";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Router />
        </div>
      </Provider>
    </>
  );
}

export default App;
