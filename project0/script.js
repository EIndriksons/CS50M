const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

itemCount = 0
uncheckedCount = 0

/* adds new ToDo entry */
function newTodo() {
    const ListItem = `
        <li class="` + classNames.TODO_ITEM + `">
            <input class="` + classNames.TODO_CHECKBOX + `" type="checkbox">
            <input class="` + classNames.TODO_TEXT + `" type="text">
            <button class="` + classNames.TODO_DELETE + `" type="button">Delete</button>
        </li>
    `
    $(list).append(ListItem)

    // increment item count
    updateItemCount(1)

    // increment unchecked count
    updateUncheckedCount(1)
}

/* updates the count of items */
function updateItemCount(count) {
    itemCount += count
    $(itemCountSpan).text(itemCount)
}

/* updates the unchecked count */
function updateUncheckedCount(count) {
    uncheckedCount += count
    $(uncheckedCountSpan).text(uncheckedCount)
}

$(document).ready(function() {

    /* adds Checkbox functionality for a finished task */
    $(list).on('click', '.' + classNames.TODO_CHECKBOX, function() {
        if ($('.' + classNames.TODO_CHECKBOX).is(':checked')) {
            $(this).next('.' + classNames.TODO_TEXT).prop('disabled', true)
            updateUncheckedCount(-1)
        } else {
            $(this).next('.' + classNames.TODO_TEXT).prop('disabled', false)
            updateUncheckedCount(1)
        }
    })
})
