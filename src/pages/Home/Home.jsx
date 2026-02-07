"use client"
import { Helmet } from 'react-helmet';
import Navbar from "../../components/Navbar/Navbar.jsx";
import HeroA from "../../components/Hero/HeroA.jsx";
import CountriesScreenings from "../../components/Countries&Screenings/CountriesScreenings.jsx";
import AwardsMarquee from "../../components/AwardsMarquee/AwardsMarquee.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <div className="page-container">
        <Helmet>
            <title>Palestine 36 — Official Film | Find Cinema Screenings Worldwide</title>
            <meta name="description" content="The official landing page for the award-winning film Palestine 36. Find where the film is screening, watch the trailer, and book tickets in your country. Shortlisted for the Academy Awards." />
            <meta name="keywords" content="Palestine 36, film, movie, official, cinema, screenings, showtimes, tickets, booking, award-winning, Oscar, shortlisted, UAE, Qatar, Jordan, France, Chile, Saudi Arabia" />
            <meta property="og:title" content="Palestine 36 — Official Global Screening & Booking Page" />
            <meta property="og:description" content="Discover where to watch the award-winning film Palestine 36 in cinemas worldwide. Watch the trailer, explore screenings by country, and book your tickets." />
            <meta property="og:image" content="https://palestine36.com/images/Large-Arabic-Poster.jpg" />
            <meta property="og:url" content="https://palestine36.com" />
        </Helmet>
      
      <Navbar />
      <section id="home">
        <HeroA />
      </section>
      <div className="section-divider" />
      <section id="screenings">
        <CountriesScreenings />
      </section>
      <div className="section-divider" />
      <section id="awards">
        <AwardsMarquee />
      </section>
      <div className="section-divider" />
      <section id="watch-trailer">
        <CallToAction />
      </section>
      <Footer />

    </div>
  )
}
