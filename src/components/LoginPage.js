import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import app from "../fbase";
import { async } from "@firebase/util";

function LoginPage({ clickedName, closeThis }) {
  const closePage = async () => {
    closeThis((prev) => !prev);
  };
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [emailSignin, setEmailSignin] = useState("");
  const [passwordSignin, setPasswordSignin] = useState("");
  const onChangeSignup = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "emailSignup") {
      setEmailSignup(value);
    } else if (name === "passwordSignup") {
      setPasswordSignup(value);
    }
  };
  const onChangeSignin = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "emailSignin") {
      setEmailSignin(value);
    } else if (name === "passwordSignin") {
      setPasswordSignin(value);
    }
  };
  const onSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      let data;
      const auth = getAuth();
      data = await createUserWithEmailAndPassword(
        auth,
        emailSignup,
        passwordSignup
      );
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const onSubmitSignin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const GoogleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const TwitterLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = TwitterAuthProvider.credentialFromError(error);
      });
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("로그인됨");
      } else {
        console.log("로그인 안됨");
      }
    });
  }, []);

  return (
    <div>
      <button onClick={closePage}>X</button>
      <h2>{clickedName.name}이 눌렸음</h2>
      <form className="signin">
        <input
          name="emailSignin"
          type="text"
          value={emailSignin}
          onChange={onChangeSignin}
          placeholder="email"
        ></input>
        <input
          name="passwordSignin"
          type="text"
          value={passwordSignin}
          onChange={onChangeSignin}
          placeholder="password"
        ></input>
        <input
          name="signin"
          type="submit"
          value="로그인이지롱"
          onClick={onSubmitSignin}
        />
      </form>
      <form className="signup">
        <input
          name="emailSignup"
          type="text"
          value={emailSignup}
          onChange={onChangeSignup}
          placeholder="email"
        ></input>
        <input
          name="passwordSignup"
          type="text"
          value={passwordSignup}
          onChange={onChangeSignup}
          placeholder="password"
        ></input>
        <input
          name="signup"
          type="submit"
          value="회원가입"
          onClick={onSubmitSignup}
        />
      </form>
      <form>
        <button name="google" onClick={GoogleLogin}>
          Google Login
        </button>
        <button name="twitter" onClick={TwitterLogin}>
          Twitter Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
