import tasks from '@/data/mockTasks.js'
import { useState } from 'react';
import { useEffect } from 'react';
import '@/styles/taskTable.scss'

export default function TaskTable({ activeFilter }) {

    const header = ['Title', 'Assignee', 'Status', 'Due Date', 'Priority']

    const priorityClass = {
        High: 'priority-high',
        Medium: 'priority-medium',
        Low: 'priority-low'
    };

    const statusClass = {
        'In Progress': 'status-inProgress',
        'To-Do': 'status-todo',
        Done: 'status-done',
        Blocked: 'status-blocked',
    }

    return (
        <main>
            <h3>Tasks</h3>
            <table>
                <thead>
                    <tr>
                        {header.map((header) =>
                            <th key={header}>
                                {header}
                            </th>
                        )}
                    </tr>
                </thead>
                    <tbody >
                                        {tasks.map((task) =>

                        <tr key={task.id} className={ 
                            activeFilter === 'All' || 
                            task.status === activeFilter ? 'show' : 'hidden' }>
                            <td> {task.title}</td>
                            <td> {task.assignee}</td>
                            <td className={statusClass[task.status]}> {task.status}</td>
                            <td> {task.dueDate}</td>
                            <td className={priorityClass[task.priority]}> {task.priority}</td>
                        </tr>
                                        )}

                    </tbody>
            </table>
        </main>
    )
}