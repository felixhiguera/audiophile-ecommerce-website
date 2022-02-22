import { UserContext } from './context/UserContext'
import AppRouter from './routes/AppRouter'
import './Sass/App.scss'
function App() {
  return (
    <UserContext.Provider value={{

    }}>
      <AppRouter />

    </UserContext.Provider>

  );
}

export default App;
