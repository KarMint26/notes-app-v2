import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNotes from './pages/AddNotes';
import DetailNotes from './pages/DetailNotes';
import Archieves from './pages/Archieves';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import Register from './pages/Register';
import { getUserLogged, putAccessToken } from './utils/network-data';
import NavigationNotAuthed from './components/NavigationNotAuthed';
import Navigation from './components/Navigation';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  React.useEffect(() => {
    const initialData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    initialData();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <React.Fragment>
        <NavigationNotAuthed />
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Navigation username={authedUser.name} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/new" element={<AddNotes />} />
        <Route path="/notes/:id" element={<DetailNotes />} />
        <Route path="/notes/archieves" element={<Archieves />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
