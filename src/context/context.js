import React from 'react';
import {state} from '../store/state.js';

const context = React.createContext(state)

export default context;