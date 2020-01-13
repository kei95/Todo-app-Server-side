'use strict';

var Task = require('../../model/appModel')

exports.list_all_tasks = function(req, res) {
    Task.getAllTask(function(err, task) {
        console.log('controller')
        if(err){
            console.log('res', task)
            return res.send(err);
        }
        res.send(task)
    });
};

exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body)
    if(!new_task.title || !new_task.status) {
        res.status(400).send({error: true, message: 'Please provide title/status'})
    }

    Task.createTask(new_task, function(err, task){
        if(err){ return res.send(err)}
        res.json(task);
    })
};

exports.read_a_task = function(req, res) {
    Task.getTaskById(req.params.taskId, new Task(req.body), function(err, task){
        console.log('read_a_task called', task)
        if(err){ return res.send(err) }
        res.json(task)
    })
};

exports.update_a_task = function(req, res) {
    Task.upDateById(req.params.taskId, new Task(req.body), function(err, task) {
        if(err){
            return console.log(err)
        } 
        res.json(task)
    })
};

exports.delete_a_task = function(req, res) {
    Task.remove(req.params.taskId, function(err, task) {
        if(err){
            return console.log(err)
        }
        res.json({message: 'message successfully deleted'})
    })
}