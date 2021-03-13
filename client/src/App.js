import Start from "./pages/Start/Start";
// import { useAuthTokenStore } from "./utils/auth";

function App() {
  // useAuthTokenStore();
  const pathName = window.location.pathname

  const displayPage = () => {
    console.log(pathName);
    switch (pathName) {
      case "/React-Portfolio":
        return <About />;
      case "/React-Portfolio/Work":
        return <Work />;
      case "/React-Portfolio/ContactMe":
        return <ContactMe />;
      case "/React-Portfolio/Resume":
        return <Resume />;
      default:
        return <About />; 
    }
  }
  return (
    <div className="App">
      <Start />
     
    </div>
  );
}

export default App;
