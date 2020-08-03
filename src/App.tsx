import React from 'react';
import './App.css';
import Exchange from './components/Exchange';
import { Grid } from 'semantic-ui-react';

function App() {

  return (
    <div className="App">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Exchange />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
