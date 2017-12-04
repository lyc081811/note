(angular => {
    angular.module('fe')
        .controller('ProjectListController', function ($scope, toastrService, projectService) {
            'ngInject';
            $scope.isLoading = false;

            $scope.params = {
                activeFlag: '0',
                pageNo: 1,
                pageSize: 10
            };

            $scope.projectList = [];
            $scope.totalItems = 0;

            this.$onInit = () => {
                $scope.beforeQuery();
            };

            $scope.beforeQuery = () => {
                $scope.params.pageNo = 1;

                $scope.query();
            };

            $scope.query = () => {
                const { params, isLoading } = $scope;
                if (isLoading) {
                    return;
                }
                $scope.isLoading = true;
                projectService.manageList(params)
                    .then(data => {
                        const { result, error } = data;
                        if (error != null) {
                            toastrService.error(error);
                            $scope.projectList = [];
                            $scope.totalItems = 0;
                        }
                        if (result != null) {
                            const { count, projectInfos } = result;
                            $scope.projectList = projectInfos;
                            $scope.totalItems = count;
                        }

                        $scope.isLoading = false;
                    });
            };
        })
})(angular);
