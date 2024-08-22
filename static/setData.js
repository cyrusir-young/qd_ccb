var touristsFlowChartArr = [
    { NAME: '产芝村', NUM: 8189 },
    { NAME: '马连庄村', NUM: 7069 },
    { NAME: '庄扶新村', NUM: 6693 },
    { NAME: '沟东新村', NUM: 1502 }
]
var totalPeopleChart = [
    {
        name: '产芝村',
        value: 8189
    }, {
        name: '孽龙洞景区',
        value: 2854
    }, {
        name: '泉之源',
        value: 1056
    }, {
        name: '沟东新村',
        value: 1502
    }
]
var totalPeople = totalPeopleChart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.value
}, 0)
var peoplePercentage = [
    {
        name: '1山',
        value: (3652 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '孽龙洞景区',
        value: (2854 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '泉之源',
        value: (1056 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '赤山幕冲生态',
        value: (681 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '杨岐山普通寺',
        value: (324 / Number(totalPeople) * 100).toFixed(0)
    }
]
var carFlowChartDate = {
    legend: ['常驻', '在外'],
    xAxis: ['产芝村', '马连庄村','庄扶新村', '沟东新村'],
    data: [[1637, 1060, 803, 106], [6552, 6009, 5890, 1396]],
}
var carSpaceNumData = {
    yAxisName: ['黄香米', '巨峰葡萄', '红珍珠葡萄', '阳光玫瑰', '青提葡萄'],
    yAxisData: [6546, 4353, 1346, 9865, 2331],
    data: [21, 15, 8, 63, 11]
}
var consumptionChartData = [
    {
        value: 20010,
        name: 'xxxxx'
    }, {
        value: 21387,
        name: 'xxxxx'
    }, {
        value: 20867,
        name: 'xxxxx'
    }, {
        value: 20510,
        name: 'xxxxx'
    }, {
        value: 25371,
        name: 'xxxxxx'
    }
]
var ticketsChart = {
    legend: ['销售额', '销售数量'],
    data: [
        [
            509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000, 1455, 1210, 719,
            733, 944, 2285, 2208, 3372, 3936, 3693, 2962
        ],
        [
            2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019, 3433, 3544, 3885, 4208, 3372,
            3484, 3915, 3748, 3675, 4009, 4433, 3544, 3285
        ]
    ]
}
var visitingNum = carFlowChartDate.data[0].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
var backNum = carFlowChartDate.data[1].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
var touristsList = [
]
var helpCellChartData = [
    [2550, 1700, 1650],
    [1220, 850, 850]
]
// 1: 空闲，2:拥挤， 3: 爆满
var mapData = [
    {
        name: '杨岐山普通寺',
        value: '3'
    },
    {
        name: '孽龙洞景区',
        value: '2'
    },
    {
        name: '斑竹山',
        value: '1'
    },
    {
        name: '泉之源',
        value: '2'
    },
    {
        name: '赤山幕冲生态',
        value: '1'
    }
]