// breakpoints
const size = {
  xs: '320px',
  sm: '480px',
  md: '666px',
  lg: '1100px',
};

const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};

// typography
const fontWeight = {
  thin: '300',
  semiBold: '600',
  extraBold: '800',
};

export default { size, device, fontWeight };
