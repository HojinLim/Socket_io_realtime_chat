import React, { useEffect, useState } from "react";

import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginPage = (props: Props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navi = useNavigate();
  const { user, message, isSuccess } = useSelector(
    (state: RootState) => state.auth
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login({ name, password }));
  };
  useEffect(() => {
    if (user) {
      // TODO: 로그인 관련 처리
      // navi("/");
    }
  }, [user, isSuccess]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <form className="modal-Container" onSubmit={handleLogin}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="mt-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="●●●●●●"
          className="mt-3 p-2 border border-gray-300 rounded"
        />

        <button
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6"
          type="submit"
        >
          로그인
        </button>
        <button className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
        <div
          className="mt-3 hover:text-blue-700 hover:cursor-pointer text-gray-600 font-bold py-2 px-4"
          onClick={() => navi("/register")}
        >
          회원가입 바로가기
        </div>
      </form>
    </div>
  );
};

export default LoginPage;