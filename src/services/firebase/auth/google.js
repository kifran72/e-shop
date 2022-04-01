import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const login = () => {
  return new Promise((resolve) => {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const info = {
        credential,
        token,
        user,
      };
      resolve(info);
    });
  });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    signOut(auth).then(() => {
      resolve(true);
    });
  });
};

export { login, logout };
