import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Rotas from './Rotas';

function App() {
  return (
    <>
      <ToastContainer autoClose={3500} />
      <Rotas />
    </>
  );
}

export default App;
