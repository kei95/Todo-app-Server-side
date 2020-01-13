'use strict';
var sql = require('./db');

//Task object constructor
var Task = function(task){
    this.title = task.title
    this.text = task.text
    this.status = task.status
    this.created_at = new Date()
};

Task.createTask = function(newTask, result) {
    sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
        if(err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Task.getTaskById = function(taskId, result) {
    sql.query("Select * from tasks where id = ?", [taskId], function(err) {
        if(err){
            console.log("error: ", err)
            result(err, null)
        } else {
            result(null, res)
        }
    });
};

Task.getAllTask = function(result) {
    sql.query("Select * from tasks", function(err, res) {
        if(err){
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log("tasks: ", res)
            result(null, res)
        }
    })
};

Task.upDateById = function(id, task, result) {
    sql.query("UPDATE tasks SET title = ?, text = ? WHERE id = ?", [task.title, task.text, id], function(err, res) {
        if(err){
            console.log("error: ", err)
            result(err, null)
        } else {
            result(null, res) 
        }
    })
};

Task.remove = function(id, result){
    sql.query("DELETE FROM tasks WHERE id = ?", [id], function(err, res) {
        if(err){
            console.log("error: ", err)
        } else {
            result(null, res)
        }
    })
};

module.exports = Task;