import React, {ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from "../index";
import { Button } from '../index';
import {scopedClassFactory} from "../helper/classes";

const scopedClass = scopedClassFactory('cuu-dialog');
const sc = scopedClass;

interface Props {
  visible: boolean, // 是否展示
  children?: ReactNode, // content
  onClose: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  closeOnClickMask?: boolean,
  isShowFooter?: boolean,
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  };

  const onCLickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  };

  const { onOk, onCancel } = props;

  const x = (
    props.visible &&
    <>
      <div className={sc('mask')} onClick={onCLickMask}>

      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name='close' />
        </div>
        <header className={sc('header')}>
          dialog
        </header>
        <main className={sc('main')}>
          { props.children }
        </main>
        {
          props.isShowFooter &&
          <footer className={sc('footer')}>
            <Button onClick={onOk}>ok</Button>
            <Button onClick={onCancel}>cancel</Button>
          </footer>
        }

      </div>
    </>
  );

  return ReactDOM.createPortal(
    x, document.body
  )
};

Dialog.defaultProps = {
  closeOnClickMask: true,
  isShowFooter: true,
};

const x = (content: any, yes: () => void, no: () => {}) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={onClose}
      isShowFooter={false}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      isShowFooter={false}
      visible={true}
      onClose={onClose}
    >
      {content}
    </Dialog>

  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes: () => void, no: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const onYes = () => {
    onClose();
    yes && yes();
  };
  const onNo = () => {
    onClose();
    no && no();
  };
  const component = (
    <Dialog visible={true} onClose={onClose} onCancel={onNo} onOk={onYes}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={onClose}
      isShowFooter={false}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};

export default Dialog;
export { alert, confirm, modal };

