(angular => {
    angular.module('fe')
        .controller('UserLoginCtrl', ($scope, $http, $window, urlParameter) => {
            'ngInject';

            const { location } = $window;

            let redirectUrl = urlParameter('redirectUrl');
            if (redirectUrl == null) {
                redirectUrl = '/project/';
            }
            else {
                redirectUrl = decodeURIComponent(redirectUrl);
            }

            $scope.isLoading = false;
            $scope.error = null;

            $scope.user = {
                username: '',
                password: '',
                rememberMe: true
            };

            $scope.login = () => {
                const { user, userLoginForm, isLoading } = $scope;
                if (userLoginForm.$invalid || isLoading) {
                    return;
                }

                $scope.error = null;
                $scope.isLoading = true;
                $http.post('/user/login', user)
                    .then(({ data }) => {
                        $scope.isLoading = false;
                        if (data != null) {
                            const { result, jump, error } = data;
                            if (error != null) {
                                $scope.error = error;
                                return;
                            }
                            if (result) {
                                if (jump != null) {
                                    location.href = `${jump}transit`;
                                    return;
                                }
                                location.href = redirectUrl;
                            }
                        }
                    });
            };
        });
})(angular);
