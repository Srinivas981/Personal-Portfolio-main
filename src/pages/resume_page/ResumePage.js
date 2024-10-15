import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/SaiSrinivasResume1.pdf"; // Local PDF path

// Set the workerSrc property for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1F04vOW4F_fLpgwHN711Y-xsNLx3V4dHy/view?usp=drive_link"; // Updated direct download link

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.setAttribute('download', 'SaiSrinivasResume1.pdf'); // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Document
                file={pdf}
                options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
                style={{ width: width > 768 ? '600px' : '100%' }} // Responsive width
              >
                <Page pageNumber={1} />
              </Document>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" onClick={handleDownload}>
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
