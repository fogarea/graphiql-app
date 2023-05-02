export interface IAuthorData {
  name: string;
  role: string;
  avatarSrc: string;
  githubName: string;
  githubLink: string;
}

export type TypeJsonDevelopers = {
  developers: Array<IAuthorData>;
};
