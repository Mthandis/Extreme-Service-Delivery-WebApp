import React, { useEffect, useState } from "react";
import '../../../scss/Manager/manager.scss';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PdfReport = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/issues') // Replace with your actual API endpoint
            .then(response => {
                setIssues(response.data);
            })
            .catch(error => {
                console.error('Error fetching issues:', error);
            });
    }, []);

    const generatePdf = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
            });

            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('report.pdf');
        });
    };

    return (
        <>
            <div className='issues-header'>
                <Link to='/homepage'><FontAwesomeIcon icon={faArrowLeft} className="back-arrow" /></Link>
                <h1>ISSUES</h1>
            </div>

            <div className="filt-sort">
                <button className="sort-button">Sort</button>
                <button className="sort-button">Filter</button>
            </div>

            <div id="pdf-content" className="sections">
                {issues.map((issue, index) => (
                    <div className="report-sec" key={index}>
                        <p className="issue">Issue ID: {issue.id}</p>
                        <p className="issue">Description: {issue.description}</p>
                        <p className="issue">Date Reported: {issue.date_reported}</p>
                        <p className="issue">Status: {issue.status}</p>
                        <p className="issue">Location: {issue.location}</p>
                        <button className="assign-button">SUPERVISOR</button>
                    </div>
                ))}
            </div>

            <button onClick={generatePdf} className="save-button">Save As PDF</button>
        </>
    );
};

export default PdfReport;
