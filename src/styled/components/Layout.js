import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { HAZEL, INK, EASE_OUT_EXPO } from "./Variables";

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
  background: ${props => props.media && HAZEL};
  display: flex;
  flex-grow: ${props => props.media && 1};
  flex-wrap: wrap;
  justify-content: center;
  max-height: 100vh;
  max-width: none;
  min-height: 540px;
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
  padding: 36px;
  width: calc(100% - 64px);

  ${Above.sm`
    display: ${props => props.tablet ? "block" : "none"};
    height: calc(100vh - 96px);
    padding: none;
    width: 100%;
  `}

  ${Above.md`
    display: ${props => props.desktop ? "block" : "none"};
    height: auto;
    margin-right: -400px;
    transition: 600ms ${EASE_OUT_EXPO};
    width: 720px;

    :hover {
      transform: translateX(-200px);
    }
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
