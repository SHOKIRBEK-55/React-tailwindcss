import ReactDOM from 'react-dom/client';
import './main.css';
import App from './app';

const element = document.getElementById('root')!;

const root = ReactDOM.createRoot(element)
root.render(<App/>)