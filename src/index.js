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
Sokoban.boxes.creatBox(250, 300);
Sokoban.boxes.creatBox(250, 350);
Sokoban.targets.creatTarget(300, 400);
Sokoban.targets.creatTarget(350, 400)

Sokoban.walls.creatWall(150, 200);
Sokoban.walls.creatWall(150, 250);
Sokoban.walls.creatWall(150, 300);
Sokoban.walls.creatWall(150, 350);
Sokoban.walls.creatWall(150, 400);
Sokoban.walls.creatWall(150, 450);
Sokoban.walls.creatWall(150, 500);
Sokoban.walls.creatWall(150, 550);

Sokoban.walls.creatWall(200, 550);
Sokoban.walls.creatWall(250, 550);
Sokoban.walls.creatWall(300, 550);
Sokoban.walls.creatWall(350, 550);
Sokoban.walls.creatWall(400, 550);
Sokoban.walls.creatWall(450, 550);

Sokoban.walls.creatWall(200, 200);
Sokoban.walls.creatWall(250, 200);
Sokoban.walls.creatWall(300, 200);
Sokoban.walls.creatWall(350, 200);
Sokoban.walls.creatWall(400, 200);
Sokoban.walls.creatWall(450, 200);
Sokoban.walls.creatWall(500, 200);

Sokoban.walls.creatWall(500, 250);
Sokoban.walls.creatWall(500, 300);
Sokoban.walls.creatWall(500, 350);
Sokoban.walls.creatWall(500, 400);
Sokoban.walls.creatWall(500, 450);
Sokoban.walls.creatWall(500, 500);
Sokoban.walls.creatWall(500, 550);

document.body.onkeydown = (e) => {
    Sokoban.people.virtual_people(e);
    Sokoban.boxes.virtual_box(Sokoban.people)
    if (Sokoban.walls.stop_people(Sokoban.people) && Sokoban.walls.stop_box(Sokoban.boxes) && Sokoban.boxes.boxToBox()) {
        Sokoban.people.handler();
        Sokoban.boxes.move();
        Sokoban.targets.check(Sokoban.boxes);
    }
    //重置推动箱子序号为-1和上次操作记录为0
    Sokoban.boxes.box_item = -1;
    Sokoban.boxes.lastDir = 0;
};
if (module.hot) {
    module.hot.accept();
}