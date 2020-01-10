import React, {useState} from 'react'
import Highlight, {defaultProps} from "prism-react-renderer"
import './codeWrapper.scss';
import {Button} from "../../lib";

export interface Props {
  code: string,
}

const CodeWrapper: React.FunctionComponent<Props> = (props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {props.children}
      <div className={'visible-operation-group'} >
        <Button color={'primary'} size={'small'} onClick={() => { setVisible(true) }}>
          查看代码
        </Button>
        <Button className={'margin-left-10'} size={'small'} onClick={() => { setVisible(false) }}>
          隐藏代码
        </Button>
      </div>

      {
        isVisible &&
        <Highlight {...defaultProps} code={props.code} language="jsx">
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      }

    </>
  )
};

export default CodeWrapper;
