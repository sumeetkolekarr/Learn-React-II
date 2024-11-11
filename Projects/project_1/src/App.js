
import About from "./Components/About";
import Interest from "./Components/Interest";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="center">
      <div className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
