import React from "react";
import pdfFile from "/assets/Christopher_Linder_Resume (1).pdf"

import { Document, Page, pdfjs } from 'react-pdf';
import TechStack from "./TechStack.jsx";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function Resume() {
    return (
        <div id="resume" className={"section"}>
            <h1 align={"center"}>Resume</h1>
            <Document file={pdfFile}>
                <Page pageNumber={1} renderTextLayer={false}
                      renderAnnotationLayer={false}/>
            </Document>
            <div align={"center"}>
            <a href={pdfFile} download="Christopher_Linder_Resume.pdf" className="download-button">
                Download Resume
            </a>
            </div>
        </div>
    )
}

export default Resume;