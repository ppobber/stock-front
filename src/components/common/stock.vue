<template>
    <div class="stock">
        <div id="chart"></div>
        <div id="stock-bar">
            <div class="choose">
                类别：
<!--                <label>-->
<!--                    <input class="user-input" v-model="stock_type" @keypress.enter="search_type"/>-->
<!--                </label>-->
                <select class="user-select" v-model="stock_type">
                    <option class="user-option" value="as" selected="selected">沪深A股</option>
                    <option class="user-option" value="zs">系列指数</option>
                    <option class="user-option" value="bk">板块指数</option>
                </select>
            </div>
            <div class="choose">
                股票：
                <!--        股票：&emsp;&emsp;-->
                <label>
                    <input class="user-input" v-model="stock_name" @keypress.enter="search_name"/>
                </label>
            </div>
            <div class="choose">
                代码：&nbsp;
                <label>
                    <input class="user-input" v-model="stock_id" @keypress.enter="search_id"/>
                </label>
            </div>
            <div id="between-stock-date"></div>
            <div class="choose">
                开始日期：
                <!--        <span class="change-char">{{ start_date }}</span>-->
                <label>
                    <input id="start-date-input" class="user-input" v-model="start_date"
                           @keypress.enter="search_start_date"/>
                </label>
            </div>
            <div class="choose">
                结束日期：
                <!--        <span class="change-char">{{ end_date }}</span>-->
                <label>
                    <input id="end-date-input" class="user-input" v-model="end_date" @keypress.enter="search_end_date"/>
                </label>
            </div>
            <div id="between-date-heap"></div>
            <div class="choose">
                <button id="button-show-heap" class="user-button" v-model="if_show_pic" @click="show_pic" v-on:mouseenter="change_color" v-on:mouseleave="return_color">
                    日期叠加图
                </button>
            </div>
            <!--      <div class="choose">
                    显示堆图
                  </div>-->
        </div>
    </div>
</template>

<script>

