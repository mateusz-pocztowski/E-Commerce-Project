export const defaultStyle = {
  control: styles => ({
    ...styles,
    boxShadow: 'none',
  }),
  menu: styles => ({
    ...styles,
    zIndex: '600',
  }),
};

export const errorStyle = {
  control: styles => ({
    ...styles,
    boxShadow: 'none',
    borderColor: 'rgb(255, 0, 51)',
    '&:hover': {
      borderColor: 'rgb(255, 0, 51)',
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgb(255, 143, 143)',
  }),
};
