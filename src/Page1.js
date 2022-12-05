import { useEffect, useState } from "react";
import "./Page1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Page1() {
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log("useeffect ran");
  }, [data]);

  return <></>;
}

export default Page1;
