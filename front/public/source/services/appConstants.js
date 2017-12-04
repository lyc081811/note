(angular => {
    angular.module('fe')
        /**
         * 默认的每页显示数据条数
         *
         * @type {Number}
         */
        .constant('DEFAULT_PAGESIZE', 30)
        /**
         * uibootstrap 日期选择组件公共配置
         */
        .constant('DATEPICKER_CONFIG', {
            startingDay: 1,
            showWeeks: false,
            formatMonth: 'MM',
            formatYear: 'yyyy',
            formatDayHeader: 'EEE',
            formatDayTitle: 'yyyy-MM',
            minDate: new Date(2016, 1, 1)
        })
        /**
         * 常用selectize配置
         */
        .constant('SELECTIZE_CONFIGS', {

        })
        /**
         * 图表默认使用的日期格式化字符串
         */
        .constant('CHART_DATE_FORMAT', 'YYYY/MM/DD')
        /**
         * 按钮颜色
         *
         * @type {Object}
         * @prop {String} BUTTON_COLORS.Danger 危险按钮颜色
         */
        .constant('BUTTON_COLORS', {
            Danger: '#ec4758'
        })
        .run(($rootScope, DEFAULT_PAGESIZE) => {
            'ngInject';

            $rootScope.DEFAULT_PAGESIZE = DEFAULT_PAGESIZE;
        });
})(angular);
