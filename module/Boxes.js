export default class Boxes {
    constructor() {
        this.positionList = []; //保存箱子位置
        this.boxesList = []; //保存箱子节点
        //虚拟坐标
        this.virtual_top = 0;
        this.virtual_left = 0;
        this.lastDir = 0; //记录上次操作
        this.box_item = -1;//记录是否找到要移动的虚拟箱子
    }
    //生成箱子
    creatBox(top, left) {
        //					检查
        for (let i = 0, length = this.positionList.length; i < length; i++) {
            if (this.positionList[i].top === top && this.positionList[i] === left) {
                return;
            }
        }
        //                  箱子位置
        var position = {
            top,
            left
        };
        //					箱子位置记录到列表
        this.positionList.push(position);
        //					创建div
        let box = document.createElement('div');
        //					添加className
        box.classList.add('box');
        //					初始化位置
        box.style.top = position.top + 'px';
        box.style.left = position.left + 'px';
        //					放入body中
        document.body.appendChild(box);
        //					把箱子节点记录到列表中
        this.boxesList.push(box);
    }
    move() {
        //					imgBoxIndex要大于0即代表找到要推动的箱子
        if (this.box_item > -1) {
            switch (this.lastDir) {
                case 37:
                    this.positionList[this.box_item].left -= 50;
                    this.boxesList[this.box_item].style.left = this.positionList[this.box_item].left + 'px';
                    break;
                case 38:
                    this.positionList[this.box_item].top -= 50;
                    this.boxesList[this.box_item].style.top = this.positionList[this.box_item].top + 'px';
                    break;
                case 39:
                    this.positionList[this.box_item].left += 50;
                    this.boxesList[this.box_item].style.left = this.positionList[this.box_item].left + 'px';
                    break;
                case 40:
                    this.positionList[this.box_item].top += 50;
                    this.boxesList[this.box_item].style.top = this.positionList[this.box_item].top + 'px';
                    break;
                default:
            }
        }
        
    }
    //遍历是否会推动箱子
    virtual_box(people) {
        //此方法记录了box_item 和 lastDir数据 箱子移动之后都要重置
        for (let i = 0, length = this.positionList.length; i < length; i++) {
            if (this.positionList[i].left === people.virtual_left && this.positionList[i].top === people.virtual_top) {
                switch (people.lastDir) {
                    case 37:
                        this.virtual_left = people.virtual_left - 50;
                        this.virtual_top = people.virtual_top;
                        this.lastDir = people.lastDir;
                        break;
                    case 38:
                        this.virtual_left = people.virtual_left;
                        this.virtual_top = people.virtual_top - 50;
                        this.lastDir = people.lastDir;
                        break;
                    case 39:
                        this.virtual_left = people.virtual_left + 50;
                        this.virtual_top = people.virtual_top;
                        this.lastDir = people.lastDir;
                        break;
                    case 40:
                        this.virtual_left = people.virtual_left;
                        this.virtual_top = people.virtual_top + 50;
                        this.lastDir = people.lastDir;
                        break;
                }
                //找到要推动的箱子 并记录下序号
                this.box_item = i;
                console.log('箱虚拟', this.virtual_left, this.virtual_top);
                return;
            }
        }
        //没有要推动的箱子
        this.find_box = -1;
    }
    //箱子挡住箱子
    boxToBox() {
        if (this.box_item > -1) {
            for (let i = 0, length = this.positionList.length; i < length; i++) {
                if (this.positionList[i].top === this.virtual_top && this.positionList[i].left === this.virtual_left) {
                    //找到挡住的箱子 阻止箱子移动
                    return false;
                }
            }
        }
        return true;
    }
    checkBox(e, walls) {
        //		墙已经阻挡人和箱子 检查箱子是否阻止箱子
        //		计算箱子将要移动到的位置
        //		imgBoxIndex要大于0即代表找到要推动的箱子
        if (walls.imgBoxIndex > -1) {
            let imgBoxPo = null;
            switch (e.keyCode) {
                case 37:
                    imgBoxPo = {
                        top: walls.imgBoxPo.top,
                        left: walls.imgBoxPo.left - 50
                    }
                    break;
                case 38:
                    imgBoxPo = {
                        top: walls.imgBoxPo.top - 50,
                        left: walls.imgBoxPo.left
                    }
                    break;
                case 39:
                    imgBoxPo = {
                        top: walls.imgBoxPo.top,
                        left: walls.imgBoxPo.left + 50
                    }
                    break;
                case 40:
                    imgBoxPo = {
                        top: walls.imgBoxPo.top + 50,
                        left: walls.imgBoxPo.left
                    }
                    break;
            }
            for (let i = 0, len = this.positionList.length; i < len; i++) {
                if (this.positionList[i].top === imgBoxPo.top && this.positionList[i].left === imgBoxPo.left) {
                    //被挡住了 就返回false阻止移动
                    return false;
                }
            }
        }
        return true;
    }
}