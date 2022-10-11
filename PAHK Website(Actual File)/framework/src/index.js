import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import header from './components/header';
import navibar from './components/navibar';
import footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <app />
    <header />
    <navibar />
    <footer />
  </React.StrictMode>
);
