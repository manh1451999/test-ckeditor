import React, { useEffect, useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

const str = `Nguyên tử vàng có 79 electron ở vỏ nguyên tử. Điện tích hạt nhân của nguyên tử vàng là;A. +79\nB. -79\nC.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>-</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>\nD.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;D.  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math>;Giải Thích\nĐáp án D\nĐiện tích hạt nhân là  <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>79</mn><mo>.</mo><mo> </mo><mn>1</mn><mo>,</mo><mn>602</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>19</mn></mrow></msup><mo> </mo><mo>=</mo><mo>+</mo><mn>1</mn><mo>,</mo><mn>266</mn><mo>.</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>17</mn></mrow></msup><mo> </mo><mi>C</mi></math> , hoặc kí hiệu là 79+.`

const convertToText = str => {
  return str?.split(/<p>(.*?)<\/p>/g).join(`\n`) || ''
}
const converToXml = xml => {
  return xml?.split('\n').map(e => `<p>${e}</p>`).join("") || ''
}

const App = () => {
  const [data, setData] = useState()
  const [dataEditor, setDataEditor] = useState(converToXml(str))

  useEffect(() => {
   setData(convertToText(dataEditor));
   console.log('chạy effect')
  }, [dataEditor])

  console.log(`data`, data)
  // console.log(`dataEditor`, dataEditor.replaceAll(`&nbsp`,`  `))
  console.log(`str`, str)

  console.log(`data`, data?.replaceAll(`&nbsp;`,` `).length)
  // console.log(`dataEditor`, dataEditor.replaceAll(`&nbsp`,`  `))
  console.log(`str`, str.length)
  console.log(`check`, data?.replaceAll(`&nbsp;`,` `)==str)
  console.log(`test`, convertToText(converToXml(dataEditor))==dataEditor)

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        ckfinder: {
          // The URL that the images are uploaded to.
          uploadUrl: 'http://localhost:8000/upload', 

          // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: true,

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
              'X-CSRF-TOKEN': 'CSFR-Token',
               Authorization: 'Bearer <JSON Web Token>'
          }
    },
        toolbar: {
          items: [
            'heading',
            'MathType',
            'ChemType',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'ngjyutumberedList',
            'imageUpload',
            'mediaEmbed',
            'insertTable',
            'blockQuote',
            'undo',
            'redo',
            'table'
            // 'ckfinder'
          ],
        },
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setDataEditor(data)
        // console.log(`data`, data)
        console.log('onchange')
      }}

      data= {dataEditor}
      // data={converToXml(data)}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        // console.log( 'Editor is ready to use!', editor );
      }}
    />
  )
}
export default App