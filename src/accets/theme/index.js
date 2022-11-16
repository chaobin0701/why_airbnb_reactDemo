const theme = {
  primaryColor: "#ff385c",
  secondarColor: "#00848A",
  textColor: "#484848",
  textColor1: "#767676",
  textColorSecondary: "#222",
  borderColor:"rgb(235, 235, 235)",
  mixin: {
    boxShadow: `
        transition: box-shadow 0.2s ease;
      &:hover{
          box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }`,
    content: ` max-width: 1080px;
      padding: 0 24px;
      margin: 0 auto;
      position: relative;`,
  },
};
export default theme;
