import { useState, useEffect } from "react";

const getInitialTasks = () => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        try {
            return JSON.parse(savedTasks);
        } catch (error) {
            console.error("Błąd parsowania tasks z localStorage:", error);
            return [];
        }
    }

    return [];
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);
    const [hideCompleted, setHideCompleted] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, done: !task.done };
                }
                return task;
            })
        );
    };

    const setAllDone = () => {
        setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
    };

    const addNewTask = (content) => {
        setTasks((tasks) => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    const toggleHideCompleted = () => {
        setHideCompleted((prev) => !prev);
    };

    const tasksToRender = hideCompleted
        ? tasks.filter((task) => !task.done)
        : tasks;

    return {
        tasks,
        tasksToRender,
        addNewTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        hideCompleted,
        toggleHideCompleted,
    };
};
