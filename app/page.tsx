import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Scene from "./components/Scene";
const IMAGES = [
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=426&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzUyNzAxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
  "https://images.unsplash.com/photo-1649559295229-961cbad5d13f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=426&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzUyNzU2NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=420&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzUzNjk4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
];

export default function Home() {
  return (
    <>
      <Scene>
        <Navbar />
        <Carousel imageUrls={IMAGES} />
        <Footer text="My name is Adam Hitzger and I am 18 years old. I am studying IT in Humpolec. I am interested in programming especially web and IoT development mainly with ESP32 boards. My goal is to build E-commerce application." />
      </Scene>
    </>
  );
}
