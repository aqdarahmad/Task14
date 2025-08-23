import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;


const users = [
  {
    username: "aqdar@hotmail.com",
    password: "202111595",
    fullname: "Aqdar Ahmed",
    email: "aqdar@hotmail.com"
  }
];

app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({
      token: "abc123", 
      userinfo: {
        fullname: user.fullname,
        email: user.email
      }
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
