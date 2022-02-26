import React, { useState, useEffect } from "react";
import { Spinner, Button, Image } from "react-bootstrap";
import i from "../asserts/images/i.jpg";

const MutationObj = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {}, [loader]);

  console.log("loader", loader);
  const handleObserver = () => {
    setTimeout(() => {
      document.getElementById("img").src =
        "https://picsum.photos/200/300?grayscale";
    }, 2000);

    setTimeout(() => {
      document.getElementById("img").src =
        "https://picsum.photos/id/237/200/300";
    }, 4000);

    let target = document.querySelector("#img");

    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation);
      });
    });

    let config = {
      attributes: true,
      childList: true,
      characterData: true,
    };

    observer.disconnect();
    observer.observe(target, config);
  };

  return (
    <>
      <h4>Mutation Observer</h4>
      <div>
        {!loader ? (
          <div style={{ margin: "6rem 0 0 4rem " }}>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </div>
        ) : (
          <></>
        )}
        <Image
          src="https://picsum.photos/seed/picsum/200/300"
          id="img"
          alt="mutation observer img"
          onLoad={() => setLoader(true)}
        />
      </div>
      <div style={{ margin: "2rem 0 0 1rem" }}>
        <Button onClick={handleObserver}>Mutation Observer</Button>
      </div>
    </>
  );
};

export default MutationObj;
