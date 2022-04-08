export default function ItemList({ items }) {
  return (
    <div>
      <ol>
        {items.map((item, i) => (
          <ul key={i}>{item}</ul>
        ))}
      </ol>
    </div>
  );
}
