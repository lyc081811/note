(angular => {
    const DataEmptyCtrl = function ($scope) {
        'ngInject';
        this.$onInit = () => {
            const { title, subtitle, size } = $scope;

            if (title == null || title === '') {
                $scope.title = '暂无数据';
            }

            if (subtitle == null || subtitle === '') {
                $scope.subtitle = '搜索结果为空，请修改搜索条件';
            }

            if (angular.isUndefined(size)) {
                $scope.size = 'normal';
            }
        };
    };

    angular.module('fe')
        .directive('listEmpty', () => {
            'ngInject';
            return {
                templateUrl: 'data-empty.html',
                controller: DataEmptyCtrl,
                scope: {
                    list: '=',
                    isLoading: '=?',
                    title: '@?',
                    subtitle: '@?',
                    size: '@?'
                }
            }
        });
})(angular);
