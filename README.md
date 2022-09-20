# excel2Json
自定义excel转json，支持0~2个key。


## 例子1：

**excel内容**

fileName	test	path	./json/test.json				
keys	1						
							
startKeys	id	xmax	ymax	width	height	testStr	testFloat

	        1	4	4	1334	750	ads	123.5
            
	        2	1	5	1334	360	qer	546.556
            
	        3	1	2	1750	1334	tre	1.55
            
	        4	2	4	1680	750	htfg	0.88
            
	        5	3	6	750	180	gjf	-58.25

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

## 例子2：

**excel内容**

fileName	test2	path	./json/test2.json					
keys	2							
								
startKeys	id	key2	xmax	ymax	width	height	testStr	testFloat

		1	1	4	4	1334	750	ads	123.5
		
		1	2	1	5	1334	360	qer	546.556
		
		2	1	1	2	1750	1334	tre	1.55
		
		2	2	2	4	1680	750	htfg	0.88
		
		2	3	5	4	524	789	jyt	0.88
		
		3	1	3	6	750	180	gjf	-58.25

**生成json**

`{"test2":{"1":{"1":{"id":1,"key2":1,"xmax":4,"ymax":4,"width":1334,"height":750,"testStr":"ads","testFloat":123.5},"2":{"id":1,"key2":2,"xmax":1,"ymax":5,"width":1334,"height":360,"testStr":"qer","testFloat":546.556}},"2":{"1":{"id":2,"key2":1,"xmax":1,"ymax":2,"width":1750,"height":1334,"testStr":"tre","testFloat":1.55},"2":{"id":2,"key2":2,"xmax":2,"ymax":4,"width":1680,"height":750,"testStr":"htfg","testFloat":0.88},"3":{"id":2,"key2":3,"xmax":5,"ymax":4,"width":524,"height":789,"testStr":"jyt","testFloat":0.88}},"3":{"1":{"id":3,"key2":1,"xmax":3,"ymax":6,"width":750,"height":180,"testStr":"gjf","testFloat":-58.25}}}}`

## 例子3

**excel内容**

fileName	test3	path	./json/test3.json
keys	0		
			
startKeys	

day	123	

level	111	

cd	20	

name	anson

**生成json**

`{"test3":{"day":123,"level":111,"cd":20,"name":"anson"}}`
