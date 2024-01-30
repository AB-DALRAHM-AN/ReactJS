export const Header = ({ title, image }) => {
  return (
      <header>
        <img src={image} alt={title} />
        <h1>{title}</h1>
      </header>
  );
};
