import styled from 'styled-components';

const TechniqueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 200px;
  margin: 50px auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23);
`;

const TechniqueText = styled.h1`
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 1.2em;
  text-align: center;
`;

interface Props{
    technique: string
}

function TechniqueView(props: Props){
    return (
        <TechniqueBox>
            <TechniqueText>
                The martial arts technique of the week is: {props.technique}
            </TechniqueText>
        </TechniqueBox>
    )
}

export default TechniqueView;
