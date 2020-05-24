import React from 'react';
import {$AppStore, AppStoreContext} from '../store/AppStore';

export const useStore = (): $AppStore => 
    React.useContext(AppStoreContext);