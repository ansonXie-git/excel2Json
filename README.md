# excel2Json
自定义excel转json，支持0~2个key。


例子：

**excel内容**

![excel图片](C:\Users\Administrator\Desktop\1663645671780.png "Magic Gardens")

**生成json**

`{
    "test": {
        "1": {
            "id": 1,
            "xmax": 4,
            "ymax": 4,
            "width": 1334,
            "height": 750,
            "testStr": "ads",
            "testFloat": 123.5
        },
        "2": {
            "id": 2,
            "xmax": 1,
            "ymax": 5,
            "width": 1334,
            "height": 360,
            "testStr": "qer",
            "testFloat": 546.556
        },
        "3": {
            "id": 3,
            "xmax": 1,
            "ymax": 2,
            "width": 1750,
            "height": 1334,
            "testStr": "tre",
            "testFloat": 1.55
        },
        "4": {
            "id": 4,
            "xmax": 2,
            "ymax": 4,
            "width": 1680,
            "height": 750,
            "testStr": "htfg",
            "testFloat": 0.88
        },
        "5": {
            "id": 5,
            "xmax": 3,
            "ymax": 6,
            "width": 750,
            "height": 180,
            "testStr": "gjf",
            "testFloat": -58.25
        }
    }
}`
