import { Viewer, Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useState } from "react";

function FilePDF() {
    const [pdfFile, setPDFFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);
    const fileType = ['application/pdf'];
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        setFile(selectedFile.name);
        console.log(selectedFile);
        console.log();
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else {
                setPDFFile(null)
            }
        }
        else {
            console.log("please");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
    }
    const onButtonClick = (file, name) => {
        let fetchData = `${file}`;
        let a = document.createElement("a");
        a.href = fetchData;
        a.download = `${name}`;
    }
    return (
        <>
            <input type="file" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Upload</button>
           {viewPdf && <button onClick={onButtonClick(viewPdf, file)}>
                    Download PDF
                </button>} 
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {viewPdf && <>
                    <Viewer fileUrl={viewPdf} /></>}
            </Worker> */}
        </>
    );
}

export default FilePDF;