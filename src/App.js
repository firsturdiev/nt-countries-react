import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import Country from "./screens/Country/Country";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="site-content flex-grow-1 py-4 container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/countries/:url">
            <Country />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;