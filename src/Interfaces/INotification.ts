export enum NotificationType{
    SUCCESS, 
    FAILED,
    WARNING
}

export interface INotification{
    title: string,
    text: string, 
    type: NotificationType,
    id:number,
}