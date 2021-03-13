import Start from "./pages/Start/Start";
// import { useAuthTokenStore } from "./utils/auth";

function App() {
  // useAuthTokenStore();
  const pathName = window.location.pathname

  const displayPage = () => {
    console.log(pathName);
    switch (pathName) {
      case "/Start":
        return <Start />;

    }
  }
  return (
    <div className="App">
      <Start />
      {displayPage()}
     
    </div>
  );
}

export default App;
