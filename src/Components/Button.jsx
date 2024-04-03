import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  useEffect(() => {
    if (!document.getElementById("sheetdb_snippets_script")) {
      const script = document.createElement("script");
      script.id = "sheetdb_snippets_script";
      script.src = "https://sheetdb.io/snippets.js";
      script.type = "module";
      document.body.appendChild(script);
    }
  }, []);

  let navigate = useNavigate();
  const clicked = () => (
    navigate(`/contactus`)
  );

  return (
    <div className='w-full flex flex-col items-center' id='contactus'>
      <div className='cursor-pointer mt-7 pt-7 text-2xl font-light leading-[1.1] text-center md:text-4xl xl:text-[60px] text-white mb-8 pb-6'>Contact Us</div>
      <div className="w-[80%] sm:w-full max-w-screen-sm mx-auto">
        <sheetdb-form
          api-id='er3gv4808d3v6'
          fields={`[{"visable":"1","name":"Name","label":"Name","placeholder":"","type":"text","required":"1","options":""},{"visable":"1","name":"Email","label":"Email","placeholder":"","type":"text","required":"1","options":""},{"visable":"1","name":"Phone Number","label":"Phone Number","placeholder":"","type":"text","required":"1","options":""},{"visable":"1","name":"LinkedIn Profile URL","label":"LinkedIn Profile URL","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Resume Drive Link","label":"Resume Drive Link","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Message","label":"Message","placeholder":"","type":"text","required":"1","options":""}]`}
          config='{"justifyContent":"center","width":"w-full","submitLabel":"Submit","successMessage":"Thank you.","redirectUrl":"","background":"transparent"}'
        ></sheetdb-form>
      </div>
    </div>
  );
};

export default Button;
