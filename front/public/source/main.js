((_) => {
    angular.module('fe', [
        'ngAnimate',
        'ngTouch',
        'ngMessages',
        'ngComponentRouter',
        'wapweb.componentRouterActive',
        'ui.bootstrap',
        'toastr',
        'angularMoment',
        '85ido',
        'ui.router',
        'ng-echarts',
        'selectize',
        'oitozero.ngSweetAlert',
    ])
    .config(($httpProvider, toastrConfig, sweetAlertProvider) => {
        'ngInject';

        $httpProvider.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest'
        };

        sweetAlertProvider.setDefaults({
            confirmButtonColor: '#18a689',
            cancelButtonText: '取消',
            confirmButtonText: '好'
        });

        angular.extend(toastrConfig, {
            positionClass: 'toast-top-center',
            preventOpenDuplicates: true
        });
    })
    .factory('_', () => _);
})(_);
