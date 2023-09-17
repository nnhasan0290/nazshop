import Button from "../common/Button";
import Divider from "../common/Divider";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginDropdown = () => {
  return (
    <div className="flex flex-col ">
      <Button>Login or Register</Button>
      <Divider> Or Sign In</Divider>
      <div className="flex justify-center items-center gap-3">
        <FcGoogle size={28} />
        <FaFacebook size={28} />
        <FaGithub size={28} />
      </div>
    </div>
  );
};

export default LoginDropdown;
