import Scene from "@/app/components/Scene";
import Navbar from "@/app/components/Navbar";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";

const IMAGES = [
  "/images/sockets.jpg",
  "/images/smarthome.jpg",
  "/images/alexa.jpg",
  "/images/cabels.jpg",
];

export default function PractisesPage() {
  return (
    <Scene>
      <Navbar />
      <Carousel imageUrls={IMAGES} />
      <Footer text="First week, I practised HTML, CSS and JS. Then I start develop my website. I use framework NextJS, for 3D content I work with libraries React Fiber and Koestlich. Second week, me and my classmate started to wire outlets, switches and lights. After that, we set up smarthome and made our routine in Alexa app." />
    </Scene>
  );
}
