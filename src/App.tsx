import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "hooks/useEagerConnect";

const App: React.FC = () => {
  useEagerConnect();
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <div className="App">
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
