import {Point, IViewer} from "./types";

// 小方块
export class Square{
    // private _x:number //逻辑坐标x
    // private _y:number //逻辑坐标y
    //一下写法不能初始化，以下进行初始化，也可以将其写在构造函数中
    private _point:Point = {
        x:0,
        y:0
    }
    private _color:string = ""

    // public get x(){
    //     return this._x;
    // }
    // public set x(val){
    //     this._x = val;
    // }

    //属性：显示者
    private _viewer?: IViewer

    public get viewer(){
        return this._viewer;
    }

    public set viewer(v){
        this._viewer = v;
        if(this._viewer){
            this._viewer.show();
        }
    }
    
    public get point(){
        return this._point;
    }
    public set point(val){
        this._point = val;
        //完成显示
       if(this._viewer){
        this._viewer.show();
       }
    }
    public get color(){
        return this._color;
    }
    public set color(val){
        this._color = val
    }
    // 所有的类属性变量全部定义为私有化,可以写在构造函数中
    // public constructor(private _point:Point,private _color:string){}
}

// const sq = new Square();
//赋值
// sq.point.x = 3;
// sq.point.y = 4;
//只读的赋值
// sq.point = {
//     x:3,
//     y:4
// }
