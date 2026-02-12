import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../src/routes/appRoutes.tsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;