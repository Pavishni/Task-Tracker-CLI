# Task Tracker CLI


A simple command-line tool to manage your tasks.

Project reference: https://roadmap.sh/projects/task-tracker

## Features

* Add, delete, and list tasks
* Mark tasks as **todo**, **in-progress**, or **done**
* Filter tasks by status
* Stores data in a local `tasks.json` file

## Installation

```bash
npm link
```

## Usage

### Add a task

```bash
task-cli add "Buy groceries"
```

### List tasks

```bash
task-cli list
```

### List by status

```bash
task-cli list done
task-cli list todo
task-cli list in-progress
```

### Update status

```bash
task-cli mark-in-progress 1
task-cli mark-done 1
```

### Delete a task

```bash
task-cli delete 1
```

## Notes

* Tasks are stored in `tasks.json` in the current directory
* Each task has: id, description, status, createdAt, updatedAt
