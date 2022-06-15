import { NotificationType } from "../Interfaces/INotification";
import { NOTIFY } from "@/store/MutationType";
import { store } from '@/store'


export const notificationMixin = {
    methods: {
        notify(type: NotificationType, title: string, text: string) :void{
            store.commit(NOTIFY, {
             title,
             text,
             type,
           });
         }
    }
}