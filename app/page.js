import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="px-16">
      <About />
      <Experience />
      <Project />
    </main>
  );
}
