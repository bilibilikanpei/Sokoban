import People from '../module/People';
import Boxes from '../module/Boxes';
import Targets from '../module/Target';
import Walls from '../module/Walls';
//引入css
import './index.css';

var Sokoban = {
    people: new People(),
    boxes: new Boxes(),
    targets: new Targets(),
    walls: new Walls()
}

Sokoban.people.creatPeople(200, 250);
Sokoban.boxes.creatBox(100, 100);
Sokoban.boxes.creatBox(100, 150);
Sokoban.targets.creatTarget(200, 200)
Sokoban.walls.creatWall(150, 150);

document.body.onkeydown = (e) => {
    //				能阻止移动的情况一:墙挡住人或者箱子
    //				能组织移动的情况二:箱子移动的方向还有箱子
    if(Sokoban.walls.check(e, Sokoban.people, Sokoban.boxes)) {
        if(Sokoban.boxes.checkBox(e, Sokoban.walls)) {
            Sokoban.people.handler(e);
            Sokoban.boxes.move(e, Sokoban.walls); //walls中的imgBoxIndex会被重置未-1
            Sokoban.targets.check(Sokoban.boxes);
        };
    }

    Sokoban.walls.imgBoxIndex = -1; //每次移动之后，都在最后重置某些属性
};