
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-2xl">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
