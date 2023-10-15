import { useState } from "react";
import { FaUser, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContextGlobal } from "../hooks/useContextGlobal";

function User() {
  const [oldPass, setOldPass] = useState("");
  const [newPas, setNewPass] = useState("");
  const [err, setErr] = useState(null);
  const { changeUser } = useContextGlobal();
  const [dataUser, setDataUser] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const handleDelte = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setDataUser(null);
    changeUser(null);
    toast.success("Account has been deleted");
  };
  const changePass = (e) => {
    e.preventDefault();
    if (oldPass === dataUser.pass) {
      let newData = { ...dataUser, pass: newPas };
      localStorage.setItem("user", JSON.stringify(newData));
      setDataUser(JSON.parse(localStorage.getItem("user")));
      setErr("");
      changeUser(newData);
      toast.success("Successfuly changed 👍");
    } else {
      setErr("Incorrect Password");
    }
  };
  return (
    <>
      {JSON.parse(localStorage.getItem("user")) ? (
        <div className="card w-full max-w-lg bg-base-100 shadow-xl mx-auto my-[137px]">
          <div className="card-body">
            <h1 className="text-3xl">
              <FaUser />
            </h1>
            <h2 className="text-2xl font-bold">Your Profile</h2>
            <h2 className=" text-xl">
              <span className="font-semibold">Name:</span> {dataUser.name}
            </h2>
            <p>
              <span className="font-semibold">Your gmail:</span>{" "}
              <span className="italic">{dataUser.mail}</span>
            </p>
            <p>
              <span className="font-semibold">Your Password: </span>
              <span>
                {dataUser.pass.charAt(0)}***
                {dataUser.pass.charAt(dataUser.pass.length - 1)}
              </span>
            </p>
            <p>
              <span className="font-semibold">Gender: </span>
              <span>{dataUser.gender}</span>
            </p>
            <div>
              <p
                className="text-red-600 cursor-pointer text-xl flex items-center gap-3  hover:opacity-70"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Delete the profile{" "}
                <span className="text-[15px]">
                  <FaTrash />
                </span>
              </p>
              <p
                className="text-gray-500 cursor-pointer text-xl flex items-center gap-2 hover:opacity-70"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Change Password{" "}
                <span className="text-[15px]">
                  <FaPen />
                </span>
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary hover:opacity-80" to="/">
                Go home
              </Link>
            </div>
          </div>

          <dialog id="my_modal_3" className="modal max-w-md w-full mx-auto">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg ">Delete The Profile</h3>
              <p className="py-4 text-2xl text-red-500">
                Are you sure delete the profile ?
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDelte(e);
                }}
              >
                <button className="w-full ml-auto btn-primary btn">
                  Yes, I'm sure
                </button>
              </form>
            </div>
          </dialog>

          <dialog id="my_modal_4" className="modal max-w-md w-full mx-auto">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg ">Change Password</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  changePass(e);
                }}
              >
                <label>
                  <input
                    type="text"
                    placeholder="Enter current password"
                    className="input input-bordered input-success w-full max-w-xs"
                    onChange={(e) => {
                      setOldPass(e.target.value);
                    }}
                  />
                </label>
                {err && (
                  <p className="text-red-800">
                    Incorrect Password , please try again
                  </p>
                )}
                <label className="mr-3">
                  <input
                    type="text"
                    placeholder="Enter New Pasword"
                    className="input input-bordered input-success w-full max-w-xs my-3"
                    onChange={(e) => {
                      setNewPass(e.target.value);
                    }}
                  />
                </label>
                <button className="btn btn-secondary">Change</button>
              </form>
            </div>
          </dialog>
        </div>
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-[224px]">
          <div className="card-body">
            <h2 className="card-title">You must sign up</h2>
            <p className="text-xl mb-3">If you want sign up , click 👇</p>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary w-full mb-3" to="../sign-up">
                Sign Up
              </Link>
              <Link className="btn btn-primary" to="/">
                BACK Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default User;
