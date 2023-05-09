export interface IDeveloperData {
  id: number;
  name: string;
  role: string;
  avatarSrc: string;
  githubName: string;
  githubLink: string;
}

export type TypeJsonDevelopers = {
  developers: Array<IDeveloperData>;
};
