import { useAuthTokenStore } from "./utils/auth";

function App() {
  useAuthTokenStore();
  return (
    <div className="App">
      <h1>testText</h1>
    </div>
  );
}

export default App;
