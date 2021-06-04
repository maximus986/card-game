import styled from '@emotion/styled';
import { Card } from 'data/game/cardsDeck';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bot } from './Bot';
import { Player } from './Player';
import { Table } from './Table';

export const Game = () => {
  const cardsDeck = useSelector((state: RootState) => state.game.cardsDeck);
  return (
    <Container>
      <PlayerContainer>
        <Bot name="Rosetta" />
      </PlayerContainer>
      <Flex>
        <div>
          <Bot name="Carolyn" />
        </div>
        <Table cards={mockTableCards} />
        <div>
          <Bot name="Ola" />
        </div>
      </Flex>
      <PlayerContainer>
        <Player />
      </PlayerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: #0f3923;
`;

const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const PlayerContainer = styled.div`
  margin: 0 auto;
`;

const mockTableCards: Card[] = [
  {
    code: 'AS',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    value: 'ACE',
  },
  {
    code: '2S',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
    value: '2',
  },
  {
    code: '7S',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    value: '7',
  },
  {
    code: '2H',
    image: 'https://deckofcardsapi.com/static/img/2H.png',
    value: '2',
  },
];
