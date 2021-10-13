import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
// import { Button } from './components/Button'
import { AuthContextProvider } from './context/AuthContext';
import { AdminRoom } from "./pages/AdminRoom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
