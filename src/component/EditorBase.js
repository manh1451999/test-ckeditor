import React, { useState } from 'react'
import EditorType from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import MyCustomUploadAdapterPlugin from './MyCustomUploadAdapterPlugin';


export default function EditorBase ({type="classic", onChange, data}){
    const [showTool, setShowTool] = useState(false)
    return (
        <div className={(type="inline"&& !showTool)?'hidden-toolbar':''}>
            <CKEditor
                editor={EditorType}
                config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            '|',
                            'MathType',
                            'ChemType',
                            '|',
                            'outdent',
                            'indent',
                            '|',
                            'bulletedList',
                            'numberedList',
                            'underline',
                            'strikethrough',
                            'code',
                            'subscript',
                            'superscript',
                            'link',
                            'ngjyutumberedList',
                            'imageUpload',
                            'mediaEmbed',
                            'insertTable',
                            'blockQuote',
                            'undo',
                            'redo',
                            'table',
                            'specialCharacters'
                            // 'ckfinder'
                        ],
                    },
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange&&onChange(event, editor)
                }}


                
                data= {data}

                onBlur={ ( event, editor ) => {
                    type="inline"&&setShowTool(false);
                } }
                onFocus={ ( event, editor ) => {
                    type="inline"&&setShowTool(true)
                } }
            />
        </div>
    )
}
