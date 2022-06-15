import styled from 'styled-components'

export const Artist = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 10px 0;

  &:first-child {
    > img {
      width: 40% !important;
    }
    > p {
      font-size: 46px;
    }
  }
`

export const Wrapper = styled.div`
  width: 50%;
  padding: 15px 10px;

  display: flex;
  flex-direction: column;

  border: 5px solid gray;
  border-bottom: 30px solid gray;
  border-radius: 10px;

  background: lightgray;
`

export const ArtistImage = styled.img`
  width: 20%;
  border: 1px solid black;
  border-radius: 10px;
`

export const ArtistName = styled.p`
  padding-left: 10px;
  font-size: 32px;

  color: black;
`
