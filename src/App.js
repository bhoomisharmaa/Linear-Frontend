import "./App.css";
import ActiveTeam from "./Active Page/active-team";
import React, { useState } from "react";
import axios from "axios";

function App() {
  return <ActiveTeam />;
}

const CreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/workspace", {
        workspaceName: workspaceName,
      });

      setMessage("Workspace created successfully!");
      console.log("Workspace created:", response.data);
    } catch (error) {
      console.error("Error creating workspace:", error);
      setMessage(
        `Failed to create workspace. Error: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  };

  return (
    <div>
      <h1>Create Workspace</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="workspaceName">Workspace Name:</label>
        <input
          type="text"
          id="workspaceName"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