export default {
    name: "stock",
    data() {
        return {
            data0: {
                categoryData:
                    ["2013-01-24", "2013-01-25", "2013-01-28", "2013-01-29", "2013-01-30", "2013-01-31", "2013-02-01", "2013-02-04", "2013-02-05", "2013-02-06", "2013-02-07", "2013-02-08", "2013-02-18", "2013-02-19", "2013-02-20", "2013-02-21", "2013-02-22", "2013-02-25", "2013-02-26", "2013-02-27", "2013-02-28", "2013-03-01", "2013-03-04", "2013-03-05", "2013-03-06", "2013-03-07", "2013-03-08", "2013-03-11", "2013-03-12", "2013-03-13", "2013-03-14", "2013-03-15", "2013-03-18", "2013-03-19", "2013-03-20", "2013-03-21", "2013-03-22", "2013-03-25", "2013-03-26", "2013-03-27", "2013-03-28", "2013-03-29", "2013-04-01", "2013-04-02", "2013-04-03", "2013-04-08", "2013-04-09", "2013-04-10", "2013-04-11", "2013-04-12", "2013-04-15", "2013-04-16", "2013-04-17", "2013-04-18", "2013-04-19", "2013-04-22", "2013-04-23", "2013-04-24", "2013-04-25", "2013-04-26", "2013-05-02", "2013-05-03", "2013-05-06", "2013-05-07", "2013-05-08", "2013-05-09", "2013-05-10", "2013-05-13", "2013-05-14", "2013-05-15", "2013-05-16", "2013-05-17", "2013-05-20", "2013-05-21", "2013-05-22", "2013-05-23", "2013-05-24", "2013-05-27", "2013-05-28", "2013-05-29", "2013-05-30", "2013-05-31", "2013-06-03", "2013-06-04", "2013-06-05", "2013-06-06", "2013-06-07", "2013-06-13"],                values: [ // 开盘， 收盘， 最低， 最高
                    [2320.26, 2320.26, 2287.3, 2362.94], [2300, 2291.3, 2288.26, 2308.38], [2295.35, 2346.5, 2295.35, 2346.92], [2347.22, 2358.98, 2337.35, 2363.8], [2360.75, 2382.48, 2347.89, 2383.76], [2383.43, 2385.42, 2371.23, 2391.82], [2377.41, 2419.02, 2369.57, 2421.15], [2425.92, 2428.15, 2417.58, 2440.38], [2411, 2433.13, 2403.3, 2437.42], [2432.68, 2434.48, 2427.7, 2441.73], [2430.69, 2418.53, 2394.22, 2433.89], [2416.62, 2432.4, 2414.4, 2443.03], [2441.91, 2421.56, 2415.43, 2444.8], [2420.26, 2382.91, 2373.53, 2427.07], [2383.49, 2397.18, 2370.61, 2397.94], [2378.82, 2325.95, 2309.17, 2378.82], [2322.94, 2314.16, 2308.76, 2330.88], [2320.62, 2325.82, 2315.01, 2338.78], [2313.74, 2293.34, 2289.89, 2340.71], [2297.77, 2313.22, 2292.03, 2324.63], [2322.32, 2365.59, 2308.92, 2366.16], [2364.54, 2359.51, 2330.86, 2369.65], [2332.08, 2273.4, 2259.25, 2333.54], [2274.81, 2326.31, 2270.1, 2328.14], [2333.61, 2347.18, 2321.6, 2351.44], [2340.44, 2324.29, 2304.27, 2352.02], [2326.42, 2318.61, 2314.59, 2333.67], [2314.68, 2310.59, 2296.58, 2320.96], [2309.16, 2286.6, 2264.83, 2333.29], [2282.17, 2263.97, 2253.25, 2286.33], [2255.77, 2270.28, 2253.31, 2276.22], [2269.31, 2278.4, 2250, 2312.08], [2267.29, 2240.02, 2239.21, 2276.05], [2244.26, 2257.43, 2232.02, 2261.31], [2257.74, 2317.37, 2257.42, 2317.86], [2318.21, 2324.24, 2311.6, 2330.81], [2321.4, 2328.28, 2314.97, 2332], [2334.74, 2326.72, 2319.91, 2344.89], [2318.58, 2297.67, 2281.12, 2319.99], [2299.38, 2301.26, 2289, 2323.48], [2273.55, 2236.3, 2232.91, 2273.55], [2238.49, 2236.62, 2228.81, 2246.87], [2229.46, 2234.4, 2227.31, 2243.95], [2234.9, 2227.74, 2220.44, 2253.42], [2232.69, 2225.29, 2217.25, 2241.34], [2196.24, 2211.59, 2180.67, 2212.59], [2215.47, 2225.77, 2215.47, 2234.73], [2224.93, 2226.13, 2212.56, 2233.04], [2236.98, 2219.55, 2217.26, 2242.48], [2218.09, 2206.78, 2204.44, 2226.26], [2199.91, 2181.94, 2177.39, 2204.99], [2169.63, 2194.85, 2165.78, 2196.43], [2195.03, 2193.8, 2178.47, 2197.51], [2181.82, 2197.6, 2175.44, 2206.03], [2201.12, 2244.64, 2200.58, 2250.11], [2236.4, 2242.17, 2232.26, 2245.12], [2242.62, 2184.54, 2182.81, 2242.62], [2187.35, 2218.32, 2184.11, 2226.12], [2213.19, 2199.31, 2191.85, 2224.63], [2203.89, 2177.91, 2173.86, 2210.58], [2170.78, 2174.12, 2161.14, 2179.65], [2179.05, 2205.5, 2179.05, 2222.81], [2212.5, 2231.17, 2212.5, 2236.07], [2227.86, 2235.57, 2219.44, 2240.26], [2242.39, 2246.3, 2235.42, 2255.21], [2246.96, 2232.97, 2221.38, 2247.86], [2228.82, 2246.83, 2225.81, 2247.67], [2247.68, 2241.92, 2231.36, 2250.85], [2238.9, 2217.01, 2205.87, 2239.93], [2217.09, 2224.8, 2213.58, 2225.19], [2221.34, 2251.81, 2210.77, 2252.87], [2249.81, 2282.87, 2248.41, 2288.09], [2286.33, 2299.99, 2281.9, 2309.39], [2297.11, 2305.11, 2290.12, 2305.3], [2303.75, 2302.4, 2292.43, 2314.18], [2293.81, 2275.67, 2274.1, 2304.95], [2281.45, 2288.53, 2270.25, 2292.59], [2286.66, 2293.08, 2283.94, 2301.7], [2293.4, 2321.32, 2281.47, 2322.1], [2323.54, 2324.02, 2321.17, 2334.33], [2316.25, 2317.75, 2310.49, 2325.72], [2320.74, 2300.59, 2299.37, 2325.53], [2300.21, 2299.25, 2294.11, 2313.43], [2297.1, 2272.42, 2264.76, 2297.1], [2270.71, 2270.93, 2260.87, 2276.86], [2264.43, 2242.11, 2240.07, 2266.69], [2242.26, 2210.9, 2205.07, 2250.63], [2190.1, 2148.35, 2126.22, 2190.1]
                ]
            },

            // dataHeap: undefined,
            stock_type: 'as',  // 指数，板块，A股
            stock_name: '上证指数',
            stock_id: '999999',
            start_date: '',
            end_date: '',
            if_show_pic: true,
        };
    },
    methods: {
        // splitData(rawData) {
        //   let categoryData = [];
        //   let values = []
        //   for (let i = 0; i < rawData.length; i++) {
        //     categoryData.push(rawData[i].splice(0, 1)[0]);
        //     values.push(rawData[i])
        //   }
        //   return {
        //     categoryData: categoryData,
        //     values: values
        //   };
        // },

        calculateMA(dayCount) {
            let result = [];
            for (let i = 0, len = this.data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                let sum = 0;
                for (let j = 0; j < dayCount; j++) {
                    sum += this.data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        },

        myEcharts() {

            let xAxisData = [];
            let data1 = [];
            for (let i = 0; i < 100; i++) {
                xAxisData.push(i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }

            window.myChart = this.$echarts.init(document.getElementById('chart'));

            // let data2 = this.splitData(this.data0)

            let option = {
                // title: {
                //   text: '上证指数',
                //   textStyle: { color: '#fff' }
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    },
                    formatter(params) {
                        // console.log(params);
                        let kline = params[0];
                        let conc = kline.name + "<br/>";
                        conc += "开盘价：" + kline.value[1] + "<br/>";
                        conc += "收盘价：" + kline.value[2] + "<br/>";
                        conc += "最高价：" + kline.value[3] + "<br/>";
                        conc += "最低价：" + kline.value[4];
                        return conc;
                    }
                },
                // axisPointer: {
                //   show: true,
                // },
                legend: {
                    // data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                    data: [],
                    inactiveColor: '#777',
                    textStyle: {color: '#fff'}
                },
                // grid: {
                //   left: '10%',
                //   right: '10%',
                //   bottom: '15%'
                // },
                grid: [{
                    left: 80,
                    right: 72,
                    top: 10,
                    bottom: 80
                }, {
                    left: 80,
                    right: 200,
                    top: 10,
                    bottom: 80
                }],
                // xAxis: {
                //   type: 'category',
                //   data: this.data0.categoryData,
                //   scale: true,
                //   boundaryGap: false,
                //   axisLine: { lineStyle: { color: '#8392A5' }, onZero: false },
                //   splitLine: {show: false},
                //   splitNumber: 20,
                //   min: 'dataMin',
                //   max: 'dataMax'
                // },
                // yAxis: {
                //   scale: true,
                //   axisLine: { lineStyle: { color: '#8392A5' } },
                //   splitArea: {
                //     show: true
                //   }
                // },
                xAxis: [{
                    type: 'category',
                    data: this.data0.categoryData,
                    axisLine: {lineStyle: {color: '#8392A5'}},
                    gridIndex: 0,
                }, {
                    gridIndex: 1,
                    splitLine: {show: false},
                    show: false,
                    offset: -30,
                }],
                yAxis: [{
                    scale: true,
                    // data: [],
                    axisLine: {lineStyle: {color: '#8392A5'}},
                    splitLine: {show: false},
                    gridIndex: 0,
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    // offset: 200,
                }],
                // dataZoom: [
                //   {
                //     type: 'inside',
                //     start: 50,
                //     end: 100
                //   },
                //   {
                //     show: true,
                //     type: 'slider',
                //     top: '90%',
                //     start: 50,
                //     end: 100
                //   }
                // ],
                dataZoom: [{
                    textStyle: {
                        color: '#8392A5'
                    },
                    // handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    // handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5'
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5'
                        }
                    },
                    // handleStyle: {
                    //   color: '#fff',
                    //   shadowBlur: 3,
                    //   shadowColor: 'rgba(0, 0, 0, 0.6)',
                    //   shadowOffsetX: 2,
                    //   shadowOffsetY: 2
                    // }
                }, {
                    type: 'inside',
                }],
                animation: false,
                series: [
                    {
                        // name: '日K',
                        type: 'candlestick',
                        data: this.data0.values,
                        itemStyle: {
                            color: '#FD1050',
                            color0: '#0CF49B',
                            borderColor: '#FD1050',
                            borderColor0: '#0CF49B'
                        },
                        // markPoint: {
                        //   label: {
                        //     normal: {
                        //       formatter: function (param) {
                        //         return param != null ? Math.round(param.value) : '';
                        //       }
                        //     }
                        //   },
                        //   data: [
                        //     {
                        //       name: 'XX标点',
                        //       coord: ['2013/5/31', 2300],
                        //       value: 2300,
                        //       itemStyle: {
                        //         color: 'rgb(41, 60, 85)'
                        //       }
                        //     },
                        //     {
                        //       name: 'highest value',
                        //       type: 'max',
                        //       valueDim: 'highest'
                        //     },
                        //     {
                        //       name: 'lowest value',
                        //       type: 'min',
                        //       valueDim: 'lowest'
                        //     },
                        //     {
                        //       name: 'average value on close',
                        //       type: 'average',
                        //       valueDim: 'close'
                        //     }
                        //   ],
                        //   tooltip: {
                        //     formatter: function (param) {
                        //       return param.name + '<br>' + (param.data.coord || '');
                        //     }
                        //   }
                        // },
                        // markLine: {
                        //   symbol: ['none', 'none'],
                        //   data: [
                        //     [
                        //       {
                        //         name: 'from lowest to highest',
                        //         type: 'min',
                        //         valueDim: 'lowest',
                        //         symbol: 'circle',
                        //         symbolSize: 10,
                        //         label: {
                        //           show: false
                        //         },
                        //         emphasis: {
                        //           label: {
                        //             show: false
                        //           }
                        //         }
                        //       },
                        //       {
                        //         type: 'max',
                        //         valueDim: 'highest',
                        //         symbol: 'circle',
                        //         symbolSize: 10,
                        //         label: {
                        //           show: false
                        //         },
                        //         emphasis: {
                        //           label: {
                        //             show: false
                        //           }
                        //         }
                        //       }
                        //     ],
                        //     {
                        //       name: 'min line on close',
                        //       type: 'min',
                        //       valueDim: 'close'
                        //     },
                        //     {
                        //       name: 'max line on close',
                        //       type: 'max',
                        //       valueDim: 'close'
                        //     }
                        //   ]
                        // }
                    },
                    {
                        name: 'MA5',
                        type: 'line',
                        data: this.calculateMA(5),
                        smooth: true,
                        showSymbol: false,
                        lineStyle: {
                            // opacity: 0.5,
                            width: 1,
                        }
                    },
                    {
                        name: 'MA10',
                        type: 'line',
                        data: this.calculateMA(10),
                        smooth: true,
                        showSymbol: false,
                        lineStyle: {
                            // opacity: 0.5,
                            width: 1,

                        }
                    },
                    {
                        name: 'MA20',
                        type: 'line',
                        data: this.calculateMA(20),
                        smooth: true,
                        showSymbol: false,
                        lineStyle: {
                            // opacity: 0.5,
                            width: 1,
                        }
                    },
                    {
                        name: 'MA30',
                        type: 'line',
                        data: this.calculateMA(30),
                        smooth: true,
                        showSymbol: false,
                        lineStyle: {
                            // opacity: 0.5,
                            width: 1,
                        }
                    },
                    {
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        // data: this.dataHeap,
                        // smooth: true,
                        // showSymbol: true,
                        barWidth: 3,
                        itemStyle: {
                            color: '#ffff5a',
                        }
                    }

                ]
            };

            myChart.setOption(option);

            let that = this;

            function newHeap() {
                let heapArray;
                let opt = myChart.getOption();
                let dates = that.data0.categoryData;
                let prices = that.data0.values;
                let startValue = opt.dataZoom[0].startValue;
                let endValue = opt.dataZoom[0].endValue;
                that.start_date = dates[startValue];
                that.end_date = dates[endValue];
                if (that.if_show_pic === true) {
                    let LaH = myChart.getModel().getComponent('yAxis').axis.scale._extent;
                    let highest_scale = LaH[1];
                    let lowest_scale = LaH[0];
                    // let heapLength = (highest_scale - lowest_scale).toFixed(0);
                    let simple_length = highest_scale - lowest_scale;
                    let accuracy = 100 / simple_length;
                    let heapLength = Math.round((highest_scale - lowest_scale) * accuracy);
                    heapArray = new Array(heapLength).fill(0);
                    for (let i = startValue; i <= endValue; i++) {
                        let lowest_prices = Math.round((prices[i][2] - lowest_scale) * accuracy);
                        let highest_prices = Math.round((prices[i][3] - lowest_scale) * accuracy);
                        for (let j = lowest_prices; j <= highest_prices; j++) {
                            heapArray[j] += 1;
                        }
                    }
                }
                else {
                    heapArray = null;
                }
                // that.dataHeap = heapArray;
                myChart.setOption({
                        series: [{}, {}, {}, {}, {}, {
                            data: heapArray,
                        }]
                    }
                );
            }

            newHeap();

            // this.start_date = opt.dataZoom[0].startValue;

            myChart.getZr().on('click', function (params) {
                // console.log(myChart.getModel().getComponent('tooltip'));
                // console.log(a);
            });
            // myChart.on('mousemove', function (params) {
            //   // console.log(params)
            //   myChart.setOption({
            //     tooltip: {
            //       show: false
            //     }
            //   });
            // });
            // let dates = this.data0.categoryData;
            // let prices =this.data0.values;
            // let ref_dataHeap = this.dataHeap;
            myChart.on('datazoom', () => {
                // // console.log(params);
                // let opt = myChart.getOption();
                // // console.log(opt.dataZoom[0].startValue);
                // // console.log(opt.dataZoom[0].endValue);
                // // console.log(myChart.getModel().getComponent('yAxis').axis.scale._extent);
                // // let sli_dates = dates.slice(opt.dataZoom[0].startValue, opt.dataZoom[0].endValue + 1);
                // // let sli_prices = prices.slice(opt.dataZoom[0].startValue, opt.dataZoom[0].endValue + 1);
                // // console.log(sli_dates);
                // // console.log(sli_prices);
                // let LaH = myChart.getModel().getComponent('yAxis').axis.scale._extent;
                // let highest_scale = LaH[1];
                // let lowest_scale = LaH[0];
                // // let heapLength = (highest_scale - lowest_scale).toFixed(0);
                // let heapLength = Math.round(highest_scale - lowest_scale);
                // let heapArray = new Array(heapLength).fill(0);
                // let prices = this.data0.values;
                // for (let i = opt.dataZoom[0].startValue; i <= opt.dataZoom[0].endValue; i++) {
                //   let lowest_prices = Math.round(prices[i][2] - lowest_scale);
                //   let highest_prices = Math.round(prices[i][3] -lowest_scale);
                //   for (let j = lowest_prices; j <= highest_prices; j++) {
                //     heapArray[j] += 1;
                //   }
                // }
                // // console.log(heapArray);
                // myChart.setOption({
                //   series: [{},{},{},{},{},{
                //     data: heapArray,
                //   }]}
                // );

                newHeap();

            });
        },

        // search_type() {
        //     console.log(this.stock_type);
        //     this.$axios.get(`http://47.110.128.234:8080/?type=` + this.stock_type + `&name=xx&id=` + this.stock_id).then(response => {
        //         let res_data = response.data;
        //         if (res_data["status"] === '0') {
        //             console.log(res_data["msg"]);
        //         } else {
        //             this.stock_name = res_data["data"]["name"];
        //             this.stock_id = res_data["data"]["id"];
        //             this.data0 = res_data["data"]["data0"];
        //         }
        //     });
        // },

        search_name() {
            // console.log(this.stock_name);
            this.$axios.get(`http://47.110.128.234:8080/?type=` + this.stock_type + `&name=` + this.stock_name + `&id=xx`).then(response => {
                let res_data = response.data;
                if (res_data["status"] === '0') {
                    // console.log(res_data["msg"]);
                } else {
                    this.stock_name = res_data["data"]["name"];
                    this.stock_id = res_data["data"]["id"];
                    this.data0 = res_data["data"]["data0"];
                }
            });
        },

        search_id() {
            // console.log(this.stock_id);
            this.$axios.get(`http://47.110.128.234:8080/?type=` + this.stock_type + `&name=xx&id=` + this.stock_id).then(response => {
                let res_data = response.data;
                if (res_data["status"] === '0') {
                    // console.log(res_data["msg"]);
                } else {
                    this.stock_name = res_data["data"]["name"];
                    this.stock_id = res_data["data"]["id"];
                    this.data0 = res_data["data"]["data0"];
                }
            });
        },

        // data_compare(start, end, type) {
        // },

        search_start_date() {
            document.getElementById("start-date-input").blur();
            // let start_index = (this.data0.categoryData || []).findIndex((item) => item ===  this.start_date);
            let start_index = this.data0.categoryData[0];
            for (let i = 1; i < this.data0.categoryData.length - 1; i++) {
                if (this.data0.categoryData[i - 1] <= this.start_date && this.data0.categoryData[i + 1] >= this.start_date) {
                    start_index = this.data0.categoryData[i];
                    break;
                }
            }
            myChart.setOption({
                dataZoom: [{
                    startValue: start_index,
                }, {}]
            });
            // let opt = myChart.getOption();
            // let dates = this.data0.categoryData;
            // this.start_date = dates[opt.dataZoom[0].startValue];
            // this.end_date = dates[opt.dataZoom[0].endValue];
            this.myEcharts();
        },

        search_end_date() {
            document.getElementById("end-date-input").blur();
            let end_index = this.data0.categoryData[this.data0.categoryData.length - 1];
            for (let i = this.data0.categoryData.length - 2; i >= 1; i--) {
                if (this.data0.categoryData[i - 1] <= this.end_date && this.data0.categoryData[i + 1] >= this.end_date) {
                    end_index = this.data0.categoryData[i];
                    break;
                }
            }
            myChart.setOption({
                dataZoom: [{
                    endValue: end_index,
                }, {}]
            });
            // let opt = myChart.getOption();
            // let dates = this.data0.categoryData;
            // this.start_date = dates[opt.dataZoom[0].startValue];
            // this.end_date = dates[opt.dataZoom[0].endValue];
            this.myEcharts();
        },

        show_pic() {
            // this.if_show_pic = this.if_show_pic !== true;
            if (this.if_show_pic === true){
                this.if_show_pic = false;
                this.myEcharts();
            }
            else {
                this.if_show_pic = true;
                this.myEcharts();
            }
            // console.log(this.if_show_pic);
        },

        change_color() {
            document.getElementById('button-show-heap').style.color = '#FD1050';
            // console.log(co)
            // if (co === '#FD1050') {
            //     co = 'aliceblue';
            // }
            // else {
            //     co = '#FD1050';
            // }
        },

        return_color() {
            document.getElementById('button-show-heap').style.color = 'aliceblue';
            // if (co === '#FD1050') {
            //     co = 'aliceblue';
            // }
            // else {
            //     co = '#FD1050';
            // }
        },

    },
    watch: {
        data0() {
            myChart.setOption({
                // title: {
                //   text: this.stock_name,
                // },
                xAxis: [{
                    data: this.data0.categoryData,
                }, {}],
                series: [{
                    data: this.data0.values,
                }, {
                    data: this.calculateMA(5),
                }, {
                    data: this.calculateMA(10),
                }, {
                    data: this.calculateMA(20),
                }, {
                    data: this.calculateMA(30),
                }, {}],
            });
            // let opt = myChart.getOption();
            // let dates = this.data0.categoryData;
            // this.start_date = dates[opt.dataZoom[0].startValue];
            // this.end_date = dates[opt.dataZoom[0].endValue];
            this.myEcharts();

        }
    },
    mounted() {
        this.myEcharts();
    }
}
</script>

