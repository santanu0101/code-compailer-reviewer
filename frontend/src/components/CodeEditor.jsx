import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';

const CodeEditor = ({ code, setCode, language }) => {
  const getExtension = () => {
    switch (language) {
      case 'cpp':
        return cpp();
      case 'python':
        return python();
      default:
        return javascript();
    }
  };

  return (
    <CodeMirror
      value={code}
      height="300px"
      extensions={[getExtension()]}
      theme="dark"
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeEditor;
