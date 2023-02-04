import React from 'react';
import ReactDOM from 'react-dom/client';

import { ProfileProvider } from './context';
import PortfolioApp from './PortfolioApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProfileProvider>
            <PortfolioApp />
        </ProfileProvider>
    </React.StrictMode>
);
