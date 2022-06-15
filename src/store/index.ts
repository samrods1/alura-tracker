import { INotification, NotificationType } from "@/Interfaces/INotification";
import IProjects from "@/Interfaces/IProjects";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, CHANGE_PROJECT, DELETE_PROJECT, NOTIFY } from "./MutationType";

interface State {
  projects: IProjects[];
  notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [],
  },
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProjects;
      state.projects.push(project);
    },

    [CHANGE_PROJECT](state, project: IProjects) {
      const index = state.projects.findIndex((proj) => proj.id == project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, id: string) {
      state.projects = state.projects.filter((proj) => proj.id != id);
    },
    [NOTIFY](state, newNotification: INotification){
      
      newNotification.id = new Date().getTime()
      state.notifications.push(newNotification)
      setTimeout(() => {
        state.notifications = state.notifications.filter(Notification => Notification.id != newNotification.id)
      },3000)
    }
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
