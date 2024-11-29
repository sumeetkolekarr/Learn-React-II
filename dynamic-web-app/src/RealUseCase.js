import React from "react";
import Star from "./Star";

const RealUseCase = () => {
  const [contact, setContact] = React.useState({
    firstName: "Lucky",
    lastName: "Kolekar",
    phone: "9145633119",
    email: "luckykolekar@gmail.com",
    isfav: false,
  });
 function toggleFav() {
    setContact(prev=>{
        return {
            ...contact,
            isfav: !prev.isfav
        }
    })
 }
  return (
    <>
      <Star handleClick={toggleFav} isFav = {contact.isfav}/>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </>
  );
};

export default RealUseCase;
