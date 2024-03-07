import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function GetStarted() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Head>
        <title>Contact us - GlowUp</title>
      </Head>
      <div className='pt-16 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a GlowUp expert
              </h1>
              <p className='mt-3'>
                We are here to help. Get in touch with sales our press team and
                let us know how we can help, or shoot us an email on{" "}
                <a
                  href='mailto:example@glowup.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                  example@glowup.com
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>

              <form
                ref={form} onSubmit={sendEmail}
                className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type="text" 
                    name="user_name"
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Your email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    name="user_email"
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    name="message"
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                </div>
                <div className='pt-1'>
                  <Button value="Send" className='w-full text-white bg-cyan-500 hover:bg-gray-600 active:bg-cyan-700 ring-offset-2 ring-cyan-700 focus:ring'>
                    Submit
                  </Button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}