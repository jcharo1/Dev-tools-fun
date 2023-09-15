import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useToast } from "./ToastProvider";

function Page1() {
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log("useeffect ran");
  }, [data]);
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("This is a toast message!");
  };
  return (
    <>
      {" "}
      <button onClick={handleClick}>Show Toast</button>
    </>
  );
}

export default Page1;
