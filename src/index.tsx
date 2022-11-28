import ReactDOM from 'react-dom';
import 'src/mocks';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from 'src/hooks/useScrollTop';

import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import store from 'src/store';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import { TitleProvider } from 'src/contexts/TitleContext';
import * as serviceWorker from 'src/serviceWorker';
import { CompanySettingsProvider } from 'src/contexts/CompanySettingsContext';
import { AuthProvider } from 'src/contexts/JWTAuthContext';

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <TitleProvider>
          <BrowserRouter>
            <ScrollTop />
            <AuthProvider>
              <CompanySettingsProvider>
                <App />
              </CompanySettingsProvider>
            </AuthProvider>
          </BrowserRouter>
        </TitleProvider>
      </SidebarProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
