import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import OurAchievement from '../components/OurAchievement';
import OurCommunity from '../components/OurCommunity';

export default function Home() {
  return (
    <>
      <div className="p-4 bg-gradient-to-br from-white to-blue-100">
          <Header/>
      </div>
      <div className="p-4">
        <AboutUs />
        <OurAchievement/>
      </div>
      <OurCommunity />
    </>
  )
}
