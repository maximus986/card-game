import styled from '@emotion/styled';
import { SelectNumberOfPlayers } from 'components';
import React from 'react';

export const NumberOfPlayers = () => (
  <Container>
    <div>
      <Title>Select number of players</Title>
      <ButtonContainer>
        <SelectNumberOfPlayers label="2 Players" numberOfPlayers={2} />
      </ButtonContainer>
      <ButtonContainer>
        <SelectNumberOfPlayers label=" 3 Players" numberOfPlayers={3} />
      </ButtonContainer>
      <SelectNumberOfPlayers label=" 4 Players" numberOfPlayers={4} />
    </div>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
  color: #6db06d;
  @media (min-width: 992px) {
    font-size: 48px;
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;
