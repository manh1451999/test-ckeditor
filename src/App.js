import React, { useEffect, useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

import './App.css'
import EditorBase from './component/EditorBase';

const str = `Nguyên tử vàng có 79 electron ở vỏ nguyên tử. Điện tích hạt nhân của nguyên tử vàng là;A. +79\nB. -79\nC.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>-</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>\nD.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;D.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;Giải Thích\nĐáp án D\nĐiện tích hạt nhân là  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>79</mn><mo>.</mo><mo> </mo><mn>1</mn><mo>,</mo><mn>602</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>19</mn></mrow></msup><mo> </mo><mo>=</mo><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math> , hoặc kí hiệu là 79+.`

const convertToText = str => {
  return str?.split(/<p>(.*?)<\/p>/g).join(`\n`) || ''
}
const converToXml = xml => {
  return xml?.split('\n').map(e => `<p>${e}</p>`).join("") || ''
}


console.log(ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName));

const App = () => {
  const [data, setData] = useState()
  const [dataEditor, setDataEditor] = useState(converToXml(str))

  useEffect(() => {
    setData(convertToText(dataEditor));
    console.log('chạy effect')
  }, [dataEditor])

  console.log(`data`, data?.length);
  console.log(`str`, str.length)

  // console.log(`data`, data?.replaceAll(`&nbsp;`,` `).length)
  // console.log(`convert`, convertToText(converToXml(data)))

  // console.log(`str`, str.length)
  // console.log(`test`, convertToText(converToXml(dataEditor))==dataEditor)

  const onChange=(event, editor) => {
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

       <h1>ClassicEditor CKEditor</h1>
        <EditorBase
          type="inline"
          onChange={onChange}
          data={dataEditor}
        />
       
      <div className="row d-flex">
        <div className="col-6">
          <h2>
            Data Editor
          </h2>
          <p>
            {dataEditor ? dataEditor : "chưa có dữ liệu"}
          </p>
        </div>

        <div className="col-6">
          <h2>
            Data Converted
          </h2>
          <p>
            {data ? data : "chưa có dữ liệu"}
          </p>
        </div>

      </div>


      <div className="row">
        <h2>HTML preview</h2>
        <div dangerouslySetInnerHTML={{ __html: dataEditor }} />
      </div>
    </div>

  )
}
export default App