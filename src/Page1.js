import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useToast } from "./ToastProvider";

function Page1() {
  const [data, setData] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useeffect ran");
  }, [data]);
  const { addToast } = useToast();

  const handleClick = () => {
    addToast(`This is a toast message! ---->` + "    " + `${count}`);
    setCount(count + 1);
  };
  return (
    <>
      <div clasName="page-one">
        {" "}
        <button onClick={handleClick}>Show Toast</button>
      </div>
      <div clasName="page-one bg-cyan"> </div>
      <div clasName="page-one bg-mint"> </div>
    </>
  );
}

export default Page1;
