import { MicroTheme, StateMicroTheme } from "../utils/types";

const themes: Array<MicroTheme> = [
  {
    default: {
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-900"
    },
    hover: {
      bgColor: "hover:bg-yellow-300",
      textColor: "hover:text-yellow-900",
      borderColor: "hover:border-yellow-900"
    },
    active: {
      bgColor: "active:bg-yellow-400",
      textColor: "active:text-yellow-900",
      borderColor: "active:border-yellow-900"
    }
  },
  {
    default: {
      bgColor: "bg-blue-200",
      textColor: "text-blue-900",
      borderColor: "border-blue-900"
    },
    hover: {
      bgColor: "hover:bg-blue-300",
      textColor: "hover:text-blue-900",
      borderColor: "hover:border-blue-900"
    },
    active: {
      bgColor: "active:bg-blue-400",
      textColor: "active:text-blue-900",
      borderColor: "active:border-blue-900"
    }
  },
  {
    default: {
      bgColor: "bg-green-200",
      textColor: "text-green-900",
      borderColor: "border-green-900"
    },
    hover: {
      bgColor: "hover:bg-green-300",
      textColor: "hover:text-green-900",
      borderColor: "hover:border-green-900"
    },
    active: {
      bgColor: "active:bg-green-400",
      textColor: "active:text-green-900",
      borderColor: "active:border-green-900"
    }
  }
];

type Options = {
  states?: Array<keyof MicroTheme>;
  colors?: Array<keyof StateMicroTheme>;
};

const theme = (
  index: number,
  {
    states = ["default", "hover", "active"],
    colors = ["bgColor", "textColor", "borderColor"]
  }: Options = {}
) => states.flatMap(state => colors.map(color => themes[index][state][color]));

export default theme;
