import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'
import WhyQubly from './components/why_qubly'
import ProductTeams from './components/product_teams'
import EngineeringTeams from './components/engineering_teams'
import Testimonial from './components/testimonial'
import SignupForm from './components/signup_form'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <WhyQubly/>
      <hr className='my-10 lg:hidden'/>
      <ProductTeams/>
      <hr className='my-10 lg:hidden'/>
      <EngineeringTeams/>
      <Testimonial/>
      <SignupForm/>
      teste
    </main>
  )
}
