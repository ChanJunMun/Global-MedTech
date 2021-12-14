import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Carousel, Container, Figure, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MedTech 7</title>
        <meta name="description" content="Your one stop home for personal fitness and healthcare. Hassle-free, online, 24/7 Artificial Intelligence (AI) assisted consultation and home diagnosis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Row>
          <Figure className='text-center'>
            <Figure.Image
              width={1200}
              height={800}
              alt="Home page image"
              src="/homePage.png"
            />
          </Figure>
        </Row>
      </Container>

      <Carousel className='text-center'>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/carousel1.png"
            width={1000}
            height={600}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/carousel2.png"
            width={1000}
            height={600}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/carousel3.png"
            width={1000}
            height={600}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

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
    </div>
  )
}
