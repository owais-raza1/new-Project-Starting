import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import { app } from "./FirebaseConfigindex";

const auth = getAuth(app);

export const SignUpUser = (email: string, password: string, navigate: any) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: "You have successfully signed up!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      console.log(res, "SignUp Successful");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: err.message,
      });
      console.log(err, "Error");
    });
};

export const loginUser = (email: string, password: string, navigate: any) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Sign In Successful",
        text: "You have successfully signed in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
      console.log(res, "SignIn Successful");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Sign In Failed",
        text: err.message,
      });
      console.log(err, "Error");
    });
};
