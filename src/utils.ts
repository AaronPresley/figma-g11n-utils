export const gatherTextNodes = (
  parentNode:SceneNode | ReadonlyArray<SceneNode>
):TextNode[] => {
  const matchingNodes:TextNode[] = [];
  
  if (Array.isArray(parentNode)) {
    parentNode.forEach(n => gatherTextNodes(n).forEach(m => matchingNodes.push(m)));
  }
  
  const thisNode = parentNode as SceneNode;

  // This node has children
  if ((thisNode as any).children) {
    (thisNode as any).children.forEach(n => gatherTextNodes(n).forEach(m => matchingNodes.push(m)));
  }

  else if (thisNode.type === 'TEXT') {
    matchingNodes.push(thisNode);
  }

  return matchingNodes;
}
