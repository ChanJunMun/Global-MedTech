import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import NewRegisterForm from '../components/NewRegisterForm'

function RegisterPage() {
  async function addUserHandler(enteredUserData) {
    const response = await fetch('/api/registerUser', {
      method: 'POST',
      body: JSON.stringify(enteredUserData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

  }

  return (
    <>
    <Head>
      <title>Register with us</title>
      <meta name="description" content="Your one stop home for personal fitness and healthcare. Hassle-free, online, 24/7 Artificial Intelligence (AI) assisted consultation and home diagnosis" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className='text-center mt-5'>Register with us</h1>

    <NewRegisterForm onAddUser={addUserHandler} />

    <footer className={styles.footer}>
        
        <a
          href="https://play.google.com/store/apps/details?id=com.medtech.mynewalarm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Click or scan QR code to install our Health Reminder app on Google Play Store</p>
        </a>
        <Image src="/healthReminderQRcode.png" alt="QR code" width={200} height={200}/>
      </footer>

    </>
  )
}

export default RegisterPage;