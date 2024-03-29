
// import React, { useEffect } from 'react';

// const ContactUs = () => {
//   useEffect(() => {
//     if (!document.getElementById("sheetdb_snippets_script")) {
//       const script = document.createElement("script");
//       script.id = "sheetdb_snippets_script";
//       script.src = "https://sheetdb.io/snippets.js";
//       script.type = "module";
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className='text-white flex flex-col items-center'>
//       <style>
//         {`
//           .sheetdb-form label {
//               color: white;
//             }
//         `}
//       </style>
//       <div className='pb-8 flex mt-7 pt-7 text-white text-2xl font-light sm:leading-none leading-[1.1] sm:text-4xl xl:text-[60px] tracking-[-0.89px] text-center '>Contact Us</div>
//       <sheetdb-form
//         api-id='3xgzo13mgoces'
//         fields='[{"visable":"1","name":"Name","label":"Name","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Email","label":"Email","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Phone Number","label":"Phone Number","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Resume Drive Link","label":"Resume Drive Link","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"LinkedIn Profile URL","label":"LinkedIn Profile URL","placeholder":"","type":"text","required":"","options":""}]'
//         config='{"justifyContent":"center","width":"w-700px","submitLabel":"Submit","successMessage":"Thank you.","redirectUrl":"","background":"transparent"}'
//       ></sheetdb-form>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    if (!document.getElementById("sheetdb_snippets_script")) {
      const script = document.createElement("script");
      script.id = "sheetdb_snippets_script";
      script.src = "https://sheetdb.io/snippets.js";
      script.type = "module";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className='flex flex-col items-center gap-[60px] text-white'>
       <div  className=' cursor-pointer  flex mt-7 pt-7 text-white text-2xl font-light sm:leading-none leading-[1.1] sm:text-4xl xl:text-[60px] tracking-[-0.89px] text-center '>Contact Us</div>
      <sheetdb-form
        api-id='ajqbbqnndohn9'
        fields='[{"visable":"1","name":"Name","label":"Name","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Email Id","label":"Email Id","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Phone Number","label":"Phone Number","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"LinkedIn Profile URL","label":"LinkedIn Profile URL","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Resume Drive Link","label":"Resume Drive Link","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Your highest level of study*","label":"Your highest level of study*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"University of your highest level of study?*","label":"University of your highest level of study?*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Your core field of study(major)","label":"Your core field of study(major)","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Any other prefered area(s) of work","label":"Any other prefered area(s) of work","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Cumulative GPA","label":"Cumulative GPA","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"What is your favourite subject and why?*","label":"What is your favourite subject and why?*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Please write about any past internships, projects or experiments in your core field of study. Please share details\/links\/samples here if you have any writing experience(eg. Journalism\/blogging\/authoring\/campus\/newsletter)*","label":"Please write about any past internships, projects or experiments in your core field of study. Please share details\/links\/samples here if you have any writing experience(eg. Journalism\/blogging\/authoring\/campus\/newsletter)*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Are you proficient in any programming languages( if yes, specify)*","label":"Are you proficient in any programming languages( if yes, specify)*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"Are you proficient in any Indian languages(If yes, specify)*","label":"Are you proficient in any Indian languages(If yes, specify)*","placeholder":"","type":"text","required":"","options":""},{"visable":"1","name":"If you have a rank or score in one of those 5 coding websites( hackerank,CodeChef, Hackerearth, Topcoder, Codeforces), please share your profile URL below. This will improve\u00a0your\u00a0chances","label":"If you have a rank or score in one of those 5 coding websites( hackerank,CodeChef, Hackerearth, Topcoder, Codeforces), please share your profile URL below. This will improve\u00a0your\u00a0chances","placeholder":"","type":"text","required":"","options":""}]'
        config='{"justifyContent":"center","width":"w-700px","submitLabel":"Submit","successMessage":"Thank you.","redirectUrl":"","background":"transparent"}'
      ></sheetdb-form>
    </div>
  );
};

export default ContactUs;


