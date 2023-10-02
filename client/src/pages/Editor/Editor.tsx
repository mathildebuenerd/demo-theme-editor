import Input from "../../components/Input/Input";

import "./Editor.css";

export default function Editor() {
  return (
    <div className="editor">
      <section>
        <h2>Settings</h2>
        <div className="settings-block">
          <Input type="text" label="Background color" />
          <Input type="text" label="Text color" />
        </div>
      </section>
      <section>
        <iframe
          title="Preview"
          src="http://localhost:8080/"
          width="700"
          height="600"
        ></iframe>
      </section>
    </div>
  );
}
