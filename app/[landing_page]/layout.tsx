import { Navbar } from "./_components/navbar";

const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-20">  {/* Increased padding-top to account for fixed Navbar */}
        {children}
      </main>
    </div>
   );
}