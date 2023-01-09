import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import Header from '../components/Header';
import OurAchievement from '../components/OurAchievement';
import OurCommunity from '../components/OurCommunity';
import OurTeam from '../components/OurTeam';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-blue-100">
          <Header/>
      </div>
      <AboutUs />
      <OurAchievement/>
      <OurCommunity />
      <OurTeam />
      <CTA />
      <Blog />
    </>
  )
}
