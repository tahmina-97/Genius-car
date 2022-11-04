import { RouterProvider, ScrollRestoration } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';

function App() {
  return (
    <div className='bg-neutral-200'>
      <RouterProvider router={router}></RouterProvider>
      {/* <ScrollRestoration></ScrollRestoration> */}
    </div>
  );
}

export default App;
