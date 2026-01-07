import Home from "./components/Home";
import "./App.css";
import { CounterContextProvider } from "./context/counter.context";
import PrintCount from "./components/PrintCount";
function App() {
  return (
    <div>
      <CounterContextProvider>
        <PrintCount />
        <Home />
      </CounterContextProvider>
      {/* <CounterContextProvider></CounterContextProvider> */}
    </div>
  );
}

export default App;
