import tasks from '@/data/mockTasks.js'
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import '@/styles/taskTable.scss'

export default function TaskTable({ activeFilter }) {

    const [taskOrder, setTaskOrder] = useState(tasks);
    const [sortDirection, setSortDirection] = useState('');
    const [sortButtonText, setSortButtonText] = useState('⇅');

    const [sortedColumn, setSortedColumn] = useState('');


    function handleButtonClick(event) {

        const clickedHeader = event.target.value;
        console.log(clickedHeader)
    }

    const header = [
        { label: 'Title', property: 'title' },
        { label: 'Assignee', property: 'assignee' },
        { label: 'Status', property: 'status' },
        { label: 'Due Date', property: 'dueDate' },
        { label: 'Priority', property: 'priority' }
    ]

    // styles

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

    //

    function SortButton({ onClick }) {
        return (
            <button
                onClick={onClick}
            > {sortButtonText}
            </button>
        )
    }
    function sortColumn(property) {

        const priorityLevel = {
            High: 3,
            Medium: 2,
            Low: 1,
        };

        // use compare

        const sortTasks = [...taskOrder].sort((a, b) => {

            let comparison;

            if (property === 'priority') {
                comparison = priorityLevel[a.priority] - priorityLevel[b.priority]
            } else {
                comparison = a[property].localeCompare(b[property])
            }
            return (
                sortDirection !== 'ascending' ? comparison : -comparison
            )
        })

        // the sorting
        if (sortDirection !== 'ascending') {
            setTaskOrder(sortTasks);
            setSortDirection('ascending');
            setSortButtonText(sortColumn === property ? '▲' : '⇅')
        } else {
            setTaskOrder(sortTasks);
            setSortDirection('descending');
            setSortButtonText(sortColumn === property ? '▼' : '⇅')
        }

        console.log(sortTasks.property)

    }


    return (
        <main>
            <h3>Tasks</h3>
            <table>
                <thead>
                    <tr>
                        {header.map((header) =>
                            <th key={header.property}>
                                {header.label}
                                <SortButton
                                    property={header.property}
                                    onClick={() => sortColumn(header.property)}
                                />
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