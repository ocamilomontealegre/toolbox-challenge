import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FileFilter = ({ onFilter }) => {
  const [fileName, setFileName] = useState('');

  const handleFilterChange = (e) => {
    setFileName(e.target.value);
  };

  const handleApplyFilter = () => {
    onFilter(fileName);
  };

  return (
    <div className="mb-3">
      <Form inline>
        <Form.Control
          type="text"
          placeholder="Filter by fileName"
          value={fileName}
          onChange={handleFilterChange}
          className="mr-sm-2"
        />
        <Button variant="primary" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
      </Form>
    </div>
  );
};

export default FileFilter;