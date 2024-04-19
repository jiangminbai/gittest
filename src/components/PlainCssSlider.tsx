import * as React from 'react';
import {Slider, StyledEngineProvider} from '@mui/material';
import './PlainCssSlider.css';

export default function PlainCssSlider() {
  return (
    <div style={{width: 150}}>
      <StyledEngineProvider injectFirst>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="slider" />
      </StyledEngineProvider>
    </div>
  );
}