import React from 'react';
import Esmoai from './Esmoai';
import Findevents from './Findevents';
import Community from './Community';
import Skills from './Skills';

function Index() {
    return (
      <div>
        <Skills />
        <Community />
        <Esmoai />
        <Findevents />
      </div>
    );
  }
  
  export default Index;