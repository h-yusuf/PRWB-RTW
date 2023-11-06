import React, { useRef } from 'react';

import { motion } from "framer-motion";

import emailjs, { send } from "emailjs-com"
import {fadeIn} from '../../variants'

const Contact = () => {
  // emailjs.init('H4o07aEwfueamRv-d');
  // useEffect(() => {
  //   const btn = document.getElementById('buttonCn');
  //   const form = document.getElementById('formCn'); 
  
  //   if (form) {
  //     form.addEventListener('submit', function (event) {
  //       event.preventDefault();
  //       btn.value = 'Sending...';
  
  //       const serviceID = 'service_zd7pxfh';
  //       const templateID = 'template_zz70ohl';
  
  //       emailjs.sendForm(serviceID, templateID, this).then(
  //         () => {
  //           btn.value = 'Send Email';
  //           alert('your message was Sent!');
  //         }
  //         ,
  //         (err) => {
  //           btn.value = 'Send Email';
  //           alert(JSON.stringify(err));
  //         }
  //       );
  //     });
  //   }
  // }, []); 

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( 'service_zd7pxfh', 'template_zz70ohl', form.current, 'H4o07aEwfueamRv-d') 
    .then((result) => { 
      console.log(result.text);
      alert('your message was Sent!');
    }, (error) => {
    console.log(error.text);
    });
    };

  return (
    <section className='lg:section py-16 ' id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="flex-1">
            <div>
              <h4 className="text-3xl upercase text-accent font-medium mb-2 tracking-">
                Get in Touch
              </h4>
              <h2 className="leading-none mb-12 lg:text-[90px] text-[45px]">
                Let's Work <br /> Togheder!
              </h2>
            </div>
          </motion.div>
          <motion.form 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          ref={form}
          whileInView={'show'}
          onSubmit={sendEmail}
          viewport={{once: false, amount: 0.1}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 lg:items-start' action="">
            <input type="text" name="from_name" id="from_name" className="bg-transparent border-b placeholder:text-white py-3 outline-none w-full focus:border-accent transition-all" placeholder='Your name' required />
            <input type="text" name="to_name" id="to_name" className="bg-transparent border-b placeholder:text-white py-3 outline-none w-full focus:border-accent transition-all" placeholder='Your email' required/>
            <textarea type="text" name="message" id="message" className="bg-transparent resize-none border-b placeholder:text-white py-12 outline-none w-full focus:border-accent transition-all mb-12" placeholder='Your message' required>
            </textarea>
            <button type='submit' className='btn btn-lg' id='buttonCn' value={send} >Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  ) ;
};

export default Contact;
