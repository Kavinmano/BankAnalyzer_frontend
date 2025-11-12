import React, { useState } from "react";
import { uploadStatement } from "../services/api";

const FileUpload = ({ setResult }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("statement", file);

    try {
      const res = await uploadStatement(formData);
      setResult(res.data.summary);
    } catch (err) {
      alert("Error uploading file");
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Bank Statement CSV</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept=".csv"
      />

      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Analyze
      </button>
    </div>
  );
};

export default FileUpload;
