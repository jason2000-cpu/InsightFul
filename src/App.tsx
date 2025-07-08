import NavBar from "./Components/NavBar"
import Dashboard from "./Components/Dashboard";
import { AppContextProvider } from "./contexts/AppContextProvider";

function App() {

  return (
    <AppContextProvider>
      <div className="dark:bg-[#21364A] h-[100vh]">
        <NavBar />
        <div className="mt-10">
          <Dashboard />
        </div>
      </div>
    </AppContextProvider>


  )
}

export default App
