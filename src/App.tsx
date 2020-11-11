import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faExternalLinkAlt, faChevronCircleLeft, faLock, faCheck, faUserCog,
  faSignOutAlt, faUserPlus, faCog, faPlus, faMinus, faChevronDown, faChevronUp,
  faChevronLeft, faChevronRight, faTimes, faTrash, faQuestionCircle, faChartBar, faWallet, faPollH, faExclamation, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { default as Router } from './Router';

  // Setup fontawesome so we can access icons via string instead of explicitly importing each
library.add(faSpinner, faLock, faExternalLinkAlt,faChevronCircleLeft, faCheck, faUserCog,
  faSignOutAlt, faUserPlus, faCog, faPlus, faMinus, faChevronDown, faChevronUp, faChevronLeft,
  faChevronRight, faTimes, faTrash, faQuestionCircle, faChartBar, faWallet, faPollH, faExclamation, faSave, faTrashAlt
  );

const App = ({ history }: any) => (
  <div>
    <Router history={history}/>
  </div>
)

export default App;
