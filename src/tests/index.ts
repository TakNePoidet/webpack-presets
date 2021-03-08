export const javasctriptTest = (jsx = false): RegExp => jsx ? /\.jsx?$/ : /\.js$/;
export const typsctriptTest = (jsx = false): RegExp => jsx ? /\.tsx?$/ : /\.ts$/;
export const imageTest = (): RegExp => /\.(png|jpg|svg|gif)$/;
export const fontTest = (): RegExp => /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/;
export const cssTest = (): RegExp => /\.css$/;
export const sassTest = (): RegExp => /\.s(c|a)ss$/;
export const svgInlineTest = (): RegExp => /\.(inline.svg)?$/;
export const vueTest = (): RegExp => /\.vue$/;