'use client'

import { Button } from "./ui/button";

export default function Header() {
  const Login = () => {
    alert('logged in')
  }
  return (
    <header className="w-full p-2 fixed top-0 left-0 z-10 pointer-events-none" >
      <div className="max-w-3xl flex items-center justify-between mx-auto">
        <div>Logo</div>

        <Button 
          onClick={Login}
          className="pointer-events-auto"
        >
          Login
        </Button>
      </div>
    </header>
  );
}
