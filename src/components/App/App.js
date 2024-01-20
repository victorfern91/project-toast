import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from "../Toast/Context";

function App() {
  return (
    <>
      <ToastPlayground />
      <Footer />
      <ToastProvider />
    </>
  );
}

export default App;
