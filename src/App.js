import React, { useEffect, useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

import './App.css'
import EditorBase from './component/EditorBase';
import MathJax from 'react-mathjax-preview'
const str = String.raw`<p><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msqrt><mi>x</mi><mo>+</mo><mn>1</mn></msqrt><annotation encoding="LaTeX">\sqrt{x+2}</annotation></semantics></math></p>`


console.log(ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName));

const App = () => {
  const [dataEditor, setDataEditor] = useState(str)

  useEffect(() => {
    console.log('chạy effect')
  }, [dataEditor])


  // console.log(`data`, data?.replaceAll(`&nbsp;`,` `).length)
  // console.log(`convert`, convertToText(converToXml(data)))

  // console.log(`str`, str.length)
  // console.log(`test`, convertToText(converToXml(dataEditor))==dataEditor)

  const onChange = (event, editor) => {
    const data = editor.getData();
    setDataEditor(data)
    // console.log(`data`, data)
    console.log('onchange')
  }

  return (
    <div className="row">
      <h1>ClassicEditor CKEditor</h1>
      <EditorBase
        onChange={onChange}
        data={dataEditor}
      />

      <br />
      <br />
      <br />


      <div className="row d-flex">
        <div className="col-6">
          <h2>
            Data Editor
          </h2>
          <p>
            {dataEditor ? dataEditor : "chưa có dữ liệu"}
          </p>
        </div>

      </div>


      <div className="row">
        <h2>HTML Browser preview</h2>
        <div dangerouslySetInnerHTML={{ __html: dataEditor }} />
      </div>

      <div className="row">
        <h2>HTML MathJax preview</h2>
      <MathJax math={dataEditor} />
      </div>

    </div >

  )
}
export default App