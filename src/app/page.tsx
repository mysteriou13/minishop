import Carrousel from "@/app/components/Carrousel/Carousel";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
         home page
          <Carrousel/>
      </main>
      <Footer />
    </div>
  );
}
