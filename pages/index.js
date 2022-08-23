import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Hero from '../components/home/hero';
import SubHero from '../components/home/subHero';
import AchieveGoals from '../components/home/achieveGoals';

export default function Home() {
  const { user, error, isLoading } = useUser();
  /*console.log(user)*/

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>LB FITNESS │ Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-7xl mx-auto font-bold'>
      <p className='float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-12'>LB│FITNESS</p>
      <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/login">Login</a>
      </div>

      <Hero/>
      <SubHero/>
      <AchieveGoals/>
       
    </div>
  )
}

{/* <div className={styles.container}> */}