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
  top: 24px;

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
  max-height: 100vh;
  max-width: none;
  min-height: 540px;
  overflow: hidden;
  width: 100vw;

  ${Above.sm`
    height: ${props => props.media ? "100vh" : "none"};
    min-height: 740px;
  `}

  ${Above.md`
    height: 100vh;
    max-width: ${props => props.media ? "none" : "768px"};
    width: ${props => props.media ? "40vw" : "60vw"};
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
  display: ${props => props.mobile ? "block" : "none"};
  object-fit: contain;
  width: calc(100% - 64px);

  ${Above.sm`
    display: ${props => props.tablet ? "block" : "none"};
    width: 100%;
    height: calc(100vh - 96px);
  `}

  ${Above.md`
    display: ${props => props.desktop ? "block" : "none"};
    height: auto;
    margin-right: -400px;
    width: 720px;
  `}

  ${Above.lg`
    width: 130%;
    max-width: 720px;
  `}

  ${Above.xl`
    margin-right: 0;
    max-height: 707px;
  `}
`;
