import React, {HTMLAttributes, UIEventHandler, useState, useEffect, useRef, MouseEventHandler} from 'react'
import {scopedClassFactory} from "../helper/classes";
import './scroll.scss';
import scrollBarWidth from "./scrollBarWidth";

const componentPrefix = 'scroll';

const scopedClass = scopedClassFactory(componentPrefix);
const sc = scopedClass;


export interface Props extends HTMLAttributes<HTMLDivElement>{

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);

  const setBarTop = (num: number) => {
    if (num < 0) return;
    const {current} = containerRef;
    const scrollHeight = current?.scrollHeight;
    const viewHeight = current?.getBoundingClientRect().height;
    // const scrollTop = current?.scrollTop;
    // @ts-ignore
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight/scrollHeight;
    if (num > maxBarTop) {
      _setBarTop(maxBarTop);
      return;
    }
    _setBarTop(num)
  };

  const onScroll: UIEventHandler = (e) => {
    const height = e.currentTarget.getBoundingClientRect().height;
    setBarHeight(height*height/e.currentTarget.scrollHeight);
    setBarTop(height * e.currentTarget.scrollTop/e.currentTarget.scrollHeight)
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // deps === [],等价于componentDidMount，第一次加载页面执行
  useEffect(() => {
    const height = containerRef?.current?.getBoundingClientRect().height;
    // @ts-ignore
    setBarHeight(height*height/containerRef?.current?.scrollHeight);
    // @ts-ignore
    setBarTop(height * containerRef.current.scrollTop/containerRef.current.scrollHeight)
  }, []);

  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    startYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - startYRef.current;
      setBarTop(firstBarTopRef.current + delta );
      const height = containerRef?.current?.getBoundingClientRect().height;

      // @ts-ignore
      containerRef.current.scrollTop = (firstBarTopRef.current + delta) / height * containerRef.current.scrollHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };

  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect);
    return () => { // 推出页面 清理监听
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart', onSelect);
    }
  }, []);

  return (
    <div
      className={sc('')}
      {...rest}
    >
      <div
        ref={containerRef}
        className={sc('inner')}
        style={{ right: -scrollBarWidth() }}
        onScroll={onScroll}
      >
        {children}
      </div>
      <div className={sc('track')}>
        <div
          onMouseDown={onMouseDownBar}
          className={sc('bar')}
          style={{ height:barHeight, transform: `translateY(${barTop}px)` }}
        />
      </div>
    </div>
  )
};

export default Scroll;
