import { useState } from "react";

function Home() {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  return (
    <div>
      {user && (
        <>
          <img src={user.picture} width="80" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
}

export default Home;