import React, {ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from "../index";
import { Button } from '../index';
import {scopedClassFactory} from "../helper/classes";

const scopedClass = scopedClassFactory('dialog');
const sc = scopedClass;

interface Props {
  visible: boolean, // 是否展示
  children?: ReactNode, // content
  onClose: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  closeOnClickMask?: boolean,
  isShowFooter?: boolean,
  title?: string,
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

  const portalComponent = (
    props.visible &&
    <>
      <div className={sc('mask')} onClick={onCLickMask} />
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name='close' />
        </div>
        <header className={sc('header')}>
          {props.title}
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
    portalComponent, document.body
  )
};

Dialog.defaultProps = {
  closeOnClickMask: true,
  isShowFooter: true,
  title: 'default title'
};

const createPortal = (type: string, content: any, yes?: () => void, no?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  let onYes = onClose;
  let onNo = onClose;
  if (type === 'CONFIRM') {
    onYes = () => {
      onClose();
      yes && yes();
    };
    onNo = () => {
      onClose();
      no && no();
    };
  }
  const component = (
    <Dialog
      visible={true}
      onClose={onClose}
      isShowFooter={type === 'CONFIRM'}
      onCancel={onNo}
      onOk={onYes}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};

const alert = (content: string) => {
  return createPortal('ALERT', content);
};

const confirm = (content: string, yes: () => void, no: () => void) => {
  return createPortal('CONFIRM', content, yes, no);
};

const modal = (content: ReactNode | ReactFragment) => {
  return createPortal('MODAL', content);
};

export default Dialog;
export { alert, confirm, modal };

