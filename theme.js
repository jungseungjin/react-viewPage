const deviceSizes = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
};
const device = {
  mobile: `screen and (max-width: ${deviceSizes.tablet})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})  and (max-width: ${deviceSizes.desktop})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop}) `,
};

const theme = {
  device,
};

export default theme;
