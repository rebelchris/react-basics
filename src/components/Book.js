export default function Book({ title, setCurrentBook }) {
  return <div onClick={() => setCurrentBook(title)}>{title}</div>;
}
