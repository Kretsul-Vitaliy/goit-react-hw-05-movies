import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter basename="/goit-react-hw-05-movies/">
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/goit-react-hw-05-movies/">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
