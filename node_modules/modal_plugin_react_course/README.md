# modal_plugin
Documentation du Plugin de Modal React

Introduction 

Modal plugin React to display an easy customizable modal in your React application. 

Installation 

To install this modal you can use npm : 

npm install modal_plugin

Utilisation 

You need to create a state for the modal to know when it's open like this : 
`const [modalOpen, setModalOpen] = useState(false)`

the you create a function to open the Modal and close it :
```
javascript
const handleOpenModal = () => {
    setModalOpen(true);
};
const handleCloseModal = () => {
    setModalOpen(false);
}
```


Opening 

The simplest approach is to add `onClick={handleOpenModal}` on the DOM element that you want to use, like a button or a link.

Closing 
Similar to how we did with the opening we'll add `onClose={handleCloseModal}` if the modal it's already open. 

Propieties 
'open' 
Type : boolean
Description : Propriety to control if the modal is open or close. If 'true', the modal will be displayed. If 'false', the modal is hidden.

'onClose'
type: function
Description : We call this function when the modal need to be closed. This is used with a closing event like a closing button or a click outside the modal. 

Example : 

```
import React, { useState } from 'react';
import Modal from 'mon-plugin-modal-react';

function MyComponent() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open the modal</button>
      {modalOpen && (
        <Modal onClose={handleCloseModal}>
          {/* modal content */}
          <h2>Modal Title</h2>
          <p>modal content...</p>
        </Modal>
      )}
    </div>
  );
}

export default MyComponent;

```