import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Map from './routes/Map.tsx';
import Navegation from './routes/Navegation.tsx';
import EventList from './routes/EventList.tsx';
import EventRegister from './routes/EventRegister.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import App from './App.tsx';


const router = createBrowserRouter([
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
        path: 'eventregister',
        element: <EventRegister />,
      },
      {
        path: 'eventlist',
        element: <EventList />,
      }
    ]
  } 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
)
