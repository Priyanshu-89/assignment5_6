

function Greeting({ name, favoriteColor }) {
    
  // Button click handler
  const handleClick = () => {
    console.log(`${name} clicked the button!`);
  };

  // Inline style using favoriteColor prop
  const textStyle = {
    color: favoriteColor,
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "280px",
    padding: "15px",
    margin: "15px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  };

  const btnStyle = {
    backgroundColor: favoriteColor,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <p style={textStyle}>
        Hello {name}! Your favorite color is {favoriteColor}.
      </p>
      <button style={btnStyle} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Greeting;
