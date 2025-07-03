import AboutUs from "./components/Home/AboutUs";
import Body from "./components/Home/Body";
import ContactUs from "./components/Home/ContactUs";
import Header from "./components/General/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Body />

      <div className="flex max-md:flex-col max-md:px-4 gap-8 md:gap-4 py-8 justify-between container">
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
}
