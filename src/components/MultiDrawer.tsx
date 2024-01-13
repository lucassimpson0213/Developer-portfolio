import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Drawer } from 'antd';
import 'antd/dist/antd.css'; // Make sure to import the Ant Design CSS

const MultiDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
const r = document.getElementById('root');
const root = ReactDOM.createRoot(r); // Assuming 'root' is the id of your mount node
root.render(<MultiDrawer />);
