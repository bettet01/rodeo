import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;  
  align-items: center;
  flex-direction: ${({direction}) => direction};
  justify-content: space-between;
  margin: auto;
  width: 100%;
  
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
    align-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  
    @media (max-width: 600px) {
      font-size: 16px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  
    @media (max-width: 1050px) {
      font-size: 16px;
      margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 5px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;