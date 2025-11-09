

function ProfileCard({ name, role, avatarUrl }) {

  // Function for button click
  const handleClick = () => {
    alert("Hello from " + name);
  };

  // CSS Styling
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "220px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    margin: "15px",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "1.3em",
    margin: "10px 0 5px",
  };

  const roleStyle = {
    color: "#666",
    marginBottom: "10px",
  };

  const btnStyle = {
    backgroundColor: "lightseagreen",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={`${name}'s avatar`} style={imgStyle} />
      <h2 style={nameStyle}>{name}</h2>
      <h4 style={roleStyle}>{role}</h4>
      <button style={btnStyle} onClick={handleClick}>
        Say Hello
      </button>
    </div>
  );
}

export default ProfileCard;
