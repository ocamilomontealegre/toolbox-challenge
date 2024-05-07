import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import styles from "../../styles/files/files.module.css";

export const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/files')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  return (
    <div className={styles.tableContainer}>
      <h2>Listado de Archivos</h2>
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
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