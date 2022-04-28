import React from "react";
import ReactDOM from 'react-dom'

import { BoaTarde, BoaNoite} from './components/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde name='Carlos' />
        <BoaNoite name='Isadora' />
    </div>
, document.getElementById('root'))
