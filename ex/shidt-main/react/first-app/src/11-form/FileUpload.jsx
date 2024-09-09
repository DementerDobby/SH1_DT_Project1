import React from "react";
import { useState } from "react";
import axios from "axios";

function FileUpload(props) {
  const [files, setFiles] = useState([]);

  const handleFilesChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    const formData = new FormData();

    files.map((file) => {
      //"file"과 노드서버의 "file"이름이 일치해야 한다.
      formData.append("file", file);
    });

    console.log(Array.from(formData));

    axios
      .post("http://localhost:3030/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form>
      <input
        className="file-input"
        type="file"
        mulitple
        onChange={handleFilesChange}
      />
      <button onClick={uploadFiles}>upload</button>
    </form>
  );
}

export default FileUpload;
