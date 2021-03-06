import AdaptiveLabelPositioningBehavior from './AdaptiveLabelPositioningBehavior';
import AppendBehavior from './AppendBehavior';
import BoundaryEventBehavior from './BoundaryEventBehavior';
import CopyPasteBehavior from './CopyPasteBehavior';
import CreateBoundaryEventBehavior from './CreateBoundaryEventBehavior';
import CreateDataObjectBehavior from './CreateDataObjectBehavior';
import CreateParticipantBehavior from './CreateParticipantBehavior';
import DataInputAssociationBehavior from './DataInputAssociationBehavior';
import DataStoreBehavior from './DataStoreBehavior';
import DeleteLaneBehavior from './DeleteLaneBehavior';
import DropOnFlowBehavior from './DropOnFlowBehavior';
import EventBasedGatewayBehavior from './EventBasedGatewayBehavior';
import GroupBehavior from './GroupBehavior';
import ImportDockingFix from './ImportDockingFix';
import IsHorizontalFix from './IsHorizontalFix';
import LabelBehavior from './LabelBehavior';
import ModelingFeedback from './ModelingFeedback';
import ReplaceConnectionBehavior from './ReplaceConnectionBehavior';
import RemoveParticipantBehavior from './RemoveParticipantBehavior';
import ReplaceElementBehaviour from './ReplaceElementBehaviour';
import ResizeLaneBehavior from './ResizeLaneBehavior';
import RemoveElementBehavior from './RemoveElementBehavior';
import SubProcessBehavior from './SubProcessBehavior';
import ToggleElementCollapseBehaviour from './ToggleElementCollapseBehaviour';
import UnclaimIdBehavior from './UnclaimIdBehavior';
import UpdateFlowNodeRefsBehavior from './UpdateFlowNodeRefsBehavior';
import UnsetDefaultFlowBehavior from './UnsetDefaultFlowBehavior';

export default {
  __init__: [
    'adaptiveLabelPositioningBehavior',
    'appendBehavior',
    'boundaryEventBehavior',
    'copyPasteBehavior',
    'createBoundaryEventBehavior',
    'createDataObjectBehavior',
    'dataStoreBehavior',
    'createParticipantBehavior',
    'dataInputAssociationBehavior',
    'deleteLaneBehavior',
    'dropOnFlowBehavior',
    'eventBasedGatewayBehavior',
    'groupBehavior',
    'importDockingFix',
    'isHorizontalFix',
    'labelBehavior',
    'modelingFeedback',
    'removeElementBehavior',
    'removeParticipantBehavior',
    'replaceConnectionBehavior',
    'replaceElementBehaviour',
    'resizeLaneBehavior',
    'toggleElementCollapseBehaviour',
    'subProcessBehavior',
    'unclaimIdBehavior',
    'unsetDefaultFlowBehavior',
    'updateFlowNodeRefsBehavior'
  ],
  adaptiveLabelPositioningBehavior: [ 'type', AdaptiveLabelPositioningBehavior ],
  appendBehavior: [ 'type', AppendBehavior ],
  boundaryEventBehavior: [ 'type', BoundaryEventBehavior ],
  copyPasteBehavior: [ 'type', CopyPasteBehavior ],
  createBoundaryEventBehavior: [ 'type', CreateBoundaryEventBehavior ],
  createDataObjectBehavior: [ 'type', CreateDataObjectBehavior ],
  createParticipantBehavior: [ 'type', CreateParticipantBehavior ],
  dataInputAssociationBehavior: [ 'type', DataInputAssociationBehavior ],
  dataStoreBehavior: [ 'type', DataStoreBehavior ],
  deleteLaneBehavior: [ 'type', DeleteLaneBehavior ],
  dropOnFlowBehavior: [ 'type', DropOnFlowBehavior ],
  eventBasedGatewayBehavior: [ 'type', EventBasedGatewayBehavior ],
  groupBehavior: [ 'type', GroupBehavior ],
  importDockingFix: [ 'type', ImportDockingFix ],
  isHorizontalFix: [ 'type', IsHorizontalFix ],
  labelBehavior: [ 'type', LabelBehavior ],
  modelingFeedback: [ 'type', ModelingFeedback ],
  replaceConnectionBehavior: [ 'type', ReplaceConnectionBehavior ],
  removeParticipantBehavior: [ 'type', RemoveParticipantBehavior ],
  replaceElementBehaviour: [ 'type', ReplaceElementBehaviour ],
  resizeLaneBehavior: [ 'type', ResizeLaneBehavior ],
  removeElementBehavior: [ 'type', RemoveElementBehavior ],
  toggleElementCollapseBehaviour : [ 'type', ToggleElementCollapseBehaviour ],
  subProcessBehavior: [ 'type', SubProcessBehavior ],
  unclaimIdBehavior: [ 'type', UnclaimIdBehavior ],
  updateFlowNodeRefsBehavior: [ 'type', UpdateFlowNodeRefsBehavior ],
  unsetDefaultFlowBehavior: [ 'type', UnsetDefaultFlowBehavior ]
};
