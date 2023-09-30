import React from "react";
import "./App.css";
import Editor from "./pages/Editor/Editor";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Theme editor</h1>
      </header>
      <Editor />
    </div>
  );
}

export default App;
