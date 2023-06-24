import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HeaderNav } from './layout/header/HeaderNav'
import { FirstApp } from './routes/FirstApp'

import { Profiles } from './routes/Profiles';
import { Event } from './routes/Event';
import { ToolbarRoute } from './routes/ToolbarRoute';

import { SignupRoute } from './routes/SignupRoute';
import { UsestateRoute } from './routes/UsestateRoute';
import { DadosRoute } from './routes/DadosRoute';

import { GalleryRoute } from './routes/GalleryRoute';
import { ApiexRoute } from './routes/ApiexRoute';
import { FetchRoute } from './routes/FetchRoute';




const routes = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNav />
  },
  {
    path: "/firstApp",
    element: <FirstApp tittle="PropTypes Guias" subtittle={32} />
  },
  {
    path: "/profiles",
    element: <Profiles />
  },
  {
    path: "/event",
    element: <Event />
  },
  {
    path: "/toolbar",
    element: <ToolbarRoute />
  },
  {
    path: "/signup",
    element: <SignupRoute />
  },
  {
    path: "/usestate",
    element: <UsestateRoute />
  },
  {
    path: "/dadosgame",
    element: <DadosRoute />
  },
  {
    path: "/gallery",
    element: <GalleryRoute />
  },
  {
    path: "/apiex",
    element: <ApiexRoute />
  },
  {
    path: "/fetch",
    element: <FetchRoute />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
