import { useState, useEffect } from "react";
import { Loading } from "./components";

function App() {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

    if (!isMobile) {
      setIsPC(!isMobile);

      redirectTo("https://matheuspa.me/");
    }
    return;
  }, []);

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      {isPC ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <img className="h-20" src="images/logo-m.svg" alt="Logo do Matheus, um M azul" />
          <h1 className="font-semibold text-xl text-zinc-400">Em breve...</h1>
          <h2 className="font-semibold text-lg text-zinc-700">Comming soon...</h2>
        </div>
      )}
    </>
  );
}

export default App;
