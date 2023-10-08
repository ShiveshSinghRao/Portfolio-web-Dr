import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPlusCircle,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://pbs.twimg.com/profile_images/1644366677629345792/mwC1qkFD_400x400.jpg"
          }
          alt="Founder"
        />

        <h2>Dr Rajesh Bhojwani</h2>
        <p>An apple a day keeps the doctor away.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/rajeshbhojwani1" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-rajesh-bhojwani-75831a16/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.facebook.com/docsindia.in/" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a
            href="https://www.justdial.com/Jaipur/Dr-Rajesh-Bhojwani-Santokba-Durlabhji-Memorial-Hospital-Medical-Research-Institute-Near-Rambagh-Circle-Bapu-Nagar/0141PX141-X141-170525112630-W8A1_BZDET"
            target={"blank"}
          >
            <AiFillPlusCircle />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
