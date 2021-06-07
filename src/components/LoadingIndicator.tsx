import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Loader from 'react-loader-spinner';

export const LoadingIndicator = () => {
  const loadingCards = useSelector((state: RootState) => state.game.loadingCards);
  return (
    <>
      {loadingCards ? (
        <LoaderContainer>
          <Loader type="Circles" color="#ffc400" height={30} width={30} />
        </LoaderContainer>
      ) : null}
    </>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
