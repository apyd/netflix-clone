import HomeScreen from "../pages/HomeScreen/HomeScreen"
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Movies from '../pages/Movies/Movies'
import TVSeries from '../pages/TVSeries/TVSeries'
import MyList from '../pages/MyList/MyList'
import Payments from '../pages/Payments/Payments'
import Preferences from '../pages/Preferences/Preferences'


export const AppRoutes = {
    HOME: {
        path: '/',
        component: <HomeScreen />
    },
    LOGIN: {
        path: '/login',
        component: <Login />
    },
    REGISTER: {
        path: '/register',
        component: <Register />
    },
    MOVIES: {
        path: '/movies',
        component: <Movies />
    },
    TVSERIES: {
        path: '/tvseries',
        component: <TVSeries />
    },
    MYLIST: {
        path: '/my-list',
        component: <MyList />
    },
    PAYMENTS: {
        path: '/payments',
        component: <Payments />
    },
    PREFERENCES: {
        path: '/preferences',
        component: <Preferences />
    },
}