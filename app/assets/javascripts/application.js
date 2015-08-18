// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components/header
//= require components/navbar
//= require components/column
//= require components/calendar
//= require components/progress
//= require components/braindump
//= require components/textfield
//= require components/list
//= require components/todoitem
//= require components/pbar
//= require components

//= require_tree .


// $(document).ready(function(){
//   console.log("script included");

//   date = new Date();
//   $("#date").html(date.toDateString())

//   $("#braindump").hover(function(){
//     $("#calendar").addClass("blur");
//     $("#progress").addClass("blur");
//   }, function(){
//     $("#calendar").removeClass("blur");
//     $("#progress").removeClass("blur");
//   });

//   $("#clear").on("click", function(){
//     // Todo.all.selesct {|todo| !(todo.completed) }
//   });

//   $("#next").on("click", function(){
//     date.setDate(date.getDate() + 1);
//     $("#date").html(date.toDateString())
//   })

//   $("#prev").on("click", function(){
//     date.setDate(date.getDate() - 1);
//     $("#date").html(date.toDateString())
//   })

//   $("#today").on("click", function(){
//     date = new Date();
//     $("#date").html(date.toDateString())
//   })

//   $('.todo').on("click", function(){
//     $(this).toggleClass("done");
//   })

//   function allowDrop(ev) {
//     ev.preventDefault();
//   }

//   function drag(ev) {
//     $("#calendar").removeClass("blur")
//     $("#progress").removeClass("blur")
//     ev.dataTransfer.setData("text", ev.target.id);
//   }

//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

// });