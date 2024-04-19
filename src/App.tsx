// import React from 'react';
// import Comp4 from './components/Comp4';
// import Comp2 from './components/Comp2';
// import Fmik2 from './components/Fmik2'
// import Comp3 from './components/Comp3';
// import Page1 from './components/Page1';
import CustomTable from './components/CustomTable';
import MuiTable from './components/MuiTable';

import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Tabs, Tab, Box} from '@mui/material';
function App() {
  const [val, setVal] = useState("demo1");
  return (
    <div className="App">
      <Tabs value={val} onChange={(e, v) => setVal(v)}>
        <Tab value={"demo1"} label="demo1"></Tab>
        <Tab value={"demo2"} label="demo2"></Tab>
      </Tabs>
      {val === "demo1" && <CustomTable />}
      {val === "demo2" && <MuiTable />}
    </div>
  );
}

export default App;
