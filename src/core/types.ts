import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";
import { Game } from "./Game";

export interface Point{
    readonly x:number,
    readonly y:number
}
export interface IViewer{
    // 显示
    show():void;

        // 移除：不在显示
    remove():void;
}
/**
 * 形状
 */
export type Shape = Point[]//形状就是坐标数组
export enum MoveDirection {
    left,
    right,
    down
}
export enum GameStatus{
    init,//未开始
    playing,//进行中，
    pause,//暂停
    over//游戏结束
}
// 用于控制游戏显示的东西
export interface GameViewer {
    // 下一个方块对象
    showNext(group:SquareGroup):void;
    // 切换的方块对象
    switch(group:SquareGroup):void;
    // 完成界面的初始化
    init(game:Game):void;
    // 显示分数
    showScore(score:number):void;
    // 游戏开始，结束，暂停要触发的事件
    onGamePause():void;
    onGameStart():void;
    onGameOver():void;
}