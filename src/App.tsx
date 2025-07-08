import NavBar from "./Components/NavBar"
import Dashboard from "./Components/Dashboard";
import { AppContextProvider } from "./contexts/AppContextProvider";

function App() {

  return (
    <AppContextProvider>
      <div className="dark:bg-[#21364A]">
        <NavBar />
        <div className="mt-16">
          <Dashboard />
        </div>
      </div>
    </AppContextProvider>


  )
}

export default App
