import React from "react";
import Img from "../editedImg.png";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Info = () => {
  return (
    <>
      <img src={Img} alt="myPic" className="myPic" />
      <h2 className="name">Sumeet Kolekarr</h2>
      <h4 className="profile">Frontend Developer</h4>
      <p className="contact">skbillionaire555@gmail.com</p>
      <div className="btns">
        <button className="email"><MdEmail /><strong className="emlg">Email</strong></button>
        <button className="linkedIn"><FaLinkedin /> <strong className="lklg">LinkedIn</strong></button>
      </div>
    </>
  );
};

export default Info;
