import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full p-2 fixed top-0 left-0 z-10">
      <div className="max-w-3xl flex items-center justify-between mx-auto">
        <div>Logo</div>

        <Button>Login</Button>
      </div>
    </header>
  );
}
