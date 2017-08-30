// JavaScript Document
        // 路径配置
        require.config({
            paths: {
                echarts: 'js/echarts'
            }
        });
        
        // 使用
        require(['echarts',
                'echarts/chart/line', // 使用线就加载bar模块，按需加载
				 'echarts/chart/bar' // 使用线就加载bar模块，按需加
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
      var myChart = ec.init(document.getElementById('sk')); 
  option = {
	  title: {
            text: '水库过程线',
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
            data : ['12-18 00:00','12-18 06:00','12-18 12:00','12-18 18:00','12-19 00:00','12-19 06:00','12-19 12:00','12-19 18:00','12-20 00:00','12-20 16:00','12-20 12:00','12-20 18:00']
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
             
            data:[430.23,430.29,430.23,430.23,430.32,430.29,430.23,430.23,430.32, 430.29,430.32,430.32]
        }
    ]
};
                             // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );