import Image from "next/image";
import Login from "./ui/login";
import { Input } from "./component/input";
import { Button } from "./component/button";

export default function Home() {
  return (
    <Login>
      <form action="" method="post" className="flex flex-col space-y-5">
        <Input
        type="text"
        placeholder="Username"
        ></Input>
        <Input
        type="password"
        placeholder="Password"
        ></Input>
        <Button
        type="submit"
        className="bg-green-400 text-white"
        >
          Sign In
        </Button>
      </form>
    </Login>
  );
}
