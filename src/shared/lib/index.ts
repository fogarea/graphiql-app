export const copyToClipBoard = (text: string) => {
  void navigator.clipboard.writeText(text);
};
