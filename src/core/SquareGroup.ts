import { Square } from "./Square";
import { Shape,Point } from "./types";

export class SquareGroup{
    private _squares:readonly Square[];//只读，不能发生变化
    //设置访问器
    public get squares(){
        return this._squares;
    }
    public get shape(){
        return this._shape;
    }
    public get centerPoint():Point{
        return this._centerPoint;
    }
    public set centerPoint(v:Point){
        this._centerPoint = v;
        //同时设置所有小方块对象的坐标
        // this._shape.forEach((p,i) =>{
        //     this._squares[i].point = {
        //         x:this._centerPoint.x + p.x,
        //         y:this._centerPoint.y + p.y
        //     }
        // })
        this.setSquarePoints();
    }

    /**
     * 根据中心点坐标，以及形状，设置每一个小方块的坐标
     * @param _shape 
     * @param _centerPoint 
     * @param _color 
     */
    private setSquarePoints(){
        this._shape.forEach((p,i) =>{
            this._squares[i].point = {
                x:this._centerPoint.x + p.x,
                y:this._centerPoint.y + p.y
            }
        })
    }



    constructor(
        private _shape:Shape,
        private _centerPoint:Point,
        private _color:string){

        //设置小方块的数组
        const arr:Square[] = [];
        this._shape.forEach(p=>{
            const sq = new Square();
            sq.color = this._color;
            // sq.point = {
            //     x:this._centerPoint.x + p.x,
            //     y:this._centerPoint.y + p.y
            // }
            arr.push(sq);
        })
        this._squares = arr;
        this.setSquarePoints();
    }

        // 下一次的旋转方向,顺时针为true,逆时针为false
        protected isClock = true;
    afterRotateShape(): Shape{
        if(this.isClock){
          return this._shape.map(p =>{
                const newP: Point = {
                    x:-p.y,
                    y:p.x
                }
                return newP;
            })
        }
        else{
            return this._shape.map(p =>{
                const newP: Point = {
                    x:p.y,
                    y:-p.x
                }
                return newP;
            })
        }
    }
    rotate(){
        const newShape = this.afterRotateShape();
        this._shape = newShape;
        this.setSquarePoints();
    }
}