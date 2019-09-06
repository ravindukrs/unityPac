import { H3 } from "native-base";

const colors = {
    accent: "#F72B2B",
  primary: "#D61B1F",
  secondary: "#3A3232",
  tertiary: "#ED6004",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#D9D2D2",
  gray2: "#F6F5F5",
};

const sizes = {
    //Global Sizes
    base: 12,
    font: 12,
    border: 12,

    //Font Sizes
    h1: 32,
    h2:26,
    H3:18,
    body:12,
    title:16,
    caption:12,
    small:8,
};

const fonts = {
    h1: {
        fontFamily: "Montserrat-Bold",
        fontSize: sizes.h1,
    },
    h2:{
        fontFamily: "Montserrat-Bold",
        fontSize: sizes.h2,
    },
    H3:{
        fontFamily: "Montserrat-Bold",
        fontSize: sizes.h3,
    },
    body:{
        fontFamily: "Montserrat-Bold",
        fontSize: sizes.body,
    },
    title:{
        fontSize: sizes.title,
    },
    caption:{
        fontSize: sizes.caption,
    },
    small: {
        fontSize: sizes.small,
    },
}

export {colors, sizes, fonts};