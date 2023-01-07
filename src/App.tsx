import { Toaster } from "react-hot-toast";
import { Router } from "@/Router";

function App() {
  return (
    <div className="App">
      <>
        <Router />
        <Toaster />
      </>
    </div>
  );
}

export default App;
