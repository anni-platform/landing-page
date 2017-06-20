import React from "react";
import PropTypes from "prop-types";

export const Icon = props => {
  const { name, size } = props;
  let pathArray;
  let polylinePoints;
  let transform;

  // Extract svg paths per icon into an array and provide a unique name
  switch (name) {

    case "arrow-back":
      pathArray = [
        "M14.3479659,20 L28.8934222,4.76190299 L23.1065778,-0.761902987 L-0.529784118,24 L23.1065778,48.761903 L28.8934222,43.238097 L14.3479659,28 L48,28 L48,20 L14.3479659,20 Z"
      ];
      break;

    case "logo":
      pathArray = [
        "M4.84502033,26.511738 C4.62705793,26.511738 4.45,26.3231855 4.45,26.091073 L4.45,19.020665 C4.45,18.7885525 4.62705793,18.6 4.84502033,18.6 L6.35497967,18.6 C6.57294207,18.6 6.75,18.7885525 6.75,19.020665 L6.75,26.091073 C6.75,26.3231855 6.57294207,26.511738 6.35497967,26.511738 L4.84502033,26.511738 Z M43.1549797,26.511738 L41.6450203,26.511738 C41.4270579,26.511738 41.25,26.3238078 41.25,26.091073 L41.25,19.020665 C41.25,18.7885525 41.4270579,18.6 41.6450203,18.6 L43.1549797,18.6 C43.3729421,18.6 43.55,18.7885525 43.55,19.020665 L43.55,26.091073 C43.55,26.3238078 43.3729421,26.511738 43.1549797,26.511738 Z",
        "M23.9997506,34.125 C14.506386,34.125 6.75,29.5566204 6.75,28.8869346 L6.75,15.2137232 C6.75,14.5433796 7.30888821,14 7.99919984,14 L40.0008002,14 C40.6911118,14 41.25,14.5433796 41.25,15.2137232 L41.25,28.8869346 C41.25,29.5566204 33.4931152,34.125 23.9997506,34.125 Z",
        "M12.7875,23.775 C12.3111544,23.775 11.925,23.3888456 11.925,22.9125 C11.925,22.4361544 12.3111544,22.05 12.7875,22.05 C13.2638456,22.05 13.65,22.4361544 13.65,22.9125 C13.65,23.3888456 13.2638456,23.775 12.7875,23.775 Z M35.2125,23.775 C34.7361544,23.775 34.35,23.3888456 34.35,22.9125 C34.35,22.4361544 34.7361544,22.05 35.2125,22.05 C35.6888456,22.05 36.075,22.4361544 36.075,22.9125 C36.075,23.3888456 35.6888456,23.775 35.2125,23.775 Z",
        "M4.45,21.292 L5.3,22.142 C5.3,22.611442 4.91944204,22.992 4.45,22.992 L1,22.992 C0.530557963,22.992 0.15,22.611442 0.15,22.142 C0.15,21.672558 0.530557963,21.292 1,21.292 L4.45,21.292 Z M43.55,22.992 L42.7,22.142 C42.7,21.672558 43.080558,21.292 43.55,21.292 L47,21.292 C47.469442,21.292 47.85,21.672558 47.85,22.142 C47.85,22.611442 47.469442,22.992 47,22.992 L43.55,22.992 Z"
      ];
      break;

    default:
      break;
  }

  // Map the paths of the selected svg into a readable SVG path element
  const paths = pathArray &&
    pathArray.map((path, index) => {
      return (
        <path d={path} key={`${path.length}-${index}`} transform={transform} />
      );
    });

  const polyline = polylinePoints &&
    polylinePoints.map(path => {
      return <polyline points={path} key={path.length} />;
    });

  // Turn names into readable titles
  const iconTitle = `${name.replace(/-/g, " ")} icon`;

  // Return the mapped path elements into a <svg /> element
  return (
    <svg
      viewBox="0 0 48 48"
      id={name}
      className={`Icon ${name}`}
      width={size}
      height={size}
      {...props}
    >
      <title>{iconTitle}</title>
      {paths}
      {polyline}
    </svg>
  );
};

// Define Icon Prop Types
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number
};

Icon.defaultProps = {
  name: "",
  size: 48
};
