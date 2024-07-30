import { useRouter } from "next/router";
import React, { useState } from "react";
type navModel = {
  toggle?: boolean;
  setToggle: (toggle: boolean) => void;
};

function Navigation({ toggle, setToggle }: navModel) {
  const router = useRouter()
  const menuClick = () => {
    setToggle(!toggle);
  };
  const logout = () => {
    router.push('/auth/login')

  }
  return (
    <>
      <nav className="bg-indigo-50 min-h-[8vh] flex items-center justify-between px-3">
        <div className="flex">
          <div className="px-2 border-gray-400 border-e-2 border-solid cursor-pointer" onClick={menuClick}>
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          <div className="px-4">logo</div>
        </div>

        <div className="flex justify-end">
          <ul className="flex items-center">
            <li className="px-4 text-gray-700">Profile</li>
          </ul>
          <button className="bg-indigo-400 text-white py-1 px-3 rounded-md" onClick={logout}>Logout</button>
        </div>
      </nav>
      <strong>
        <hr></hr>
      </strong>
    </>
  );
}

export default Navigation;
