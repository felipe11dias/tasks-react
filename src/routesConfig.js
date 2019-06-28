
import App from './App';
import About from './pages/About';

const routesConfig = [
    {
        path:"/",
        component:App,
        exact:true
    },
    {
        path:"/about",
        component:About,
        exact:true
    },
]

export default routesConfig;