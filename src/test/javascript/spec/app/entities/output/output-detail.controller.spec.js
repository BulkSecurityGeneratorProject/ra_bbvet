'use strict';

describe('Controller Tests', function() {

    describe('Output Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockOutput, MockKegiatan;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockOutput = jasmine.createSpy('MockOutput');
            MockKegiatan = jasmine.createSpy('MockKegiatan');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Output': MockOutput,
                'Kegiatan': MockKegiatan
            };
            createController = function() {
                $injector.get('$controller')("OutputDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'raBbvetApp:outputUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
