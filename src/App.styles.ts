import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  margin: auto;
  padding: 50px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const Finished = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5rem;
  color: #101c40;
  text-align: center;
  padding: 0 .5rem;
`