(angular => {
    angular.module('fe')
        .service('chartService', (_) => {
            'ngInject';

            return {
                percentTooltip(value) {
                    let content = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${value.color}"></span>${value.seriesName} : `;
                    if (value.value != null) {
                        content += `${value.value}%<br>`;
                    }
                    else {
                        content += '无数据<br>'
                    }
                    return content;
                },
                /**
                 * 获取开始时间和结束时间中间的每一天
                 *
                 * @param {Object} options
                 * @param {Date} options.startTime
                 * @param {Date} options.endTime
                 * @return {Array} 开始时间和结束时间之间的每一天的moment对象
                 */
                generateXAxis({ startTime, endTime }) {
                    if (startTime == null || endTime == null) {
                        return [];
                    }
                    let xAxis = [];
                    // 生成选中的开始时间到结束时间的日期
                    for (let i = moment(startTime); i < moment(endTime); i = moment(i).add(1, 'days')) {
                        xAxis.push(i);
                    }
                    return xAxis;
                },
                /**
                 * 根据日期补全数据
                 *
                 * @param {Object} options
                 * @param {Array} options.data 图表原始数据
                 * @param {Array} options.brandIds 选中的品牌Id
                 * @param {Array} options.brands 选中的品牌对象，用来获取品牌名称
                 * @param {string} options.idField 图表数据中品牌Id字段，默认id
                 * @param {string} options.brandIdField 品牌对象中品牌Id字段，默认id
                 * @param {string} options.nameField 品牌名称字段，默认name
                 * @param {string} options.dateField 图表数据中抓取日期字段，默认crawlDate
                 * @param {string} options.dataField 图表数据字段
                 * @param {Array} options.xaxis 捞取数据的时间列表
                 * @param {boolean} options.isPercent 取出的数据是否需要×100，默认true
                 *
                 * @return {Array} series
                 *
                 * 2016年7月14日晚间著
                 */
                fillCharts({
                    data,
                    brandIds,
                    brands,
                    idField = 'id',
                    brandIdField = 'id',
                    nameField = 'name',
                    dateField = 'crawlDate',
                    dataField,
                    xaxis,
                    isPercent = true
                }) {
                    // parsed就是按照日期排序的，每个元素是品牌Id和当天数据作为key/value的数组
                    let parsed = xaxis.map(item => {
                        // 取出接口中当天的数据
                        let todayChartData = data.filter(chartDataItem => item.isSame(moment(chartDataItem[dateField]), 'day'));
                        // 转换后的数据对象
                        let parsedChartData = {};
                        // 遍历品牌
                        brandIds.map(brandId => {
                            // 找出每个品牌当天的数据
                            let brandData = todayChartData.find(todayChartDataItem => todayChartDataItem[idField] === brandId);
                            if (brandData == null) {
                                parsedChartData[brandId] = null;
                            }
                            else {
                                let val = brandData[dataField];
                                if (isPercent && Number.isNaN(val) === false) {
                                    val = Number.parseFloat((val * 100).toFixed(2));
                                }
                                parsedChartData[brandId] = val;
                            }
                        })

                        return parsedChartData;
                    });
                    return brandIds.map(brandId => {
                        let brand = brands.find(brand => brand[brandIdField] === brandId);
                        let id = null;
                        let name = null;
                        if (brand == null) {
                            id = '';
                            name = '';
                        }
                        else {
                            id = brand[brandIdField];
                            name = brand[nameField];
                        }
                        return {
                            type: 'line',
                            connectNulls: true,
                            id: id,
                            name: name,
                            data: parsed.map(item => item[brandId])
                        };
                    });
                },

                fillMediaCharts({
                    data,
                    xaxis,
                    dateField = 'crawlDate',
                    idField = 'media',
                    isPercent = false,
                    dataField
                }) {
                    let mediaNames = _.uniq(data.map(item => item[idField]));

                    // parsed就是按照日期排序的，每个元素是品牌Id和当天数据作为key/value的数组
                    let parsed = xaxis.map(item => {
                        // 取出接口中当天的数据
                        let todayChartData = data.filter(chartDataItem => item.isSame(moment(chartDataItem[dateField]), 'day'));
                        // 转换后的数据对象
                        let parsedChartData = {};
                        // 遍历品牌
                        mediaNames.map(mediaName => {
                            // 找出每个品牌当天的数据
                            let brandData = todayChartData.find(todayChartDataItem => todayChartDataItem[idField] === mediaName);
                            if (brandData == null) {
                                parsedChartData[mediaName] = null;
                            }
                            else {
                                let val = brandData[dataField];
                                if (isPercent && Number.isNaN(val) === false) {
                                    val = Number.parseFloat((val * 100).toFixed(2));
                                }
                                parsedChartData[mediaName] = val;
                            }
                        })

                        return parsedChartData;
                    });
                    return mediaNames.map(mediaName => {
                        return {
                            type: 'line',
                            connectNulls: true,
                            name: mediaName,
                            data: parsed.map(item => item[mediaName])
                        };
                    });
                }
            };
        });
})(angular);
