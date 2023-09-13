import axios from "axios";

interface SignInData {
  email: string;
  password: string;
}

const useAuth = () => {
  const signIn = async (data: SignInData) => {
    try {
      const res = await axios.post("https:localhost/3000/api/auth/signin", {
        email: data.email,
        password: data.password,
      });
      console.log(res);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const signUp = () => {};

  return {
    signIn,
    signUp,
  };
};

export default useAuth;
