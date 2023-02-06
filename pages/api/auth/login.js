/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = "bestSecretKey69";
const users = require("data/users.json");
export default async function (req, res) {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  // Check in the database
  // if a user with this username
  // and password exists
  if (user) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        username: username,
      },
      secret
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({
      data: {
        accessToken: token,
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      message: "Success!",
    });
  } else {
    res.json({ message: "Username or password is incorrect" });
  }
}
