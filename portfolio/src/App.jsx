import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
