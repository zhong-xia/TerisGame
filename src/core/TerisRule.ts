import { Shape, Point, MoveDirection } from "./types";
import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";


function isPoint(obj:any):obj is Point {
    if(typeof obj.x === "undefined"){
        return false;
    }
    return true;
}

/**
 * 该类中提供一系列的函数，根据游戏规则判断各种情况
 */
export class TerisRule{
    /**
     * 判断某个形状的方块，是否能够移动到目标位置
     */
    static canIMove(shape:Shape,targetPoint:Point,exists:Square[]):boolean{
        //假设：中心点已经移动到了目标位置，算出每个小方块的坐标
        const targetSquarePoints:Point[] = shape.map(it =>{
            return{
                x:it.x + targetPoint.x,
                y:it.y + targetPoint.y
            }
        })
        //边界判断
    let result = targetSquarePoints.some(p=>{
            //是否超出了边界
            return p.x < 0 || p.x > GameConfig.panelSize.width - 1 ||p.y < 0 ||p.y > GameConfig.panelSize.height - 1;
        })
        if(result){
            return false;
        }
        //判断是否与已有的方块有重叠
       result = targetSquarePoints
            .some(p => exists.some(sq=>sq.point.x === p.x && sq.point.y === p.y))
            if(result){
                return false;
            }
        return true;
    }
    static move(group:SquareGroup,targetPoint:Point,exists:Square[]):boolean;
    static move(groupd:SquareGroup,direction:MoveDirection,exists:Square[]):boolean;
    static move(group:SquareGroup,targetPointOrDirection:Point | MoveDirection,exists:Square[]): boolean{
      if(isPoint(targetPointOrDirection)){
          if(this.canIMove(group.shape,targetPointOrDirection,exists)){
              group.centerPoint = targetPointOrDirection;
              return true;
          }
          return false;
      }
      else{
          const direction = targetPointOrDirection;
          let targetPoint: Point;
          if(direction === MoveDirection.down){
            targetPoint = {
                x:group.centerPoint.x,
                y:group.centerPoint.y + 1
            }
          }
          else if(direction === MoveDirection.left){
              targetPoint = {
                  x:group.centerPoint.x -1 ,
                  y:group.centerPoint.y 
              }
          }
          else {
            targetPoint = {
                x:group.centerPoint.x + 1 ,
                y:group.centerPoint.y 
            }
        }
        return this.move(group,targetPoint,exists)
      }


        
    }


    /**
     * 将当前的方块移动到目标方向的终点,一次就移动到终点
     */
    static moveDirectly(group:SquareGroup,direction:MoveDirection,exists:Square[]){
        while(this.move(group,direction,exists)){

        }
    }
    // 旋转的时候容易出去，即旋转超出边界，这个就是解决旋转出去的效果
    static rotate(group:SquareGroup,exists:Square[]):boolean{
        const newShape = group.afterRotateShape();//得到旋转之后新的形状
        if(this.canIMove(newShape,group.centerPoint,exists)){
            group.rotate();
            return true;
        }
        else{
            return false;
        }
    }
    // 根据y坐标，得到所有y坐标为此值的方块
    private static getLineSquares(exists:Square[],y:number){
        return exists.filter(sq=> sq.point.y === y);
    }
    // 从已存在的方块中进行消除，并返回消除的行数
    static deleteSquares(exists:Square[]):number{
        // 获得y坐标数组
        const ys = exists.map(sq=>sq.point.y);
        // 获得最大和最小的y坐标
        const maxY = Math.max(...ys);
        const minY = Math.min(...ys);
        // 循环判断每一行是否可以消除
        let num =0;
        for(let y = minY; y <= maxY;y++){
            if(this.deleteLine(exists,y)){
                num++;
            }
            
        }
        return num;
    }
    // 消除一行
    private static deleteLine(exists:Square[],y:number):boolean{
        const squares = this.getLineSquares(exists,y);
            if(squares.length === GameConfig.panelSize.width){
                // 这一行可以消除
                squares.forEach(sq=>{
                    // 从界面中移除
                    if(sq.viewer){
                        sq.viewer.remove();
                    }
                //   从数组中移除
                    const index = exists.indexOf(sq)
                    exists.splice(index,1);
                })
                  // 剩下的，y坐标比当前的y小的方块，y+1
                  exists.filter(sq=>sq.point.y<y).forEach(sq=>{
                    sq.point = {
                        x:sq.point.x,
                        y:sq.point.y + 1
                    }
                })
                return true;
            }
            return false;
    }
}