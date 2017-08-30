// JavaScript Document
        // 路径配置
        require.config({
            paths: {
                echarts: 'js/echarts'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line', // 使用线就加载bar模块，按需加载
				 'echarts/chart/bar' // 使用线就加载bar模块，按需加
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
      var myChart = ec.init(document.getElementById('main')); 
  option = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'7月份',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'8月份',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'9月份',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'10月份',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'11月份',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
                             // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );