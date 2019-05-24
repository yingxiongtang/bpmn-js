import {
  bootstrapModeler,
  inject
} from 'test/TestHelper';

import coreModule from 'lib/core';
import createModule from 'diagram-js/lib/features/create';
import draggingModule from 'diagram-js/lib/features/create';
import modelingModule from 'lib/features/modeling';
import replaceModule from 'lib/features/replace';
import copyPasteModule from 'lib/features/copy-paste';

import { is } from 'lib/util/ModelUtil';
import { createCanvasEvent as canvasEvent } from 'test/util/MockEvents';

describe('features/modeling/behavior - subprocess start event', function() {

  var diagramXML = require('./SubProcessBehavior.start-event.bpmn');

  beforeEach(bootstrapModeler(diagramXML, {
    modules: [
      coreModule,
      createModule,
      draggingModule,
      modelingModule,
      replaceModule,
      copyPasteModule
    ]
  }));


  describe('create', function() {

    it('should contain start event child', inject(
      function(elementFactory, create, dragging) {

        // given
        var subProcess = elementFactory.createShape({
          type: 'bpmn:SubProcess',
          isExpanded: true
        });

        // when
        create.start(canvasEvent({ x: 0, y: 0 }), subProcess);

        dragging.move(canvasEvent({ x: 600, y: 150 }));

        // TODO: The argument here needs to be a mouse event
        // in order to create the shape on the canvas. This
        // currently does not work.
        dragging.end(canvasEvent({ x: 600, y: 150 }));

        // then

        // TODO: Grab newly created expanded subprocess
        // TODO: expect it contains a start event

        // Explicit fail so this does not go unnoticed.
        expect(true).to.be.false;
      }
    ));

  });


  describe('replace', function() {

    describe('task -> expanded subprocess', function() {

      it('should add start event child to subprocess', inject(
        function(elementRegistry, bpmnReplace) {

          // given
          var task = elementRegistry.get('Task_1'),
              expandedSubProcess,
              startEvents;

          // when
          expandedSubProcess = bpmnReplace.replaceElement(task, {
            type: 'bpmn:SubProcess',
            isExpanded: true
          });

          // then
          startEvents = getChildStartEvents(expandedSubProcess);

          expect(startEvents).to.have.length(1);
        }
      ));

    });


    describe('task -> collapsed subprocess', function() {

      it('should NOT add start event child to subprocess', inject(
        function(elementRegistry, bpmnReplace) {

          // given
          var task = elementRegistry.get('Task_1'),
              collapsedSubProcess,
              startEvents;

          // when
          collapsedSubProcess = bpmnReplace.replaceElement(task, {
            type: 'bpmn:SubProcess',
            isExpanded: false
          });

          // then
          startEvents = getChildStartEvents(collapsedSubProcess);

          expect(startEvents).to.have.length(0);
        }
      ));

    });


    describe('expanded subprocess -> transaction', function() {

      it('should NOT add start event child to transaction', inject(
        function(elementRegistry, bpmnReplace) {

          // given
          var subProcess = elementRegistry.get('SubProcess_1'),
              transaction,
              startEvents;

          // when
          transaction = bpmnReplace.replaceElement(subProcess, {
            type: 'bpmn:Transaction'
          });

          // then
          startEvents = getChildStartEvents(transaction);

          expect(startEvents).to.have.length(0);
        }
      ));

    });


    describe('transaction -> expanded subprocess', function() {

      it('should NOT add start event child to transaction', inject(
        function(elementRegistry, bpmnReplace) {

          // given
          var transaction = elementRegistry.get('Transaction_1'),
              subProcess,
              startEvents;

          // when
          subProcess = bpmnReplace.replaceElement(transaction, {
            type: 'bpmn:SubProcess',
            isExpanded: true
          });

          // then
          startEvents = getChildStartEvents(subProcess);

          expect(startEvents).to.have.length(0);
        }
      ));

    });


    describe('expanded subprocess -> ad-hoc subprocess', function() {

      it('should NOT add start event child to ad-hoc subprocess', inject(
        function(elementRegistry, bpmnReplace) {

          // given
          var subProcess = elementRegistry.get('SubProcess_1'),
              adHocSubProcess,
              startEvents;

          // when
          adHocSubProcess = bpmnReplace.replaceElement(subProcess, {
            type: 'bpmn:AdHocSubProcess'
          });

          // then
          startEvents = getChildStartEvents(adHocSubProcess);

          expect(startEvents).to.have.length(0);
        }
      ));

    });

  });


  describe('paste', function() {

    describe('expanded subprocess', function() {

      it('should NOT add start event child', inject(
        function(elementRegistry, copyPaste, canvas) {

          // given
          var subProcess = elementRegistry.get('SubProcess_1'),
              rootElement = canvas.getRootElement(),
              pastedSubProcess,
              startEvents;

          // when
          copyPaste.copy(subProcess);

          copyPaste.paste({
            element: rootElement,
            point: {
              x: 300,
              y: 600
            }
          });

          // then
          pastedSubProcess = elementRegistry.getAll()
            .filter(isSubProcess)
            .filter(function(subProcess) {
              return !(subProcess.id === 'SubProcess_1');
            })
            .shift();

          startEvents = getChildStartEvents(pastedSubProcess);

          expect(startEvents).to.have.length(0);
        }
      ));

    });

  });

});

// helpers //////////

function isSubProcess(element) {
  return is(element, 'bpmn:SubProcess');
}

function isStartEvent(element) {
  return is(element, 'bpmn:StartEvent');
}

function getChildStartEvents(element) {
  return element.children.filter(isStartEvent);
}