import { Heading } from "./[landing_page]/_components/heading";
import { Heroes } from "./[landing_page]/_components/heroes";
import { Footer } from "./[landing_page]/_components/footer";

export default function Home() {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
               <Heading/>
               <Heroes/>
            </div> 
            <Footer />
        </div>
    )
}