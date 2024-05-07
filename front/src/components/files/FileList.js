import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import FileRow from "./FileRow";
import FileHeading from "./FileHeading";
import FileFilter from "./FileFilter";
import { Error, Loading } from "../states/index";
import { fetchFilesData } from "../../redux/actions/actions";

const FileList = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state);
  const [fileNameFilter, setFileNameFilter] = useState('');

  useEffect(() => {
    dispatch(fetchFilesData(fileNameFilter));
  }, [dispatch, fileNameFilter]);

  const applyFilter = (fileName) => {
    setFileNameFilter(fileName);
  };

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error}/>
  }

  return (
    <div>
      <h1>File List</h1>
      <FileFilter onFilter={applyFilter} />
      <Table striped bordered hover>
        <thead>
        </thead>
          <FileHeading />
        <tbody>
        </tbody>
        <tbody>
        {Array.isArray(files) ? (
            files.map((file) => (
              <FileRow key={file.file} file={file} />
            ))
          ) : (
            <FileRow key={files.file} file={files} />
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FileList;
