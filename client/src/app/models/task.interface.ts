export const UrgencyMap: Object[] = [
    {idCode: 0, code: 'warn', name: "Срочно"}, 
    {idCode: 1, code: 'accent', name: "Нормально"}, 
    {idCode: 2, code: 'primary', name:"Не срочно"}
    ]

export const enum Urgency {
    Hi,
    Middle,
    Low
}

export interface Task { 
    id: number,
    name: string
    description: string
    status: boolean
    urgency: Urgency
    finishTo: Date,
    finishToStr ?: string 
}

export interface FilteredTasks { 
    completed: Task[]
    uncompleted: Task[]
}

export interface Statistics {
    all: number
    completed: number
    uncompleted: number
    urgent: number
}