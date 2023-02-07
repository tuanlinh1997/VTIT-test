import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;

export default async function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.OursiteJWT;
  const url = req.url;

  if (url.includes("/login")) {
    if (jwt) {
      try {
        verify(jwt, secret, { algorithms: "HS256" });
        return NextResponse.redirect("/");
      } catch (e) {
        console.log(e, "erorr verify");
        return NextResponse.next();
      }
    }
  }

  if (url.includes("/cart")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/login");
    }
    try {
      verify(jwt, secret);
      return NextResponse.next();
    } catch (e) {
      console.log(e, "erorr verify");
      return NextResponse.redirect("login");
    }
  }

  return NextResponse.next();
}
