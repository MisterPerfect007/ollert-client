import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

import './AddAnother.css';

function AddAnotherList({elementName}) {
  return <div className='addAnotherList'>
            <div>Add another {elementName}</div>
            <BsPlusLg />
        </div>;
}

export default AddAnotherList;
