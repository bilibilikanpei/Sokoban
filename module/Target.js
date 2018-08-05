export default class Targets {
    constructor() {
        //					目标列表
        this.positionList = [];
        //				    节点列表
        this.targetsList = [];
    }
    //				生成目标
    creatTarget(top, left) {
        var position = {
            top,
            left
        };
        this.positionList.push(position);

        let target = document.createElement('div');
        target.classList.add('target');
        //					初始化位置
        target.style.top = position.top + 'px';
        target.style.left = position.left + 'px';
        document.body.appendChild(target);
        this.targetsList.push(target);
    }
    //				检查目标位置是否与箱子重叠
    check(boxes) {
        for (let i = 0, iLen = this.positionList.length; i < iLen; i++) {
            for (let j = 0, jLen = boxes.positionList.length; j < jLen; j++) {
                if (this.positionList[i].top === boxes.positionList[j].top && this.positionList[i].left === boxes.positionList[j].left) {
                    this.targetsList[i].classList.add('overlap');
                    return;
                } else {
                    this.targetsList[i].classList.remove('overlap');
                }
            }
        }
    }
}