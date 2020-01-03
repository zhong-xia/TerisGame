

// // import { Square } from "./core/Square";
// // import { IViewer } from "./core/types";

// // class SquareConsoleViewer implements IViewer{
// //     constructor(
// //         private square:Square
// //     ){}
// //     show(): void {
// //         console.log(this.square.point,this.square.color)
// //     }   
// //     remove(): void {
        
// //     }

    
// // }
// // const sq = new Square()
// // sq.viewer = new SquareConsoleViewer(sq);
// // // sq.viewer.show()

// // sq.point = {
// //     x:5,
// //     y:6
// // }
// // sq.point = {
// //     x:7,
// //     y:0
// // }

// import {Square} from "./core/Square";
// import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
// import $ from "jquery"
// import { SquareGroup } from "./core/SquareGroup";
// import { LShape, createTeris } from "./core/Teris";
// import { TerisRule } from "./core/TerisRule";
// import { MoveDirection } from "./core/types";


// // const group = new SquareGroup(
// //    LShape
// // ,{x:3,y:2},"red");
// const group = createTeris({ x:3, y:2 });
// group.squares.forEach(sq=>{
//     sq.viewer = new SquarePageViewer(sq,$("#root"));
// })

// // const sq = new Square();
// // sq.viewer = new SquarePageViewer(sq,$("#root"));

// // sq.color = "red";
// // sq.point = {
// //     x:3,
// //     y:0
// // }
// $("#btnDown").click(function(){
//     //更改中心点坐标
// //    TerisRule.move(group,{x:group.centerPoint.x,y:group.centerPoint.y + 1})
//     TerisRule.move(group,MoveDirection.down)

//     // group.centerPoint = {
//     //     x:group.centerPoint.x,
//     //     y:group.centerPoint.y + 1
//     // }
//     // console.log(group.centerPoint)
//     // console.log(group.squares)
// })
// $("#btnRight").click(function(){
//     //更改中心点坐标
//     // group.centerPoint = {
//     //     x:group.centerPoint.x + 1,
//     //     y:group.centerPoint.y 
//     // }
//     TerisRule.move(group,MoveDirection.right)
// })
// $("#btnLeft").click(function(){
//     //更改中心点坐标
//     // group.centerPoint = {
//     //     x:group.centerPoint.x - 1,
//     //     y:group.centerPoint.y 
//     // }
//     TerisRule.move(group,MoveDirection.left)
// })
// $("#btnUp").click(function(){
//     //更改中心点坐标
//     // group.centerPoint = {
//     //     x:group.centerPoint.x,
//     //     y:group.centerPoint.y - 1
//     // }
//     TerisRule.move(group,{
//         x:group.centerPoint.x,
//         y:group.centerPoint.y - 1
//     })
//     // console.log(group.centerPoint)
//     // console.log(group.squares)
// })

//     $("#rotate").click(function(){
//         // const newShape = group.afterRotateShape();
//         // console.log(group.shape, newShape)
//         // group.rotate();
//         TerisRule.rotate(group)
//     })









// // $("#btnRemove").click(function(){
// //     if(sq.viewer){
// //         sq.viewer.remove();
// //     }
// // })
// // $("#btnAdd").click(function(){
// //     sq.viewer = new SquarePageViewer(sq,$("#root"));
// //     sq.viewer.show()
// // })
// // setInterval(()=>{
// //     sq.point = {
// //         x:sq.point.x,
// //         y:sq.point.y + 1
// //     }
// // },1000)


import { Game } from "./core/Game";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
import $ from "jquery"
// var g = new Game(new GamePageViewer());
new Game(new GamePageViewer());
// $("#btnStart").click(function(){
//     g.start();
// })
// $("#btnPause").click(function(){
//     g.pause();
// })
// $("#btnLeft").click(function(){
//     g.controlLeft();
// })
// $("#btnRight").click(function(){
//     g.controlRight();
// })
// $("#btnDown").click(function(){
//     g.controlDown();
// })
// $("#rotate").click(function(){
//     g.controlRotate();
// })