import { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css'
import { APIOptions, AppendToType, PrimeReactProvider } from 'primereact/api';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { appRoutes } from './routes/Root.tsx';
import './index.css'

// const root = document.createElement('div');
// root.attachShadow({ mode: 'open' }); // Open the shadowRoot
// const mountHere: AppendToType = root.shadowRoot;
// const options: Partial<APIOptions> = { appendTo: mountHere, styleContainer: mountHere};

const router = createBrowserRouter(appRoutes);

function App() {
  return (
    <>
      {/* <PrimeReactProvider value={options}> */}
        <RouterProvider router={router} />
      {/* </PrimeReactProvider> */}
    </>
  )
}

export default App
