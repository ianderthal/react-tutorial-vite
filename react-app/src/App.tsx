import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Biggle
      </Button>
    </div>
  );
}

export default App;
