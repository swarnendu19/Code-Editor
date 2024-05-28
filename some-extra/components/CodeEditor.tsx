"use client"
import React, { useState } from 'react';
import AceEditor from 'react-ace';

// Themes
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';

// Languages
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-golang';

// For code suggestions
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (newValue: string) => {
    console.log('change', newValue);
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center flex-grow h-full">
      <h1>Language Name</h1>
      <AceEditor
        mode="java"
        theme="dracula"
        onChange={onChange}
        name="java"
        value={value}
        style={{
          width: '100%',
          height: '100%',
        }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeEditor;
