import React from "react";

const SignUp = () => {
  return (
    <form>
      <div>
        <label>이메일</label>
        <input name="email" type="text" placeholder="이메일 입력..." required />
      </div>

      <div>
        <label>비밀번호</label>
        <input
          name="password"
          type="password"
          placeholder="비밀번호 입력..."
          required
        />
      </div>
    </form>
  );
};

export default SignUp;
