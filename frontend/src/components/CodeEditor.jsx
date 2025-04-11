import React, { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { ViewUpdate } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import './CodeEditor.css';

const CodeEditor = ({ code, setCode, language }) => {
  const editorRef = useRef(null);
  const editorViewRef = useRef(null);

  useEffect(() => {
    // Function to get the appropriate language extension
    const getLanguageExtension = () => {
      switch (language) {
        case 'javascript':
          return javascript();
        case 'python':
          return python();
        case 'cpp':
          return cpp();
        default:
          return javascript();
      }
    };

    // Only create a new editor if one doesn't exist yet
    if (editorRef.current && !editorViewRef.current) {
      const startState = EditorState.create({
        doc: code,
        extensions: [
          basicSetup,
          getLanguageExtension(),
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setCode(update.state.doc.toString());
            }
          })
        ]
      });

      editorViewRef.current = new EditorView({
        state: startState,
        parent: editorRef.current
      });
    }

    // Cleanup function to destroy the editor when component unmounts
    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Update the language when it changes
  useEffect(() => {
    if (editorViewRef.current) {
      const getLanguageExtension = () => {
        switch (language) {
          case 'javascript':
            return javascript();
          case 'python':
            return python();
          case 'cpp':
            return cpp();
          default:
            return javascript();
        }
      };

      // Preserve the current content
      const currentContent = editorViewRef.current.state.doc.toString();
      
      // Create new state with updated language
      const newState = EditorState.create({
        doc: currentContent,
        extensions: [
          basicSetup,
          getLanguageExtension(),
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setCode(update.state.doc.toString());
            }
          })
        ]
      });
      
      editorViewRef.current.setState(newState);
    }
  }, [language]);

  return (
    <div className="code-editor-container">
      <div className="editor-wrapper" ref={editorRef}></div>
    </div>
  );
};

export default CodeEditor;