export default async () => {
  // figma.closePlugin('settings!');
  figma.showUI(__html__);
  figma.ui.onmessage = () => {
    figma.closePlugin('done');
  }
}