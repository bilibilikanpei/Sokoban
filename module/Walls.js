import Option from '../options/const';
export default class Walls {
    constructor() {
        this.positionList = []; //墙的位置
        this.wallsList = []; //墙的节点
        this.forbidList = []; //禁止移动的列表
        this.imgBoxPo = null; //假想的箱子位置  没用过 在箱子阻挡判断时能用
        this.imgBoxIndex = -1; //找到假想的箱子的序列 有序号就够了
    }
    creatWall(top, left) {
        //					检查
        this.positionList.forEach((wallPosi, index) => {
            if (wallPosi.top === top && wallPosi.left === left) {
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
        let wall = document.createElement('div');
        //					添加className
        wall.classList.add('wall');
        //					初始化位置
        wall.style.top = position.top + 'px';
        wall.style.left = position.left + 'px';
        //					放入body中
        document.body.appendChild(wall);
        //					把箱子节点记录到列表中
        this.wallsList.push(wall);

        //					记录禁止移动列表
        this.forbidList = this.forbidList.concat(
            {
                top,
                left: left - 50,
                dir: 39 //左移
            }, {
                top: top + 50,
                left,
                dir: 38 //下移
            }, {
                top,
                left: left + 50,
                dir: 37 //右移
            }, {
                top: top - 50,
                left,
                dir: 40 //上移
            })
    }
    //遍历是否阻挡人
    stop_people(people) {
        for (let i = 0; i < this.forbidList.length; i++) {
            if (this.forbidList[i].top === people.top && this.forbidList[i].left === people.left && this.forbidList[i].dir === people.lastDir) {
                //找到禁止区域，阻止人移动				
                return false;
            }
        }
        //允许人移动
        return true;
    }
    //遍历是否阻挡箱子
    stop_box(boxes) {
        //先判断有无要推动的箱子
        if (boxes.box_item > -1) {
            for (let i = 0; i < this.forbidList.length; i++) {
                if (this.forbidList[i].top === boxes.positionList[boxes.box_item].top && this.forbidList[i].left === boxes.positionList[boxes.box_item].left && this.forbidList[i].dir === boxes.lastDir) {
                    //找到禁止区域，阻止箱子移动				
                    return false;
                }
            }
        }
        //允许箱子移动
        return true;
    }
}