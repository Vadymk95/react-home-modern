export interface INavLink {
  id: string;
  title: string;
}

export interface IFeatures {
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface IFeedback {
  id: string;
  img: string;
  title: string;
  name: string;
  content: string;
}

export interface IStats {
  id: string;
  title: string;
  value: string;
}

type ILink = {
  name: string;
  link: string;
};

export interface IFooterLinks {
  title: string;
  links: ILink[];
}

export interface ISocialMedia {
  id: string;
  icon: string;
  link: string;
}

export interface IClients {
  id: string;
  logo: string;
}
