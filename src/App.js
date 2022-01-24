
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import { AppRoutes } from './routing/AppRoutes'
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path={AppRoutes.HOME.path} element={AppRoutes.HOME.component} />
            <Route path={AppRoutes.LOGIN.path} element={AppRoutes.LOGIN.component} />
            <Route path={AppRoutes.REGISTER.path} element={AppRoutes.REGISTER.component} />
            <Route path={AppRoutes.MOVIES.path} element={AppRoutes.MOVIES.component} />
            <Route path={AppRoutes.TVSERIES.path} element={AppRoutes.TVSERIES.component} />
            <Route path={AppRoutes.MYLIST.path} element={AppRoutes.MYLIST.component} />
            <Route path={AppRoutes.PAYMENTS.path} element={AppRoutes.PAYMENTS.component} />
            <Route path={AppRoutes.PREFERENCES.path} element={AppRoutes.PREFERENCES.component} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
