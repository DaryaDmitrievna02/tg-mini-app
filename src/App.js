import React, {useState} from 'react';

import ZodiacList from './components/ZodiacList';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-color:white;
`;



const App = () => {

  const [language, setLanguage] = useState('original' )
  

  return (
    <>
    <button style={{background:'transparent', padding:'5px', border:"1px solid rgb(0,0,0,0.5)", borderRadius:'5px'}} onClick={()=>language === 'original' ? setLanguage('translated') : setLanguage('original')}>{language === 'original' ? 'ENG' : "РУС"}</button>
       <Container>
     <ZodiacList language={language} />
   </Container>
    
    </>
 
  );
};

export default App;