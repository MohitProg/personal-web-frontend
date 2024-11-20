import { Avatar, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { UpdateUser } from "../Redux/Api/userApi";
import toast from "react-hot-toast";

const EditProfileModal = ({ seteditprofile,setopenMoreModal, editprofile }) => {
  const { darkmode } = useThemeContext();
  // dispatch object
  const dispatch = useDispatch();

  // ref for update file
  const ref = useRef();
  const { userdata } = useSelector((state) => state.user);
  const [user, setuser] = useState({
    name: "",
    desc: "",
    avatar: "",
  });
  // state for file
  const [file, setfile] = useState(null);

  useEffect(() => {
    setuser({
      name: userdata?.name,
      desc: userdata?.desc,
      avatar: userdata?.avatar,
    });
  }, [editprofile, userdata]);
  // handle to update user

  const HandleUpdateuser = (e) => {
    e.preventDefault();

    console.log(user)
    const formdata = new FormData();
    formdata.append("name", user?.name);
    formdata.append("desc", user?.desc);
    formdata.append("avatar", user?.avatar);

    dispatch(UpdateUser(formdata))
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          seteditprofile(false)
          setopenMoreModal(false)
        } else {
          toast.error(res.message);
        }
      });
  };
  return (
    <>
      <Modal open={editprofile}>
        <div className={`${darkmode ? "dark" : ""}`}>
          <div className="fixed inset-0 bg-gray-800  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-[#1E1E2D]  w-full max-w-md mx-auto rounded-lg shadow-lg p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-[#C0C5D0]">
                Edit Profile
              </h2>

              {/* Profile Photo */}

              <form
                action=""
                onSubmit={HandleUpdateuser}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-4">
                  <Avatar
                    src={file ? URL.createObjectURL(file) : user?.avatar}
                    sx={{ height: "100px", width: "100px" }}
                  />
                  <input
                    type="file"
                    onChange={(e) => {
                      setuser({ ...user, avatar: e.target.files[0] }),
                        setfile(e.target.files[0]);
                    }}
                    name="avatar"
                 
                    className="hidden"
                    ref={ref}
                  />
                  <div
                    className="text-sm text-purple-500  cursor-pointer font-semibold flex items-center  hover:underline"
                    onClick={() => ref.current.click()}
                  >
                    <AttachFileIcon fontSize="small" /> Upload file
                  </div>
                </div>

                {/* Username Field */}
                <div>
                  <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                    Username
                  </label>
                  <input
                    name="name"
                    value={user?.name}
                    onChange={(e) => setuser({ ...user, name: e.target.value })}
                    type="text"
                    className="w-full dark:bg-transparent dark:text-[#C0C5D0] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Email Field */}
                {/* <div>
          <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border dark:bg-transparent dark:text-[#C0C5D0] border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
            placeholder="Enter your email"
          />
        </div> */}

                {/* Bio Field */}
                <div>
                  <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                    Bio
                  </label>
                  <textarea
                    name="desc"
                    value={user?.desc}
                    onChange={(e) => setuser({ ...user, desc: e.target.value })}
                    className="w-full border dark:bg-transparent dark:text-[#C0C5D0] border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
                    placeholder="A short bio about yourself"
                    rows="3"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => seteditprofile(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-[#5941C6] text-white rounded-md hover:bg-[#4f4484]">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfileModal;
