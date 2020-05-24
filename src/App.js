import React, {useEffect} from 'react';
import NavBar from './components/Appbar.tsx';
import {useStore} from './hooks';
import Users from './components/users';
import Posts from './components/posts';
import { observer } from 'mobx-react';

function App() {
  const AppStore = useStore();
  useEffect(() => {
    AppStore.getUsersData();
  });
  return (
    <div className="App">
      <NavBar />
      { !AppStore.postsDispFlag ?
        <Users /> :
        <Posts />
      }
    </div>
  );
}

export default observer(App);
