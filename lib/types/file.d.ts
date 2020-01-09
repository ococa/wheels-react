// 用於typescript識別文件
declare module '*.svg' {
  const content: any;
  export default content;
}
// 用於typescript識別文件
declare module '*.png' {
  const content: string;
  export default content;
}
