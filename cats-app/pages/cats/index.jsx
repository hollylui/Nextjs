import { useState, useEffect } from "react";

import { Nav } from "../../components/nav/Nav";
import Card from "../../components/card/Card";
import DefaultLayout from "../../layouts/Default";

const cats = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="container mt-5">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {cats.map((cat) => (
              <Card
                name={cat.name}
                id={cat.id}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default cats;
