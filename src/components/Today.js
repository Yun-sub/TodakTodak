import React from "react";

const Today = () => {
  const current = new Date();
  const date = `${current.getFullYear()} /
  ${current.getMonth() + 1} /
  ${current.getDate()}`;
  return (
    <div>
      <p className="today">{date}</p>
    </div>
  );
};

export default Today;
