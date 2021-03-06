import styled, { injectGlobal } from "styled-components";
import { Above } from "./MediaTemplates";
/*
 * Font Definitions
 */

import ApercuRegular from "../../fonts/ApercuTrial-Regular.ttf";
import ApercuMedium from "../../fonts/ApercuTrial-Medium.ttf";
import ApercuBold from "../../fonts/ApercuTrial-Bold.ttf";

injectGlobal`
  @font-face {
    font-family: 'Apercu';
    src: url(${ApercuRegular});
    weight: normal;
  }
  @font-face {
    font-family: 'Apercu Medium';
    src: url(${ApercuMedium});
    weight: 600;
  }
  @font-face {
    font-family: 'Apercu Bold';
    src: url(${ApercuBold});
    weight: 800;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }
`;

/*
  Base Styles
*/

export const Heading = styled.h2`
  font-family: 'Apercu', sans-serif;
  font-size: 24px;

  ${Above.sm`
    font-size: 32px;
  `}

  > .ityped-cursor {
    color: #E2A480;
    animation: blink 1100ms linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Paragraph = styled.p`
  font-family: 'Apercu Medium', sans-serif;
  font-size: 15px;

  ${Above.sm`
    font-size: 18px;
  `}
`;
