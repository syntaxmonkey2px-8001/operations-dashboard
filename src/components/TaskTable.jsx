import tasks from '@/data/mockTasks.js'
import { useState } from 'react';
import { useEffect } from 'react';
import '@/styles/taskTable.scss'

export default function TaskTable({ activeFilter }) {

    const [taskOrder, setTaskOrder] = useState(tasks);
    const [sortDirection, setSortDirection] = useState('');
    const [sortButtonText, setSortButtonText] = useState('A-Z')

    function sortAssignee() {

        const alphabeticalAscending = [...taskOrder].sort((a, b) => a.assignee.localeCompare(b.assignee));
        const alphabeticalDescending = [...taskOrder].sort((a, b) => b.assignee.localeCompare(a.assignee));

        if (sortDirection !== 'ascending') {
            setTaskOrder(alphabeticalAscending);
            setSortDirection('ascending')
            setSortButtonText('Z-A')
        } else {
            setTaskOrder(alphabeticalDescending);
            setSortDirection('descending');
            setSortButtonText('A-Z')

        }

        console.log(sortDirection)
    }

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
                                <button
                                    className={header === 'Assignee' ? 'show' : 'hidden'}
                                    onClick={sortAssignee}
                                >
                                    {sortButtonText}
                                </button>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody >
                    {taskOrder.map((task) =>

                        <tr key={task.id} className={
                            activeFilter === 'All' ||
                                task.status === activeFilter ? 'show' : 'hidden'}
                        >
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