(angular => {
    angular.module('fe')
        .service('projectService', function($http) {
            'ngInject';
            return {
                manageList(params) {
                    return $http.post('/projects/project-list', params)
                        .then(resp => {
                            let body = {};
                            if (resp != null && resp.data != null) {
                                body = resp.data;
                            }
                            return body;
                        });
                }
            };
        });
})(angular);
