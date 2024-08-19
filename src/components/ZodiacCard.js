/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  width: 80px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.3s;
background-color:white;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Cardinner = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  width: 90%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ZodiacCard = ({ zodiac, language }) => {
  const [description, setDescription] = useState("");
  const [inner, setInner] = useState(false);

  useEffect(() => {
    handleCardClick();
  }, [language]);

  const handleCardClick = async () => {
    try {
      const response = await fetch("https://poker247tech.ru/get_horoscope/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sign: zodiac.name["en"],
          language: language,
          period: "today",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setDescription(data.horoscope || "Описание не найдено");
    } catch (error) {
      setDescription("Ошибка при загрузке данных");
    }
  };

  return (
    <>
      <Card
        onClick={() => {
          handleCardClick();
          setInner(true);
        }}
      >
        <h3>
          {language === "original" ? zodiac.name["ru"] : zodiac.name["en"]}{" "}
        </h3>
        <p>{zodiac.symbol}</p>
        <p>
          {language === "original"
            ? zodiac.dateRange["ru"]
            : zodiac.dateRange["en"]}
        </p>
      </Card>

      {inner && (
        <Cardinner>
          <button style={{background:'transparent', padding:'5px', border:"1px solid rgb(0,0,0,0.5)", borderRadius:'5px'}} onClick={() => setInner(false)}>←</button>
          <h1>
            {" "}
            {language === "original"
              ? zodiac.name["ru"]
              : zodiac.name["en"]}{" "}
            {zodiac.symbol}
          </h1>
          <p style={{ width: "80%" }}>{description}</p>
        </Cardinner>
      )}
    </>
  );
};
export default ZodiacCard;
