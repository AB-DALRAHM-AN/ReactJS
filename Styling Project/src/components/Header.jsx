import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 md:mb-16 mb-8">
      {/* <img src={logo} alt="A canvas" />
        this method for idintify and set a style for a unique element || a target element.. we can make it by add a .module in the name of the css file and target the syle like the next method
      <h1 className={classes.header1}>ReactArt</h1>
        for avoiding the !scoping on the element we can you use the inlineStyle as in the next <p/> 
      <p style={{ textAlign: "center", color: "#a39191", margin: 0 }}>
        A community of artists and art-lovers.
      </p> */}
      <img src={logo} alt="A canvas" className="mb-8 object-contain w-44 h-44"/>
      <h1 className="text-xl md:text-4xl font-semibold text-center tracking-widest uppercase text-amber-800 font-title">ReactArt</h1>
      <p className="">A community of artists and art-lovers.</p>
    </header>
  );
}
