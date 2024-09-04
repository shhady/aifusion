import AiComponent from "@/components/AI/AiComponent";
import ContactUs from "@/components/contactUs/ContactUs";
import { GlobeDemo } from "@/components/globe/Globe";
import WebDev from "@/components/web/WebDev";

export default function Home() {
  return (
   <div>
   <GlobeDemo />
   <WebDev />
   <AiComponent />
   <ContactUs />
   </div>
  );
}
