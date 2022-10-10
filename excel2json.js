const fs = require('fs')
const Excel = require('exceljs');
//输入 src dst：json目录下存放目标文件 excel2json.xlsx -> excel2json.json
// src：读取的excel文件目录
// dst：导出的json文件目录
const excel2json = async function () {
    let arr = getAllFiles();
    const workbook = new Excel.Workbook();
    for (let i = 0; i < arr.length; i++) {
        let json = {};
        let keyArr = [];
        let topKey = '';
        let keys = 0;
        let savePath = '';
        let startKeyID = 0;
        let startCol = 0;
        let remarkRow = -1;
        let topBool = false;
        let keysBool = false;
        let savePathBool = false;
        let tempJson = {}, singleJson = {};
        let key1;
        // 读取excel
        await workbook.xlsx.readFile(arr[i]);
        const worksheet = workbook.getWorksheet(1); //获取第一个worksheet
        worksheet.eachRow((row, rowNumber) => {//rowNumber表示第几行
            // cell.type单元格类型：6-公式 ;2-数值；3-字符串
            row.eachCell((cell, colNumber) => {//colNumber表示第几列；cell表示数据
                if (cell.value == '备注') remarkRow = rowNumber;
                if (rowNumber == 1) {//第一行，记录文件名与保存地址
                    const value = cell.value;
                    if (value == 'fileName' && !topBool) {
                        topBool = true;
                    } else if (topBool) {
                        topKey = value;
                        console.log(value);
                        topBool = false;
                        tempJson = json[topKey] = {};
                    }
                    if (value == 'path' && !savePath) {
                        savePathBool = true;
                    } else if (savePathBool) {
                        savePath = value;
                        savePathBool = false;
                    }
                } else if (rowNumber == 2) {//第二行，记录此json文件有多少个key
                    const value = cell.value;
                    if (value == 'keys' && !keysBool)
                        keysBool = true;
                    else if (keysBool) {
                        keysBool = false;
                        keys = value;
                    }
                } else if (remarkRow != rowNumber) {//其他都是内容
                    if (cell != null || cell.value != '' || cell.value != null) {//空值不要
                        const value = cell.value;
                        if (keys == 0) {
                            if (value != 'startKeys') {
                                if (colNumber == 1) keyArr[rowNumber] = value;
                                else tempJson[keyArr[rowNumber]] = value;
                            }
                        } else {
                            if (value == 'startKeys') {//key开始标识
                                startKeyID = rowNumber;
                                startCol = colNumber + 1;
                            }
                            if (rowNumber == startKeyID && colNumber != 1)//保存key值
                                keyArr[colNumber] = value;
                            if (rowNumber != startKeyID) {//获取value值
                                if (keys == 1) {
                                    if (colNumber == startCol) {
                                        singleJson = tempJson[value] = {};
                                    }
                                    singleJson[keyArr[colNumber]] = value;
                                } else if (keys == 2) {
                                    if (colNumber == startCol) {
                                        key1 = value;
                                        if (tempJson[value] == undefined) singleJson = tempJson[value] = {};
                                        else singleJson = tempJson[value];
                                    } else if (colNumber == startCol + 1) {
                                        singleJson = singleJson[value] = {};
                                        singleJson[keyArr[colNumber - 1]] = key1;//把第一个key的值也放到value里面去
                                    }
                                    if (colNumber != startCol) {
                                        singleJson[keyArr[colNumber]] = value;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
        // 写入流
        await fs.writeFileSync(savePath, JSON.stringify(json));
        console.log(topKey + "编译json完成");
    }
}
var getAllFiles = function () {
    const path = './excel';
    const fn = fs.readdirSync(path);
    let arr = [];
    fn.forEach(function (item, index) {
        const fPath = path + '/' + item;
        if (fPath.indexOf('~$') < 0)
            arr.push(fPath);
    })
    return arr;
}
excel2json();