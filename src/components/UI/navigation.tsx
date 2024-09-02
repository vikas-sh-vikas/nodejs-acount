import { useRouter } from "next/router";
import React, { useState } from "react";
import cookie from "react-cookies";
type navModel = {
  toggle?: boolean;
  setToggle: (toggle: boolean) => void;
};

function Navigation({ toggle, setToggle,...props}: navModel  & React.HTMLAttributes<HTMLElement>) {
  const token = cookie.load("accessToken")
  const { DOMAIN } = process.env;

  const cookieStorePath = `${DOMAIN || "/"}`;
  const defaultOptions = {
    path: cookieStorePath,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  };
  console.log("Token Name",token)
  const router = useRouter()
  const menuClick = () => {
    setToggle(!toggle);
  };
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.ok) {
        router.push("/auth/login");
        cookie.remove("accessToken", defaultOptions)
        cookie.remove("refreshToken", defaultOptions)
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  }
  return (
      <nav {...props} className="bg-indigo-50 min-h-[6vh] flex items-center justify-between px-3">
        <div className="flex">
          <div className="px-2 border-gray-400 border-e-2 border-solid cursor-pointer" onClick={menuClick}>
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          <div className="px-4">logo</div>
        </div>

        <div className="flex justify-end">
          <ul className="flex">
            <li className="px-2 text-gray-700">Profile</li>
          </ul>
          <button onClick={logout}>
            Log Out
          </button>
        </div>
      </nav>
  );
}

export default Navigation;
