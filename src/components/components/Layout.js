import styled from "styled-components";
import Typist from "react-typist";
import { Above } from "./MediaTemplates";

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

export const Header = styled.div`
  left: 48px;
  position: absolute;
  top: 48px;

  ${Above.sm`
    left: 120px;
    top: 120px;
  `}

  ${Above.md`
    left: 64px;
  `}

  ${Above.lg`
    left: 120px;
  `}
`;

export const Container = styled.div`
  align-items: center;
  background: ${props => props.media ? "#FFE5CA" : "#FFF"};
  display: flex;
  flex-grow: ${props => props.media ? 1 : 0};
  flex-wrap: wrap;
  justify-content: center;
  max-width: none;
  min-height: 540px;
  overflow: hidden;
  width: 100vw;

  ${Above.sm`
    min-height: 740px;
  `}

  ${Above.md`
    height: 100vh;
    max-width: ${props => props.media ? "none" : "768px"};
    width: ${props => props.media ? "40vw" : "60vw"};
  `}

  ${Above.xl`
    justify-content: center;
    max-width: ${props => props.media ? "none" : "900px"};
    width: ${props => props.media ? "60vw" : "40vw"};
  `}

`;

export const Content = styled.div`
  padding: 48px;

  ${Above.sm`
    padding: 120px;
  `}

  ${Above.md`
    padding: 64px;
  `}

  ${Above.lg`
    padding: 120px;
  `}
`;

export const Image = styled.img`
  min-height: 500px;
  width: 700px;
  z-index: 99;

  ${Above.md`
    margin-right: -64px;
    object-fit: contain;
    width: 100%;
  `}

  ${Above.lg`
    margin-right: -96px;
  `}

  ${Above.xl`
    margin-right: 0;
    max-height: 707px;
  `}
`;
