import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="px-16 my-10">
      <About />
      <div className="my-[400px]" />
      <Experience />
    </main>
  );
}
