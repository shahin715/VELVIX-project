import { useEffect } from "react";
import bcrypt from "bcryptjs";

export default function SetupUser() {
  useEffect(() => {
    const user = {
      email: "user@example.com",
      passwordHash: bcrypt.hashSync("123456", 10),
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Test user created in localStorage!");
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-2xl font-bold">User Setup Complete ✅</h1>
    </div>
  );
}
