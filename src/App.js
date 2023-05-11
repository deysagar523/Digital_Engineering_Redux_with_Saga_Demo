import logo from "./logo.svg";
import "./App.css";
import UserComp from "./Components/UserComp";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserComp />
      </Provider>
    </div>
  );
}

export default App;
