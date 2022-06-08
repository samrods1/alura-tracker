import IProjects from './IProjects';

export default interface ITask {
  durationInSeconds: number;
  description: string;
  project: IProjects;
}
