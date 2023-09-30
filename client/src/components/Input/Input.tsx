interface Props {
  type: HTMLInputElement["type"];
  label: string;
}

export default function Input({ type, label }: Props) {
  return (
    <label htmlFor="color-background">
      {label}
      <input id="color-background" type={type} />
    </label>
  );
}
