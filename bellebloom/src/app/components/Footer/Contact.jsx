import React from "react";

const Contact = ({mainColor}) => {

   let classname=`contact contact--${mainColor}`

  return (
    <div className={classname}>
      <h4>
        <a href="">Get in touch</a>
      </h4>

      <p>
        <a href="">belleBloom-contact@gmail.com</a>
      </p>

      <p>
        <a href="">Instagtam</a>
      </p>

      <p>
        <a href="">Facebook</a>
      </p>

      <p>
        <a href="">Twitter</a>
      </p>
    </div>
  );
};

export default Contact;