<style scoped>

.stock {
    display: flex;
    width: 100%;
    position: absolute;
    top: 100px;
    bottom: 0;
}

#chart {
    flex: 1;
    /*margin:0 auto;*/
    /*background: firebrick;*/

    /*display: inline-block;*/
}

#stock-bar {
    /*display: inline-block;*/
    width: 160px;
    /*height: 100px;*/
    /*background: firebrick;*/
}

.choose {
    /*display: flex;*/
    text-align: left;
    color: aliceblue;
}

.user-select {
    /*appearance:none;*/
    /*-moz-appearance:none;*/
    /*-webkit-appearance:none;*/
    /*-ms-appearance:none;*/
    outline-style: none;
    border: 0;
    font-size: 12px;
    width: 50%;
    color: aliceblue;
    /*background: inherit;*/
    /*BACKGROUND-COLOR: #2c3e50;*/
    background-color: rgb(40, 40, 40);
}

/*.user-option {*/
/*    outline-color: #FD1050;*/
/*    color: #42b983;*/
/*}*/

.user-input {
    outline-style: none;
    border: 0;
    font-size: 12px;
    width: 50%;
    color: aliceblue;
    background: inherit;
}

.user-button {
    outline-style: none;
    padding: 0;
    border: 0;
    font-size: 12px;
    width: 50%;
    color: aliceblue;
    background: inherit;
    text-align:left;
}

.change-char {
    font-size: 14px;
    color: aliceblue;
}

#between-stock-date {
    height: 20px;
}

#between-date-heap {
    height: 20px;
}
</style>