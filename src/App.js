import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';

function App() {
  return (
    <div className='bg-neutral-200'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
