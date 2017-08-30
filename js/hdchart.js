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
      var myChart = ec.init(document.getElementById('hd')); 
  option = {
	  title: {
            text: '河道站过程线',
             x: "center",
             padding: 15,
            textStyle: { fontSize: "16", }
                        },
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
            data : ['12-20 00:00','12-20 02:00','12-20 03:00','12-20 04:00','12-20 05:00','12-20 06:00','12-20 07:00','12-20 08:00','12-20 09:00','12-20 15:00','12-20 16:00','12-20 17:00','12-20 18:00','12-20 18:30','12-20 20:00','12-20 21:00','12-20 22:00','12-20 23:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
        }
    ],
    series : [
	    { 
            type:'line',
            data:[94.68,94.69,94.7,94.71,94.73,94.75,94.77,94.8,94.8,95.48,95.55,95.58,95.61,95.61,95.58,95.54,95.5,95.47]
        },
		{
            type:'line',
            data:[53.4,54.7,56,57.5,60.5,63.5,66.5,71,71,234,259,270,283,363,270,255,240,231]
        },
    ]
};
                             // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );