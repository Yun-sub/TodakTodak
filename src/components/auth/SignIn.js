import React from "react";
import "./Sign.css";

const SignIn = () => {
  return (
    <div className="Sign_Container">
      <form className="Sign_Form">
        <h1 className="Sign_Input_Title">로그인</h1>
        <div className="Sign_Input_Box">
          <div className="Sign_Input">
            <label>이메일</label>
            <input
              name="email"
              type="text"
              placeholder="이메일 입력..."
              required
            />
          </div>
        </div>

        <div className="Sign_Input_Box">
          <div className="Sign_Input">
            <label>비밀번호</label>
            <input
              name="password"
              type="password"
              placeholder="비밀번호 입력..."
              required
            />
          </div>
        </div>

        <input className="Sign_Btn" type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default SignIn;
