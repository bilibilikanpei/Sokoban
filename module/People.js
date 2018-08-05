export default class People {
    constructor() {
        this.top = 0; //纵坐标
        this.left = 0; //横坐标
        this.people = null; //记录player节点
        this.lastDir = 0; //记录上次操作
    }
    creatPeople(top, left) {
        if (!!this.people) {
            return;
        }
        this.top = top;
        this.left = left;
        var people = document.createElement('div');
        people.id = 'people';
        people.innerText = '人';
        //					初始化位置
        people.style.top = this.top + 'px';
        people.style.left = this.left + 'px';
        this.people = people;
        //					放入body中
        document.body.appendChild(people);
    }
    //操作人移动方法
    handler(e) {
        switch (e.keyCode) {
            case 37:
                this.left -= 50;
                this.people.style.left = this.left + 'px';
                this.lastDir = e.keyCode;
                break;
            case 38:
                this.top -= 50;
                this.people.style.top = this.top + 'px';
                this.lastDir = e.keyCode;
                break;
            case 39:
                this.left += 50;
                this.people.style.left = this.left + 'px';
                this.lastDir = e.keyCode;
                break;
            case 40:
                this.top += 50;
                this.people.style.top = this.top + 'px';
                this.lastDir = e.keyCode;
                break;
        }
    }
}