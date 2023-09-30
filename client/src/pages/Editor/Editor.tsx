import Input from "../../components/Input/Input";

import "./Editor.css";

export default function Editor() {
  return (
    <>
      <section>
        <h2>Settings</h2>
        <div className="settings-block">
          <Input type="text" label="Background color" />
          <Input type="text" label="Text color" />
        </div>
      </section>
      <section>
        <h2>Preview</h2>
      </section>
    </>
  );
}
