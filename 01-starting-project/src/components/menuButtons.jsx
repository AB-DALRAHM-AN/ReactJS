export function MenuButton({ children, selected, ...props }) {
  return (
    <li>
      <button className={selected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
