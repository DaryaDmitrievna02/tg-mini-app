import React from 'react';
import styled from 'styled-components';

import ZodiacCard from './ZodiacCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const zodiacSigns = [
    { 
      symbol: '♈', 
      name: { en: 'aries', ru: 'овен' }, 
      dateRange: { 
        en: 'March 21 - April 19', 
        ru: '21 марта - 19 апреля' 
      } 
    },
    { 
      symbol: '♉', 
      name: { en: 'taurus', ru: 'телец' }, 
      dateRange: { 
        en: 'April 20 - May 20', 
        ru: '20 апреля - 20 мая' 
      } 
    },
    { 
      symbol: '♊', 
      name: { en: 'gemini', ru: 'близнецы' }, 
      dateRange: { 
        en: 'May 21 - June 20', 
        ru: '21 мая - 20 июня' 
      } 
    },
    { 
      symbol: '♋', 
      name: { en: 'cancer', ru: 'рак' }, 
      dateRange: { 
        en: 'June 21 - July 22', 
        ru: '21 июня - 22 июля' 
      } 
    },
    { 
      symbol: '♌', 
      name: { en: 'leo', ru: 'лев' }, 
      dateRange: { 
        en: 'July 23 - August 22', 
        ru: '23 июля - 22 августа' 
      } 
    },
    { 
      symbol: '♍', 
      name: { en: 'virgo', ru: 'дева' }, 
      dateRange: { 
        en: 'August 23 - September 22', 
        ru: '23 августа - 22 сентября' 
      } 
    },
    { 
      symbol: '♎', 
      name: { en: 'libra', ru: 'весы' }, 
      dateRange: { 
        en: 'September 23 - October 22', 
        ru: '23 сентября - 22 октября' 
      } 
    },
    { 
      symbol: '♏', 
      name: { en: 'scorpio', ru: 'скорпион' }, 
      dateRange: { 
        en: 'October 23 - November 21', 
        ru: '23 октября - 21 ноября' 
      } 
    },
    { 
      symbol: '♐', 
      name: { en: 'sagittarius', ru: 'стрелец' }, 
      dateRange: { 
        en: 'November 22 - December 21', 
        ru: '22 ноября - 21 декабря' 
      } 
    },
    { 
      symbol: '♑', 
      name: { en: 'capricorn', ru: 'козерог' }, 
      dateRange: { 
        en: 'December 22 - January 19', 
        ru: '22 декабря - 19 января' 
      } 
    },
    { 
      symbol: '♒', 
      name: { en: 'aquarius', ru: 'водолей' }, 
      dateRange: { 
        en: 'January 20 - February 18', 
        ru: '20 января - 18 февраля' 
      } 
    },
    { 
      symbol: '♓', 
      name: { en: 'pisces', ru: 'рыбы' }, 
      dateRange: { 
        en: 'February 19 - March 20', 
        ru: '19 февраля - 20 марта' 
      } 
    },
  ];

const ZodiacList = ({language}) => {

  return (
    <Container>
   {zodiacSigns.map((zodiac, index) => {
  return (
    <ZodiacCard key={index} zodiac={zodiac} language={language} />
  );
})}
    </Container>
  );
};

export default ZodiacList;