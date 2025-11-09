import Greeting from "./components/Greeting";

function App() {
  const appStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div style={appStyle}>
      <Greeting name="Shivam" favoriteColor="maroon" />
      <Greeting name="Priyanshu" favoriteColor="purple" />
      <Greeting name="Riya" favoriteColor="green" />
    </div>
  );
}

export default App;
