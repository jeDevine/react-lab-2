import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialPosts from './components/SocialPosts';
// importing library which is required and importing my icon "faTrashAlt" use library.add to add the icons you imported.
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)
/////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="App">
      <SocialPosts />
    </div>
  );
}

export default App;
