
import Home from './pages/Home';
import About from './pages/About';

const routesConfig = [
    {
        path:"/home",
        component: Home ,
        exact:true
    },
    {
        path:"/about",
        component: About ,
        exact:true
    },
]

export default routesConfig;