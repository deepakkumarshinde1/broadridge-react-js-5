import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  //reducer

  return (
    <div>
      App
      <p>
        <Text counterName="counter0" />
        <Button type="COUNT_ZERO" />
      </p>
      <p>
        <Text counterName="counter1" />
        <Button type="COUNT_ONE" />
      </p>
      <p>
        <Text counterName="counter2" />
        <Button type="COUNT_TWO" />
      </p>
      <p>
        <Text counterName="counter3" />
        <Button type="COUNT_THREE" />
      </p>
    </div>
  );
}

export default App;
