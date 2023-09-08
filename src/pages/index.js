import * as React from "react"
import Header from "../components/Landing/Header"
import Layout from "../components/Layout/Layout"
import Section1 from '../components/Landing/Section1';
import Section2 from '../components/Landing/Section2';
import Section3 from '../components/Landing/Section3';
import Section4 from '../components/Landing/Section4';
import Section5 from '../components/Landing/Section5';
import Section6 from '../components/Landing/Section6';
import Section7 from '../components/Landing/Section7';
import Section8 from '../components/Landing/Section8';
import Section9 from '../components/Landing/Section9';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </Layout>
  )
}
