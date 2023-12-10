import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/Main';


const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);


