import React, { useState } from 'react';
import { Button, Dialog } from 'lib';
import { alert, confirm, modal } from "../../../lib/dialog/diolag";


const DialogExample = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    const close = modal(
      <div>
        <h1>confirm modal</h1>
        <Button onClick={() => { close() }}>close </Button>
      </div>
    );
    console.log(close)
  };
  return (
    <>
      <div>
        <Button onClick={() => setX(!x)}>!click</Button>
        <Dialog
          title={'title123'}
          onOk={() => setX(!x)}
          onCancel={() => setX(!x)}
          onClose={() => setX(!x)}
          visible={x}
        >
          1111
        </Dialog>
      </div>
      <hr/>
      <div>
        <Button onClick={() => setY(!y)}>!click</Button>
        <Dialog closeOnClickMask={false} onClose={() => setY(!y)} visible={y}>
          2222
        </Dialog>
      </div>
      <hr/>
      <div>
        <Button onClick={() => {alert('alert button')}}>alert</Button>
      </div>
      <hr/>
      <div>
        <Button
          onClick={() => {
            confirm('confirm button',
              () => { console.log('yes') },
              () => { console.log('no') })
          }}
        >
          confirm
        </Button>
      </div>
      <hr/>
      <div>
        <Button
          onClick={openModal}
        >
          open modal
        </Button>
      </div>
    </>
  )
};

export default DialogExample;
