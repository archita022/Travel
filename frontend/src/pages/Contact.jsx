import React,{useEffect} from 'react';
import '../styles/contact.css';

function Contact() {

  const handleContact = (event) => {
    event.preventDefault();
    alert('Our team will get back to you soon :)');
  };
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div>
      <form className='contactForm' onSubmit={handleContact}>
        <h1 className='contactHeading'>Contact us</h1>

        <div className="box contactBox">
          
          <input type="text" placeholder='Enter your name' className='nameBox' />

          
          <input type='email' placeholder='Enter email address' className='emailBox' required/>

          
          <textarea placeholder='Describe your thoughts' className='messageBox' required></textarea>

          <button type='submit' className='submitButton'>Submit</button>
          
        </div>

      </form>
    </div>
  );
}

export default Contact;
