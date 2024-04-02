import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Navegation from '../pages/Navegation';
import Map from '../pages/Map';
import EventList from '../pages/EventList'; 
import EventRegister from '../pages/EventRegister';
import App from '../App';


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
            path: 'navegation',
            element: <Navegation />,
            },
            {
            path: 'map',
            element: <Map />,
            },
            {
            path: 'eventlist',
            element: <EventList />,
            },
            {
            path: 'eventregister',
            element: <EventRegister />,
            }
        ]
    } 
]);
