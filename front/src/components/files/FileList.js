import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import styles from './FileList.module.css'; // Assuming you have a CSS module

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/files')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching files:', error));
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className={styles.tableContainer}>
      <h2>Listado de Archivos</h2>
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>File Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.name}</td>
              <td>{file.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FileList;
