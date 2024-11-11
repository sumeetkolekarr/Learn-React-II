import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="ftimgs">
      <FaSquareXTwitter className="lgimg"/>
      <FaFacebookSquare className="lgimg"/>
      <FaInstagramSquare className="lgimg"/>
      <FaGithubSquare className="lgimg"/>
    </div>
    </>
  );
};

export default Footer;
