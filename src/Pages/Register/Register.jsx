import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";



const Register = () => {

    const email= "riad@gmail.com"
  const password= "122355"

  createUserWithEmailAndPassword(auth,email,password)
  .then(res=>{
    console.log(res.user);
  })
  .catch(err=>{
    console.log(err);
  })


    return (
        <div>
            This
        </div>
    );
};

export default Register;