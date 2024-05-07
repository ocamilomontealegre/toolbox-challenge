import React from "react";

const FileRow = ({ file }) => (
  <>
    {file.lines.map((line, index) => (
      <tr key={`${file.file}-${index}`}>
        <td>{file.file}</td>
        <td>{line.text}</td>
        <td>{line.number}</td>
        <td>{line.hex}</td>
      </tr>
    ))}
  </>
);

export default FileRow;