import NavBar from "./Components/NavBar"
import Dashboard from "./Components/Dashboard";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <div className="mt-16">
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
