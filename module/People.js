export default class People {
    constructor() {
        this.top = 0; //纵坐标
        this.left = 0; //横坐标
        this.people = null; //记录player节点
        this.lastDir = 0; //记录上次操作
        //虚拟坐标
        this.virtual_top = 0;
        this.virtual_left = 0;
    }
    creatPeople(top, left) {
        if (!!this.people) {
            return;
        }
        this.top = top;
        this.left = left;
        //初始化虚拟位置
        this.virtual_top = top;
        this.virtual_left = left;

        var people = document.createElement('div');
        people.id = 'people';
        people.innerText = '人';
        //					初始化位置
        people.style.top = this.top + 'px';
        people.style.left = this.left + 'px';
        this.people = people;
        //			放入body中
        document.body.appendChild(people);
    }
    //虚拟计算移动位置
    virtual_people(e) {
        switch (e.keyCode) {
            case 37:
                this.virtual_left = this.left - 50;
                this.virtual_top = this.top;
                this.lastDir = e.keyCode;
                break;
            case 38:
                this.virtual_left = this.left;
                this.virtual_top = this.top - 50;
                this.lastDir = e.keyCode;
                break;
            case 39:
                this.virtual_left = this.left + 50;
                this.virtual_top = this.top;
                this.lastDir = e.keyCode;
                break;
            case 40:
                this.virtual_left = this.left;
                this.virtual_top = this.top + 50;
                this.lastDir = e.keyCode;
                break;
        }
        console.log('人虚拟', this.virtual_left, this.virtual_top)
    }
    //操作人移动方法
    handler() {
        switch (this.lastDir) {
            case 37:
                this.left -= 50;
                this.people.style.left = this.left + 'px';
                break;
            case 38:
                this.top -= 50;
                this.people.style.top = this.top + 'px';
                break;
            case 39:
                this.left += 50;
                this.people.style.left = this.left + 'px';
                break;
            case 40:
                this.top += 50;
                this.people.style.top = this.top + 'px';
                break;
        }
    }
}