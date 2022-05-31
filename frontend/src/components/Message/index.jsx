import './styles.css';

export function Message({ msg, type }) {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
}
