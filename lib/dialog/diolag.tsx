import React, {ReactNode} from 'react';
import './dialog.scss';
import {Icon} from "../index";
import {scopedClassFactory} from "../helper/classes";

const scopedClass = scopedClassFactory('cuu-dialog');
const sc = scopedClass;

interface Props {
  visible: boolean, // 是否展示
  children?: ReactNode, // content
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      {
        props.visible &&
        <>
          <div className={sc('mask')}>

          </div>
          <div className={sc()}>
            <div className={sc('close')}>
              <Icon name='close' />
            </div>
            <header className={sc('header')}>
              dialog
            </header>
            <main className={sc('main')}>
              { props.children }
            </main>
            <footer className={sc('footer')}>
              <button>ok</button>
              <button>cancel</button>
            </footer>
          </div>
        </>
      }
    </>
  )
};

export default Dialog;
