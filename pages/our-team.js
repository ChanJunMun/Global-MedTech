import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function OurTeam() {
  return (
    <>
    <Head>
      <title>Our Team in Global Medtech</title>
      <meta name="description" content="Your one stop home for personal fitness and healthcare. Hassle-free, online, 24/7 Artificial Intelligence (AI) assisted consultation and home diagnosis" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Row className='justify-content-md-center'>
          <Image 
            src="/DrTeo.png"
            width={400}
            height={400} 
            alt='Dr Teo' />
          <Image 
            src="/DrYeoh.png" 
            width={400}
            height={400}
            alt='Dr Yeoh'/>
      </Row>
    </Container>

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
