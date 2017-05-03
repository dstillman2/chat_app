// @flow

// Define action format
type Action = {
  type: string,
  nodeId: number,
};

/**
 * Action creator
 * Change the node ID
 */
function setNode(nodeId: number): Action {
  return {
    type: 'SET_NODE',
    nodeId,
  };
}

export default setNode;
