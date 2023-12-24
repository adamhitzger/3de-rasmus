import Scene from "@/app/components/Scene";
import Navbar from "@/app/components/Navbar";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";

const IMAGES = [
  "https://images.unsplash.com/photo-1620418885516-68d8c2b2f8c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=420&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzcxNjgxOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
  "https://images.unsplash.com/photo-1602097647685-5d903d353191?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=420&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzcxNjg5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
  "https://images.unsplash.com/photo-1558341799-7e224952d725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=420&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzcxNjk0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
];

export default function LeipzigPage() {
  return (
    <Scene>
      <Navbar />
      <Carousel imageUrls={IMAGES} />
      <Footer text="Leipzig with a population of 624,689 inhabitants as of 2022, is the most populous city in the German state of Saxony, the second most populous city in the area of the former East Germany after (East) Berlin, and Germany's eighth most populous. Leipzig/Halle Airport is situated in Schkeuditz, between Leipzig and Halle (Saale). The name of the city and those of many of its districts are of Slavic origin." />
    </Scene>
  );
}
