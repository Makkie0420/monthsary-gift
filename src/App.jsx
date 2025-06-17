import React from "react";
import "./App.css";
import PhotoCollage from "./components/PhotoCollage";

function App() {
  return (
    <div className="app">
      <div className="overlay" />

      <header className="header">
        <img
          src="../src/assets/photos/[CITYPNG.COM]Sanrio Character Kawaii Kuromi Character HD PNG - 1500x1500.png"
          alt="Kuromi"
          style={{ width: "100px", marginBottom: "1rem" }}
        />
        <h1>Happy Monthsary, BB! 💜🖤</h1>
        <p>To my cutest bb🖤</p>
      </header>

      <section className="message">
        <p>
          Thank you sa lahat ng nigagawa mo para sakin regaluhan moko ng shades monitor .
        </p>
        <p>
          Here's a look back at some of our most beautiful moments together.
        </p>
        <p className="sign">— Yours always 💌</p>
      </section>

      <PhotoCollage />

      <footer>
        <p>Made with ❤️ by maki</p>
      </footer>
    </div>
  );
}

export default App;

