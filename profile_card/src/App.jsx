import ProfileCard from "./components/ProfileCard";

function App() {
  const appStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f2f2f2",
  };

  return (
    <>
    <h1>Simple Profile Card</h1>
    <div style={appStyle}>
      <ProfileCard
        name="Priyanshu Vats"
        role="Full Stack Developer"
        avatarUrl="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      />
      <ProfileCard
        name="Krrish Kumar"
        role="UI/UX Designer"
        avatarUrl="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      />
      <ProfileCard
        name="Tanvi Rajput"
        role="Backend Developer"
        avatarUrl="https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      />
      <ProfileCard
        name="Ankit Yadav"
        role="Frontend Engineer"
        avatarUrl="https://images.unsplash.com/photo-1605949405965-d49ada3f9189?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964"
      />
      <ProfileCard
        name="Pallavi Pal"
        role="Data Analyst"
        avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
      />
    </div>
    </>
  );
}

export default App;
