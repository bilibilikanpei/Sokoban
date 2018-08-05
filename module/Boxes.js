export default class Boxes {
    constructor() {
        this.positionList = []; //保存箱子位置
        this.boxesList = []; //保存箱子节点
    }
    //生成箱子
    creatBox(top, left) {
        //					检查
        this.positionList.forEach((boxPosi, index) => {
            if (boxPosi.top === top && boxPosi.left === left) {
                return;
            }
        });
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
    move(e, Walls) {
        //					imgBoxIndex要大于0即代表找到要推动的箱子
        if (Walls.imgBoxIndex >= 0) {
            switch (e.keyCode) {
                case 37:
                    this.positionList[Walls.imgBoxIndex].left -= 50;
                    this.boxesList[Walls.imgBoxIndex].style.left = this.positionList[Walls.imgBoxIndex].left + 'px';
                    break;
                case 38:
                    this.positionList[Walls.imgBoxIndex].top -= 50;
                    this.boxesList[Walls.imgBoxIndex].style.top = this.positionList[Walls.imgBoxIndex].top + 'px';
                    break;
                case 39:
                    this.positionList[Walls.imgBoxIndex].left += 50;
                    this.boxesList[Walls.imgBoxIndex].style.left = this.positionList[Walls.imgBoxIndex].left + 'px';
                    break;
                case 40:

                    this.positionList[Walls.imgBoxIndex].top += 50;
                    this.boxesList[Walls.imgBoxIndex].style.top = this.positionList[Walls.imgBoxIndex].top + 'px';
                    break;
                default:
            }
        }
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